# HN Notifier - A Hacker News Notifications Google Chrome Extension

![Hn Notifier Screenshot](https://cdn.engagespot.co/misc/hn_notifier.png)

HN Notifier is a chrome extension that shows the number of unread comments to your HackerNews thread. One of the issues with HackerNews is that it is difficult to know when someone has replied to your post or comment, thus by missing an opporunity to continue the conversation.

This extension makes it easy by showing you the latest replies to your thread while you were away!

Download this extension from Google Chrome Webstore - 

[![download](https://engagespot-website.s3.us-west-2.amazonaws.com/public/chrome_web_store_cta_57346788d7.png?updated_at=2023-05-22T06:00:11.705Z)](https://chrome.google.com/webstore/detail/hn-notifier/cdfedlekfaealogpkppjhlfcijmdlaep)

Follow us on twitter for more updates - 
https://twitter.com/anandrmedia
https://twitter.com/engagespot

# Technology

This extension was built using <a href="https://engagespot.co?ref=hn_notify_repo" target="_blank">Engagespot Notification Infrastructure API</a>

# Features

## In-App realtime bell and inbox

This extension adds an in-app inbox feed to your HackerNews app, just like the one you have in Reddit. Whenever you visit Hackernews, you can simply click on the bell icon to see unread notifications about replied, comments etc!

![inbox](https://lh3.googleusercontent.com/mGVxga_McWASW1KBfVUSoNq-qACbe5eVSmuX6qbHjkR989pnP9QN2zRfB1B6_ToxrIG5ozL5CDREIe5nAmxhIp6I=w640-h400-e365-rj-sc0x00ffffff)

## Optional email notifications

If you want to receive email notifications when someone replies to your comment on Hackernews, you can enable it by updating your email address in the extension popup!

![enabling email notification HackerNews](https://engagespot-website.s3.us-west-2.amazonaws.com/public/notifier_hackernews_email_694764bb04.png?updated_at=2023-05-22T05:37:37.388Z)

### Batched email notifications

You'll get batched email notifications like in Facebook, instead of spamming you with every reply that you receive!

![batched notification](https://lh3.googleusercontent.com/jQeO_eoO5xShvHL4OpNf1hq95RE7TTajMQsCoog1Tu53uc29wcKJ5hVj61uMmTchCVb2FTUtBuiJITxabkiRnfZTCg=w640-h400-e365-rj-sc0x00ffffff)

# Privacy

This extension does not collect any of your private information such as email id, or cookies. The extension simply use your public Hacker News username and track replies to your posts / comments and notifies you via the bell. (No push notifications or emails!)

# Source Code

This project is open source. It has two components

1. Backend Worker
2. Chrome Extension

Backend Worker polls Hacker News APIs and figure out whom to be notified. It is written in `node`, `bull`. Feel free to submit PRs.
