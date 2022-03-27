import { MongoClient } from "mongodb";

const handler= async ( req , res)=>{

if(req.method== "POST"){

    const data=req.body;



    const  client = await MongoClient.connect(
        'mongodb+srv://naimish-bhesaniya:QP8Ujp9AKokak1It@first.byede.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

const db =client.db();

const meetupCollection=db.collection("meetups");

const result=await meetupCollection.insertOne(data);

client.close();
res.status(201).json({message:"insert meetup successfully"})

}
}
export default handler;
