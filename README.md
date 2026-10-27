# NodeJS-CRUD-API

A small REST API for user records, split the conventional Express way into models, controllers and routers.

## Structure

```
server.js            app setup, middleware, MongoDB connection
models/user.js       Mongoose schema for a user
controller/user.js   create, read, update and delete handlers
routers/user.js      routes wired to the controller
```

## Stack

- **Express** for the HTTP layer
- **Mongoose** for the MongoDB schema and queries
- **cors** so a browser client can call it directly

## Endpoints

| Method | Path | Purpose |
|---|---|---|
| `POST` | `/create-user` | Create a user |
| `GET` | `/get-user` | List all users |
| `GET` | `/get-user/:id` | Fetch one user by id |
| `PUT` | `/update-user/:id` | Update a user |
| `DELETE` | `/delete-user/:id` | Delete a user |

## Running

```bash
npm install
npm start
```

`npm start` runs `nodemon server.js`. Point the connection in `server.js` at your MongoDB instance (local or Atlas) before starting.

## Notes

API practice project. `node_modules` is committed here, which is unusual for a repo of this size.
