#!/usr/bin/env python3
"""Sync chapter data from the ShiryaKhat app into the website.

Reads the app's content/episodes.json (read-only) and writes
_data/app_episodes.json, keyed by app episode id (the lowercased episode
code, e.g. S07E07 -> s07e07). The site uses it in _includes/app_chapters.html
to render a chapters list for posts that don't carry their own.

Usage:
    python3 _scripts/sync_app_episodes.py /path/to/app/content/episodes.json

Re-run whenever the app's episodes.json changes, then commit the result.
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
