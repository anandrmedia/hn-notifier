# HN Notifier - A Hacker News Notifications Google Chrome Extension

![Hn Notifier Screenshot](https://cdn.engagespot.co/misc/hn_notifier.png)

HN Notifier is a chrome extension that shows the number of unread comments to your HackerNews thread. One of the issues with HackerNews is that it is difficult to know when someone has replied to your post or comment, thus by missing an opporunity to continue the conversation.

This extension makes it easy by showing you the latest replies to your thread while you were away!

Download this extension from Google Chrome Webstore - https://chrome.google.com/webstore/detail/hn-notifier/cdfedlekfaealogpkppjhlfcijmdlaep

Follow us on twitter for more updates - https://twitter.com/engagespot

# Privacy

This extension does not collect any of your private information such as email id, or cookies. The extension simply use your public Hacker News username and track replies to your posts / comments and notifies you via the bell. (No push notifications or emails!)

# Source Code

This project is open source. It has two components

1. Backend Worker
2. Chrome Extension

Backend Worker polls Hacker News APIs and figure out whom to be notified. It is written in `node`, `bull`. Feel free to submit PRs.
