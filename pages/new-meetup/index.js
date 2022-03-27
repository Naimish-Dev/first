import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";

const NewMeetup = () => {
  const Router = useRouter();

  const addMeetuphendler = async (meetupData) => {
    
    const request = await fetch('/api/new-meetup', {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json'
      },


    });

    const data = await request.json();

    Router.push("/");
  };

  return (
    <>
      <NewMeetupForm onAddMeetup={addMeetuphendler}></NewMeetupForm>
 <Head>
         <title>New meetups</title>
         <meta  name="description" content="add your own meetup and create amazing networking pportunities"/>
    </Head>
    </>
  );
};

export default NewMeetup;
