# TrashPanda

My girlfriend keeps getting mad at me for forgetting to take out the trash on trash day. So I'm going to make a Node / Twilio script to berate me every Wednesday morning.

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

Run the script with the first argument being the first three letters of the day of the week you want to schedule the text to send.

#### Example scheduling the text to send on Wednesdays.

```javascript
node trash.js wed
// Scheduling message to send on: wed at 8:00am
```

#### Options

`mon` `tue` `wed` `thu` `fri` `sat` `sun`

### TODO

Refactor the command line arguments and add a time of day flag. I.e. `node trash.js --trash-day=wed --time-am=7`
