// CREATE
db.users.insertOne({
  login: "newUser",
  firstName: "Test",
  lastName: "User"
});

// READ
db.users.find({ login: { $eq: "user1" } });

db.users.find({
  $or: [
    { firstName: { $regex: "Iv" } },
    { lastName: { $regex: "ov" } }
  ]
});

db.exercises.find();

db.trainings.find();

// UPDATE
db.users.updateOne(
  { login: "user1" },
  { $set: { firstName: "Updated" } }
);

db.trainings.updateOne(
  {},
  {
    $push: {
      exercises: { name: "Burpees", sets: 3, reps: 12 }
    }
  }
);

// DELETE
db.users.deleteOne({ login: "user10" });

db.trainings.updateOne(
  {},
  {
    $pull: { exercises: { name: "Squats" } }
  }
);
