# Shir Ya Khat
This is the repository for Shir Ya Khat website.

[Shir Ya Khat](http://shiryakhat.net) podcast, which translates to "Head or Tails" in Farsi, started its non-profit mission in early 2017.

The Vision of Shir Ya Khat is open and free information for all, similar to [Coiniran](https://coiniran.com)

The main goal is to remove the language barrier in order to allow the knowledge on blockchain and decentralization to be accessible to Farsi speakers, and offer a global open platform for people to discuss related subjects. 


## How to run locally

- [Install Ruby 2.7.4 ](https://github.com/rbenv/rbenv#installing-ruby-versions)
- Follow these commands:
```bash
# Install jekyll and bundler
gem install jekyll bundler

# Install requirements
bundle install

# Run the web server
bundle exec jekyll serve 
```
- Go to http://127.0.0.1:4000/


## Add new episode
- Create a new branch (e.g. `S0502`)
- Duplicate one of the files in `_posts` and rename it to DATE-NAME.md
- Add all the episode details to the file
- Push to your repo and create a Pull Request on the main repo


--------------------------
Jekyll Theme: [Freelancer](https://github.com/jeromelachaud/freelancer-theme)