# Sequelize Inventor API
This API allows you to perform CRUD operations on a database of Inventors!

## Endpoints
The following section provides information on the available endpoints for this API.

### Creating an Inventor

**Method**: ```POST```

**Endpoint**: ```/api/inventors```

**Description**: This endpoint creates a new Inventor with the provided information in the request body.

Request Body:
```
{
  "name": "string",
  "invention": "string",
  "year_invented": integer
}
```

Response:
```
{
  "id": integer,
  "name": "string",
  "invention": "string",
  "year_invented": integer,
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Getting All Inventors

**Method**: GET

**Endpoint**: ```/api/inventors```

**Description**: This endpoint retrieves all the Inventors stored in the database.

Response:
```
[
  {
    "id": integer,
    "name": "string",
    "invention": "string",
    "year_invented": integer,
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  },
]
```

### Updating an Inventor

**Method**: ```PUT```

**Endpoint**: ```/api/inventors/:id```

**Description**: This endpoint updates the Inventor with the specified id using the information in the request body.

Request Body:
```
{
  "name": "string",
  "invention": "string",
  "year_invented": integer
}
```

Response:
```
{
  "id": integer,
  "name": "string",
  "invention": "string",
  "year_invented": integer,
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Deleting an Inventor

**Method**: ```DELETE```

**Endpoint**: ```/api/inventors/:id```

**Description**: This endpoint deletes the Inventor with the specified id from the database.

Response:
```
{
  "id": integer,
  "name": "string",
  "invention": "string",
  "year_invented": integer,
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```