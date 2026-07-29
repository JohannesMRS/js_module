import dotenv from 'dotenv';
import express from 'express';

const router = express.Router();

router.use(express.json());
dotenv.config();
