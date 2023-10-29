# discord-bot-gen
A discord bot to give accounts to your members (deezer, sportify, Call Of Duty, etc...)
This bot is in french

# Create the bot
To create the bot, go to [https://discord.com/devlopers/application](https://discord.com/developers/applications).
After logging in, click on the new application button
Name your app and accept the [Developer Term of Services](https://discord.com/developers/docs/policies-and-agreements/developer-terms-of-service) and the [Developer Policy](https://discord.com/developers/docs/policies-and-agreements/developer-policy) and click on create.
In the General Information section, you can set up a description, put a profile picture, add some tags and change the name ofyour bot.
Go to the Bot section and scroll down. In the Privileged Gateaway Intens section, enable all of the intents (PRESENCE INTENT, SERVER MEMBERS INTENT, MESSAGE CONTENT INTENT) and if you want to disable the option so that not everyone can add your bot, remove the public bot.
To invite the bot to your server, go to the OAuth2 section,
Here there is 2 possibilities,
The first one -> You have unabled the public bot option : In General (always in OAuth2 section), on AUTHORIZATION METHOD click on None and select In App Authorization.
The seconde one -> You have unabled the public bot option : In General (always in OAuth2 section), on AUTHORIZATION METHOD keep None.
Go tu URL Generator click on bot and application.commands then administrator and copy the link.
Go into your Discord server and paste the link.
Click on it, click on continue, allow (or authorize) and if you have captcha complete it if not it's finish

# Start the bot
To start the bot, go back to the Bot section, click on Reset Token and copy it.
Open the config.js file (if you don't have visual studio code download it here -> [https://code.visualstudio.com/](https://code.visualstudio.com/) (stable version))
In token, replace YOUR_BOT_TOKEN by your token (don't remove this -> " )
Go to the [nodejs website](nodejs.org) and install the LTS version for your system (Windows, Linux, Mac)
Now go back to vscode (visual studio code) and open up a terminal using ctrl + j or Terminal and New terminal
Type npm init -y
Type npm i @discordjs/rest@2.0.1 discord.js@14.13.0 ms@2.1.3 mysql@2.18.1 path@0.12.7 sanitize-filename@1.6.3 (ms is not necessary for the moment but in the futur it will be)
And finally type node main and it's done!

# Problem ?
If you have a problem, don't panic. You can juste join my Discord server and open a post in discordjs. Here is the server -> [https://discord.gg/fKwx3MJGua](https://discord.gg/fKwx3MJGua)
