import express from "express";
import { updateUser } from "../controller/user.controller";
import { verifyToken } from "../utils/verifyUser";

const router = express.Router();

router.post('/update/:id', verifyToken, updateUser);