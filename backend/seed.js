require("dotenv").config();
const mongoose = require("mongoose");
const Pets = require("./models/models.js");

const petsToSeed = [
  {
    name: "Fluffy",
    friends: ["Snowball", "Bella"],
  },
  {
    name: "Charlie",
    friends: ["Lucy", "Daisy", "Cooper"],
  },
  {
    name: "Rocky",
    friends: ["Apollo", "Zeus"],
  },
  {
    name: "Luna",
    friends: ["Stella", "Nova"],
  },
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGO, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Connected to the DB for seeding ✅");

    // Optional: Clear existing data
    await Pets.deleteMany({});
    console.log("Cleared existing pets 🗑️");

    // Insert new pets
    await Pets.insertMany(petsToSeed);
    console.log("Seeded pets with friends 🌱");

    mongoose.connection.close();
    console.log("Connection closed 👋");
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seedDB();
