const fs=require("fs")
const { v4: uuidv4 } = require('uuid');
const user=fs.readFileSync(`./data/users.json`,{encoding:"utf-8"})
const prod=fs.readFileSync(`./data/products.json`,{encoding:"utf-8"})
const Prodcuts=JSON.parse(prod)
// console.log(user)
let users=JSON.parse(user)
const getTodo=(req,res)=>{
    res.send(users)
}
const addUsers=(req,res)=>{
   let newUsers={
    id:uuidv4(),
    ...req.body
   }

   users.push(newUsers)
//    fs.writeFileSync(`./data/users.json`,JSON.stringify(users),{encoding:"utf-8"})
   res.send(newUsers)

}

const getoneUsers=(req,res)=>{
    let id=req.params.id
    let one=users.find(e=>e.id===id)
    console.log(one)
    res.send(one)

}
const deleteoneUsers=(req,res)=>{
    let id=req.params.id
    let one=users.filter(e=>e.id!==id)
    // fs.writeFileSync(`./data/users.json`,JSON.stringify(one),{encoding:"utf-8"})
    res.sendStatus(200).send("OK")

}


const getProduct=(req,res)=>{
    res.send(Prodcuts)
}
const addProduct=(req,res)=>{
   let newUsers={
    id:uuidv4(),
    ...req.body
   }

   Prodcuts.push(newUsers)
//    fs.writeFileSync(`./data/users.json`,JSON.stringify(users),{encoding:"utf-8"})
   res.send(newUsers)

}

const getoneProduct=(req,res)=>{
    let id=req.params.id
    let one=users.find(e=>e.id===id)
    console.log(one)
    res.send(one)

}
const deleteProdcut=(req,res)=>{
    let id=req.params.id
    let one=Prodcuts.filter(e=>e.id!==id)
    // fs.writeFileSync(`./data/users.json`,JSON.stringify(one),{encoding:"utf-8"})
    res.sendStatus(200).send("OK")

}

const getqueryproduct=(req,res)=>{
    let q=req.query.sizes
    console.log(q)
    let arr=Prodcuts.filter(e=>e.sizes.find(r=>r==q))
    res.send(arr)
}
const getquerycolor=(req,res)=>{
    let q=req.query.colors
    console.log(q)
    let arr=Prodcuts.filter(e=>e.colors.find(r=>r==q))
    res.send(arr)
}
// const addTodo=(req,res)=>{
//     res.send("pyaz le lo")
// }




module.exports={getTodo,addUsers,getoneUsers,deleteoneUsers,getProduct,addProduct,getoneProduct,deleteProdcut,getqueryproduct,getquerycolor}