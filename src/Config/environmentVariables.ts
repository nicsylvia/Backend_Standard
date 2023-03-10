import dotenv from "dotenv"

dotenv.config();

export const environmentVariables = {
    port: process.env.port as string,
    DBURI: process.env.DB_URL as string
}