import { MongoClient ,ObjectId} from "mongodb";
import MeetupDetail from "../../components/meetups/meetupDetail";
import Head from "next/head";
const meetup=(props)=>{
    return(
        <>
         <Head>
         <title>{props.MeetupDetail.title}</title>
         <meta  name="description" content={props.MeetupDetail.description}/>
    </Head>
        <MeetupDetail
        image={props.MeetupDetail.image}
        title={props.MeetupDetail.title}
        address={props.MeetupDetail.address}
        discription={props.MeetupDetail.discription}
        />

        </>
    ) 
};


export async function getStaticPaths(){



    const  client = await MongoClient.connect(
        'mongodb+srv://naimish-bhesaniya:QP8Ujp9AKokak1It@first.byede.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

const db =client.db();

const meetupCollection=db.collection("meetups");
    
    const selestmeetup= await meetupCollection.find({},{_id:1}).toArray();
    
    client.close();

    return{
fallback:false,
paths:
  selestmeetup.map((meetup)=>({params:{meetupid:meetup._id.toString()}
}))

    };
}

export async function  getStaticProps(context){
const meetupid=context.params.meetupid;

const  client = await MongoClient.connect(
    'mongodb+srv://naimish-bhesaniya:QP8Ujp9AKokak1It@first.byede.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

const db =client.db();

const meetupCollection=db.collection("meetups");

const selestmeetup= await meetupCollection.findOne({_id:ObjectId(meetupid)})
    
client.close();

    return{
        props:{
             MeetupDetail:{id:selestmeetup._id.toString(),
            image:selestmeetup.image,
        title:selestmeetup.title,
    description:selestmeetup.description,
address:selestmeetup.address},
        }
    }
}

 export default meetup;


 