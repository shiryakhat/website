# Shir Ya Khat · شیر یا خط

> A non-profit, volunteer-run podcast making blockchain and cryptocurrency accessible to Farsi speakers everywhere.

**[shiryakhat.net](https://shiryakhat.net)** · *"Heads or Tails"* in Farsi

**Shir Ya Khat** has published seven seasons (since 2016) of in-depth, bilingual conversations — recorded as live panels with builders, researchers, and experts from around the world. We cover Bitcoin fundamentals and mining, Ethereum and smart contracts, the DeFi ecosystem, scaling and Layer 2, major network upgrades (EIP-1559, Dencun, Pectra), privacy and its legal battles, AI × blockchain, and the philosophy of decentralization.

Part of the [Coiniran](https://coiniran.com) family, alongside [Coiniran Academy](https://coiniran.academy). Free and open — our goal is to remove the language barrier so the knowledge of blockchain and decentralization is accessible to Farsi speakers, and to offer a global open platform to discuss it.

## Listen & follow

- 🎧 [Spotify](https://open.spotify.com/show/7AQ3C6yGz4haADinqtP63N) · [Apple Podcasts](https://podcasts.apple.com/us/podcast/id1221206951) · [SoundCloud](https://soundcloud.com/shiryakhat)
- 📺 [YouTube](https://www.youtube.com/playlist?list=PLDwI1rIhknpNmr4nno40seb6FAiJ-jsun)
- 💬 [Telegram](https://t.me/shiryakhatpod) · [X / Twitter](https://x.com/shiryakhat)
- 📡 [RSS](https://shiryakhat.net/feed.xml)
- 📱 App for Android & iOS: [shiryakhat.app](https://shiryakhat.app) · [Google Play](https://play.google.com/store/apps/details?id=net.shiryakhat.app) · [TestFlight (iOS beta)](https://testflight.apple.com/join/VtyyXkUt)

## This repository

The Jekyll source for **shiryakhat.net**. Notable paths:

- `_posts/` — one Markdown file per episode (episode notes, sources, chapters, cross-links)
- `_includes/`, `_layouts/` — theme templates (episode `PodcastEpisode` JSON-LD lives in `_includes/head.html`)
- `llms.txt`, `llms-full.txt` — LLM-friendly index and full episode notes for AI crawlers
- `robots.txt`, `sitemap.xml`, `feed.xml` — crawler, sitemap, and RSS

## App integration

The site links into the Shir Ya Khat mobile app. Everything is driven by the `app:` block
in `_config.yml`.

- **Store CTAs** — hero call-out (`_includes/header.html`, landing page only) and footer
  block (`_includes/footer.html`), both using `_includes/app_badges.html` and the art in
  `img/badges/`. The iOS slot shows TestFlight until `app.app_store_url` is set in
  `_config.yml`; after that it shows the App Store badge automatically.
- **Open in app** — every episode links to `https://shiryakhat.app/episode/<id>`, where
  `<id>` is the post's `episode` front matter lowercased (`S07E07` → `s07e07`).
- **Chapters** — a post with its own `### زمان‌بندی فصل‌ها` section keeps it. Any other
  post gets a collapsible chapters list from `_data/app_episodes.json`
  (`_includes/app_chapters.html`), with each timestamp deep-linking into the app
  (`?t=<seconds>`). Set `app_chapters: false` in a post's front matter to turn it off.

`_data/app_episodes.json` is generated from the app's `content/episodes.json`. To refresh it:

```bash
python3 _scripts/sync_app_episodes.py /path/to/app/content/episodes.json
```

## Run locally

Requires **Ruby 3.x** (e.g. via `rbenv` or Homebrew) and Bundler 2.

```bash
gem install bundler
bundle install
bundle exec jekyll serve
# open http://127.0.0.1:4000/
```

## Add a new episode

1. Create a branch (e.g. `S08E01`).
2. Duplicate a file in `_posts/` and rename it `YYYY-MM-DD-slug.md`.
3. Fill in the front matter — `title`, `episode` (e.g. `S08E01`), `date`, `description`
   (a concise SEO paragraph), `img`, the platform links (`youtube`, `spotify`, …), and
   optionally `duration` and `keywords` — then write the episode notes in the body.
4. Push and open a Pull Request.

## Contributing

Issues and PRs are welcome — episode notes, corrections, translations, and site
improvements. The episode notes aim to be accurate, detailed, and richly cross-linked
so both people and search/AI can find and learn from them.

---

Jekyll theme: [Freelancer](https://github.com/jeromelachaud/freelancer-theme)
