# TrashPanda

My girlfriend keeps getting mad at me for forgetting to take out the trash on trash day. So I'm going to make a Node / Twilio script to berate me every Wednesday morning.
![TrashPanda hard at work](https://i.imgur.com/QTQG9AX.png)


### Install

```
npm install
```

### Set Environment Variables

1. Get your Account SID & Auth Token from www.twilio.com/console.
2. Get your Twilio number from www.twilio.com/console/phone-numbers/incoming.
3. Open `.example.env` in the root of the project.
4. Set the `ACCOUNT_SID` to your Account SID.
5. Set the `AUTH_TOKEN` to your Auth Token.
6. Save and rename the file `.env`.

### Run the Script

Run `node trash.js [day]`. Replace `[day]` with the first three letters of the day of the week you want to scheduler to text you.

#### Example scheduling the text to send on Wednesdays.

```javascript
node trash.js wed
// Scheduling message to send on: wed at 8:00am
```

#### Options

`mon` `tue` `wed` `thu` `fri` `sat` `sun`

### TODOS

1. Refactor the command line arguments and add a time of day flag. I.e. `node trash.js --trash-day=wed --time-am=7`
2. Add custom message content flag. I.e. `--message='You're just like your father'`
