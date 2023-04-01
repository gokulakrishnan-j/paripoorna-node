import express from "express"
import { userData, studentData } from "../service/data.service.js"
const Router = express.Router()

Router.get("/user",async function(request,respone){
    const user = await userData()
    respone.send(user)

})

Router.get("/student",async function(request,respone){
    const student = await studentData()
respone.send(student)
})
export default Router


