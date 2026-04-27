db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["login", "firstName", "lastName"],
      properties: {
        login: {
          bsonType: "string",
          minLength: 3
        },
        firstName: {
          bsonType: "string"
        },
        lastName: {
          bsonType: "string"
        }
      }
    }
  }
});
