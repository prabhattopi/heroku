// const { Router } = require("express")
const express =require("express")

const router=express.Router()
const {getProduct,addProduct,getoneProduct,deleteProdcut,getqueryproduct,getquerycolor}=require("./controller")
router.route("/").get(getquerycolor)
router.route("/").get(getqueryproduct)
router.route("/:id").get(getoneProduct).delete(deleteProdcut)
router.route("/").get(getProduct).post(addProduct)






module.exports=router