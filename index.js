import express from "express"
import { MongoClient } from "mongodb"
import cors from "cors"
import * as dotenv from "dotenv"
dotenv.config()
import dataRouter from "./routes/data.route.js"

const app = express()
app.use(cors())
app.use(express.json())


const MONGO_URL =  process.env.MONGO_URL
const client = new MongoClient(MONGO_URL)
await client.connect()

const PORT = process.env.PORT

app.use("/data",dataRouter)

app.listen(PORT)

export {client}
