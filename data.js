db.users.insertMany([
  { login: "user1", firstName: "Ivan", lastName: "Ivanov", createdAt: new Date() },
  { login: "user2", firstName: "Petr", lastName: "Petrov", createdAt: new Date() },
  { login: "user3", firstName: "Anna", lastName: "Sidorova", createdAt: new Date() },
  { login: "user4", firstName: "Oleg", lastName: "Smirnov", createdAt: new Date() },
  { login: "user5", firstName: "Maria", lastName: "Ivanova", createdAt: new Date() },
  { login: "user6", firstName: "Dmitry", lastName: "Volkov", createdAt: new Date() },
  { login: "user7", firstName: "Elena", lastName: "Kozlova", createdAt: new Date() },
  { login: "user8", firstName: "Alex", lastName: "Fedorov", createdAt: new Date() },
  { login: "user9", firstName: "Nina", lastName: "Morozova", createdAt: new Date() },
  { login: "user10", firstName: "Sergey", lastName: "Pavlov", createdAt: new Date() }
]);

db.exercises.insertMany([
  { name: "Push-ups", description: "Chest", muscleGroup: "Chest" },
  { name: "Squats", description: "Legs", muscleGroup: "Legs" },
  { name: "Pull-ups", description: "Back", muscleGroup: "Back" },
  { name: "Plank", description: "Core", muscleGroup: "Core" },
  { name: "Lunges", description: "Legs", muscleGroup: "Legs" },
  { name: "Burpees", description: "Full body", muscleGroup: "Full" },
  { name: "Crunches", description: "Abs", muscleGroup: "Core" },
  { name: "Deadlift", description: "Back", muscleGroup: "Back" },
  { name: "Bench Press", description: "Chest", muscleGroup: "Chest" },
  { name: "Shoulder Press", description: "Shoulders", muscleGroup: "Shoulders" }
]);

const userId = db.users.findOne()._id;

db.trainings.insertMany([
  {
    userId: userId,
    date: new Date(),
    exercises: [
      { name: "Push-ups", sets: 3, reps: 15 },
      { name: "Squats", sets: 4, reps: 10 }
    ]
  },
  {
    userId: userId,
    date: new Date(),
    exercises: [
      { name: "Pull-ups", sets: 3, reps: 8 },
      { name: "Plank", sets: 3, reps: 60 }
    ]
  }
]);
