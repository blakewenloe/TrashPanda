const CronJob = require("cron").CronJob;
const dotenv = require("dotenv").config();

// Account SID & Auth Token from www.twilio.com/console
// Twilio fromNumber from www.twilio.com/console/phone-numbers/incoming
const { ACCOUNT_SID, AUTH_TOKEN, TO_NUMBER, FROM_NUMBER } = process.env;

const client = require("twilio")(ACCOUNT_SID, AUTH_TOKEN);

// Get the trash day from the arguments
const trashDay = process.argv[2];

//Send text to user's phone
const sendMessage = () => {
  client.messages
    .create({
      body: "TrashPanda: *shakes fist* Take out the trash, ya bum!",
      to: TO_NUMBER,
      from: FROM_NUMBER
    })
    .then(message => console.log("mesage sent", message.sid));
};

// Set the cron to run at this schedule every week
const job = new CronJob(`0 8 * * ${trashDay}`, function() {
  sendMessage();
});

// Initialize teh scheduler to run at 8am the day the user defined
const runScheduler = () => {
  console.log(`Scheduling message to send on: ${trashDay} at 8:00am`);
  job.start();
};

runScheduler();
