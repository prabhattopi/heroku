// Start here
const express=require("express")


const app=express()
app.use(express.json())
app.use("/users",require("./route"))
app.use("/products",require("./route2"))

app.listen(8000,()=>console.log("Server is started at 8000"))