const express=require('express');
const cors=require('cors')
const mongoose=require('mongoose')
var app=express()

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//mongo connect 
main().catch((err)=>console.log(err))
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/cakehut');
    console.log("database connected...")
}

//schema creation 
const cakeSchema= new mongoose.Schema(
    {'fullname':String},
    {timestamps:true}
)

// model create 
const cakemodel=mongoose.model('user',cakeSchema)  


app.post("/dataregister",(req,res)=>{
    const username=req.body.user;
    console.log(username)
    cakemodel.create({fullname:username})
    res.json("successfully") 
}) 

app.get("/allRecords",async(req,res)=>{
    const records= await cakemodel.find()
    if(records.length>0){
        res.json(records)
    }else{
        res.json([])
    }
})
app.listen(9000,()=>{
    console.log("server is running http://localhost:9000/")
});