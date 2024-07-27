import express from "express";
import {createUser, deleteUser, getUser, updateUser,getUserById} from "../controller/user.js";

const router = express.Router();
// create user route
router.post('/create-user', createUser);
// get All user route
router.get('/get-user', getUser);
// get user by id route
router.get('/get-user/:id', getUserById);
// update user route
router.put('/update-user/:id',updateUser);
// delete user route
router.delete('/delete-user/:id',deleteUser);


export default router;
