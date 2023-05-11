var eventEmitter = require("events").EventEmitter;
var eventemitter = new eventEmitter();
const DatabaseService = require("./services/databaseService");
const EmailService = require("./services/emailService");

//Instantiate the services
const emailService = new EmailService();
const databaseService = new DatabaseService();

//Subscribe emailSubscription event
eventemitter.addListener("emailSubscription", function (user) {
  console.log(
    "\nEmail Subscription Event Fired: " + user + " subscribed to our emails."
  );
  //call a Service
  emailService.send(user);
  databaseService.save(user);
});

//Subscribe boughtTicket event
eventemitter.on("boughtTicket", function (user) {
  console.log(
    "\nTicket Bought Event Fired : " +
      user +
      " bought tickets to our host show."
  );
  //call a Service
  emailService.send(user);
  databaseService.save(user);
});

//This below function will be called whenever we want to fire an event
function raiseEventsQueue(user) {
  // Raising emailSubscription event
  eventemitter.emit("emailSubscription", user);

  // Raising boughtTicket event
  eventemitter.emit("boughtTicket", user);
}

//calling the main function
raiseEventsQueue("user1@gmail.com");