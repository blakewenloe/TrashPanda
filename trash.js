const CronJob = require("cron").CronJob;
const dotenv = require("dotenv").config();

// Account SID & Auth Token from www.twilio.com/console
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

// Phone number to send text to / Twilio from number
const toNumber = process.env.TO_NUMBER;

// Twilio number from www.twilio.com/console/phone-numbers/incoming
const fromNumber = process.env.FROM_NUMBER;

// Define the trash day
const trashDay = process.argv[2];

//Send text to user's phone
const sendMessage = () => {
  client.messages
    .create({
      body: "TrashPanda: *shakes fist* Take out the trash, ya bum!",
      to: toNumber,
      from: fromNumber
    })
    .then(message => console.log("mesage sent", message.sid));
};

// Set the cron to run at this schedule every week
const job = new CronJob(`30 8 * * ${trashDay}`, function() {
  sendMessage();
});

// Initialize teh scheduler to run at 8am the day the user defined
const runScheduler = () => {
  console.log(`Scheduling message to send on: ${trashDay} at 8:00am`);
  job.start();
};

runScheduler();
