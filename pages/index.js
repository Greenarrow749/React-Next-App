import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React.js+Next.js meetup</title>
        <meta name="description" content="Homepage for React/Next meetups" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

// STATIC SITE GENERATION METHOD FOR PRE-RENDERING OF DATA (fxn needs to be named 'getStaticProps' only and it has to return an object
// with 'props' as a property of that object, and this props object will further have the props that this component is gonna use.)
// (This below fxn will execute even BEFORE the component returns any JSX, to be precise, DURING build process BEFORE deployment)
// This means that this fxn will prepare reqd. props data before any rendering. This should be called in 'pages' folder only.

export const getStaticProps = async () => {
  // Fetch data from API
  const client = await MongoClient.connect(
    "mongodb+srv://Ashish749:Greenarrow123@node-dev.w7b9d75.mongodb.net/Meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("Meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10, //This property will ensure that the outdated data gets regenerated every 10 secs
  };
};

// SERVER-SIDE RENDERING METHOD FOR PRE-RENDERING OF DATA (This fxn will not run during build process like SSG, but this will
// always run on the server AFTER deployment, therefore through 'context' arg, it gives access to req and res)
// export const getServerSideProps = async (context) => {
//   //Fetch data from API
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETS,
//     },
//   };
// };

export default HomePage;
