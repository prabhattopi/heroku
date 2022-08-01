// const { Router } = require("express")
const express =require("express")

const router=express.Router()
const {getTodo,addUsers,getoneUsers,deleteoneUsers}=require("./controller")
router.route("/:id").get(getoneUsers).delete(deleteoneUsers)
router.route("/").get(getTodo).post(addUsers)





module.exports=router