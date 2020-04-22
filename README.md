# Simple Guys Bot

![Guy - the bot](https://github.com/lukeocodes/guys-bot/raw/master/assets/128w/standard-whos-a-good-bot.png "Guy - the bot logo")

If you're as concious as I am about the use of language in your Slack workspace, this will interest you.

With the existing [guys-bot-for-slack](https://glitch.com/~guys-bot-for-slack) needing some updates to work with the latest flavour of Slack API, I chose to recreate it using the most basic implementation of the Slack SDKs.

![Screenshot of the bot responding to the message](https://github.com/lukeocodes/guys-bot/raw/master/screenshot.gif "Screenshot of the bot responding to the message")

The bot responds with an ephemeral message, not seen by anyone but the user who originally messaged.

It requires the bot be invited into the channels you want it to listen on, so it can be implemented by individuals, or teams, as channels require, if that is what you want.

This guide has steps on the Slack API control panel. Please read [this article](https://dev.to/lukeocodes) on how to set up your Slack App to retrieve your SLACK_TOKEN and SLACK_SIGNING_SECRET.

## Installation

Get the repo.

```shell
git clone https://github.com/lukeocodes/guys-bot.git
cd guys-bot
```

Install it.

```shell
npm install
```

## Running it in Development Mode

### Configuration

```shell
cp .env.example .env
```

Edit `.env` with your Slack Token (the Bot Access Token) and App Signing Secret, plus a URL for a document that explains your etiquette, inclusion, and diversity policy.

### Run Dev

```shell
npm run dev
```

## Deploying it to Production

### To Start It

```shell
npm start
```

### Click to Deploy Options

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/lukeocodes/guys-bot)

## Logo

Guy - whos a good bot - is saved as SVG and is subject to the same license for the project. Enjoy :)