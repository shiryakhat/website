#!/usr/bin/env python3
"""Regenerate _data/app_episodes.json (episode chapters) from the app's data.

THIS IS A MANUAL, OCCASIONAL MAINTENANCE TOOL. THE SITE BUILD DOES NOT RUN IT
AND DOES NOT DEPEND ON IT.

How chapters work on the site
-----------------------------
Chapters are STATIC. _data/app_episodes.json is a normal committed file, and
Jekyll reads it at build time like any other _data file
(_includes/app_chapters.html renders it as the collapsible
"زمان‌بندی فصل‌ها" list). Nothing is fetched during `jekyll build`: no network,
no app repo, no Python. A fresh clone builds with chapters as-is.

When to run this script
-----------------------
Only when the app's content/episodes.json has changed in a way the site should
pick up, i.e. for FUTURE episodes:
  - a new episode was added to the app, or
  - an existing episode's chapters (titles / start times) were edited.

    python3 _scripts/sync_app_episodes.py /path/to/app/content/episodes.json
    git add _data/app_episodes.json && git commit   # the commit is what ships

The input file is only read, never modified. If you never run this script
again, the site keeps building and showing the chapters already committed;
new episodes simply have no chapters list until the data file is updated.

Output format
-------------
A JSON object keyed by app episode id (the lowercased episode code, e.g.
S07E07 -> s07e07, matching a post's `episode` front matter), each with
`code`, `durationSec` and `chapters` [{startSec, time, title}].

This directory starts with "_", so Jekyll never copies it into _site.
"""
import json
import sys
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "_data" / "app_episodes.json"


def fmt_time(sec):
    """mm:ss under an hour, h:mm:ss from an hour up."""
    h, rem = divmod(int(sec), 3600)
    m, s = divmod(rem, 60)
    return f"{h}:{m:02d}:{s:02d}" if h else f"{m:02d}:{s:02d}"


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    episodes = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))

    out = {}
    for ep in sorted(episodes, key=lambda e: e["id"]):
        chapters = sorted(ep.get("chapters") or [], key=lambda c: c["startSec"])
        out[ep["id"]] = {
            "code": ep["code"],
            "durationSec": ep.get("durationSec"),
            "chapters": [
                {
                    "startSec": int(c["startSec"]),
                    "time": fmt_time(c["startSec"]),
                    "title": c["title"].strip(),
                }
                for c in chapters
                if c.get("title", "").strip()
            ],
        }

    OUT.parent.mkdir(exist_ok=True)
    OUT.write_text(
        json.dumps(out, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    total = sum(len(e["chapters"]) for e in out.values())
    print(f"Wrote {OUT} ({len(out)} episodes, {total} chapters)")


if __name__ == "__main__":
    main()
