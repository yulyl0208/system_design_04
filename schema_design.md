
## Сущности

* User
* Exercise
* Training

---

## Коллекции

### users

```json
{
  "_id": ObjectId,
  "login": "user123",
  "firstName": "Ivan",
  "lastName": "Ivanov",
  "createdAt": Date
}
```

---

### exercises

```json
{
  "_id": ObjectId,
  "name": "Push-ups",
  "description": "Chest exercise",
  "muscleGroup": "Chest"
}
```

---

### trainings

```json
{
  "_id": ObjectId,
  "userId": ObjectId,
  "date": Date,
  "exercises": [
    {
      "name": "Push-ups",
      "sets": 3,
      "reps": 15
    }
  ]
}
```




