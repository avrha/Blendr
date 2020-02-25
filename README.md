Blendr is a hackathon project at Hyland in 2020. The idea is to create a social networking platform, with the focus of creating real relationships. To start use your domain specific email in the user setup and answer some custom questions. Then you will be paired with someone within your network, and will have to select a time and place to meet. At the end of the meeting you will be project you will be prompted with a quiz about the other user. Your goal is to remember as much as you can about the other user. Which will effect your overall score.

Dependences
-----------
 * nodejs (Version 12.16.1>)
 * npm (Version 6.13.7>)
 * expo-cli (Version 3.13.1>)
 * expo mobile app

Setup
-------
Use npm to install all the packages used by Blendr. Depending on your system this command may be required to be run under administrator privileges. 
If any warnings appear about missing packages for dependences, you will have to manually install those packages with npm. 
```
npm i
```
Start the Expo Client with the expo command line tool.
```
expo start
```
If any warnings appear about missing expo packages, install them with the expo package manager
```
expo install <name-of-package>
```
If the Expo Client starts up successfully, a new page will open in your web browser. Change the connection setting from
LAN to Tunnel, and then scan the QR code with the Expo mobile app. A live demo of Blendr will then run on your phone. 
