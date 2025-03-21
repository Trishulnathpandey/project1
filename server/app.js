// Load environment variables (only in development mode)
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const app = express();

const connect = require("./config/db");

// Middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

// Controllers
const prodController = require("./controller/prod.controller");
const userController = require("./controller/user.controller");
const cartController = require("./controller/cart.controller");
const wishlistController = require("./controller/wishlist.controller");
const { authenticate } = require("./middlewares/authenticate");

// Routes
app.use("/courses", prodController);
app.use("/join", userController);
app.use("/cart", cartController);
app.use("/wishlist", wishlistController);

app.post("/auth", authenticate, async (req, res) => {
  try {
    return res.status(200).send({ auth: true, user: req.user });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

// Start the server
app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`✅ Server is running on port ${PORT}`);
  } catch (err) {
    console.error("❌ Database connection error:", err.message);
  }
});
