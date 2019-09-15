# BlackDesertFeed
A simple Boss Feed for Black Desert

## About
This is a BlackDesert bosses feed for discord, be sure that you're playing in ``SA`` before running this.<br>
All the messages are currently in ``brazilian portuguese``, this project is a POC (Prove of Concept) and can be used for education purposes<br><br>
This software sends a webhook message when a boss is going to spawn in ``1 hour, 30 minutes or 5 minutes``

## How To Setup
1 - Rename ``data/config.json.default`` to ``data/config.json`` and setup the configurations being: <br>
- path -> create a webhook inside your channel and copy the url leaving everything after discordapp.com (``/app/...``)
- username -> the username that you want the webhook to have
- avatar_url -> the avatar that you want the webhook to have
- update_delay -> for how long it should wait for the next execution (in milliseconds)<br>

2 - Start the node process with your favorite software, personally I use [forever](https://www.npmjs.com/package/forever), which is a pretty decent one

## License
BlackDesertRSS is licensed over [MIT License](https://github.com/HeyZeer0/BlackDesertRSS/blob/master/LICENSE) © Fabio Augusto 2019