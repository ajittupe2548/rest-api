import express from "express";
import {getUser, createUser, findUser, deleteUser, updateUser } from "../controllers/user.js";

const router = express.Router();

router.get('/', getUser);

router.post('/', createUser);

router.get('/:id', findUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;