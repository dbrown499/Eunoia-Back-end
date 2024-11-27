// DEPENDENCIES
const app = require("./app.js");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;


// LOG: Stripe Initialization (Optional)
console.log("Stripe initialized with key:", process.env.STRIPE_SECRET_KEY.slice(0, 8) + "...");

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

