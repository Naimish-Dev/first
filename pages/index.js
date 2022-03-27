import { MongoClient } from "mongodb";
import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";
const HomePage=(props)=>{
    

return(<>
     <Head>
         <title>React meetups</title>
         <meta  name="description" content="Browser a huge list of highly active  react meetup"/>
    </Head>
    <MeetupList  meetups={props.meetups}> </MeetupList>   
    </>);

}

// re 

// export const getServerSideProps=(context)=>{
//     const req=context.req;
//     const res=context.res;

    
//     return{

//         props:{
//             meetups:meetupsItems
//         }
//     }
// }

 export async function  getStaticProps() { 
    const  client = await MongoClient.connect(
        'mongodb+srv://naimish-bhesaniya:QP8Ujp9AKokak1It@first.byede.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

const db =client.db();

const meetupCollection=db.collection("meetups");

const result=await meetupCollection.find().toArray();
console.log(result);

client.close();

    return { 
        props:{
            meetups: result.map(items=>
            ({
image:items.image,
title:items.title,
address:items.address,
id:items._id.toString(),
discription:items.description

            })
            )
        },
       revalidate:1
    };
}


export default HomePage;