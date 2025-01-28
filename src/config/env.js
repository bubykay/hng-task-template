import dotenv from "dotenv";
import { getEnvVarible } from "../utils/index.js";
dotenv.config()


export default {
    port: getEnvVarible("port"),
    email: getEnvVarible('email'),
    githubUrl: getEnvVarible("github_url"),
};
