import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

function Home(props) {
  return (
    <>
      <Head>
        <title>React meetups</title>
        <meta 
          name="description"
          content="This blog is used for educational purpose"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect('mongodb+srv://Vadym:Avy2qcDYAz4M7utE@cluster0.h6nlrnt.mongodb.net/meetups?retryWrites=true&w=majority')
  const db = client.db();

  const meetupCollection = db.collection('meetups');

  const meetups = await meetupCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        description: meetup.description
      }))
    }
  }
}

export default Home;
