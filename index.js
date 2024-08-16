import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { generateResponse } from "./gemini/start.js";

const app = express();

dotenv.config();

app.use(cors());

generateResponse();
