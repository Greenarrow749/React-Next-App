import React, { Fragment } from "react";
import MeetupDetails from "../../components/meetups/MeetupDetails";
import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";

const MeetupDetailsPage = ({ meetupData }) => {
  return (
    <Fragment>
      <Head>
        <title>{meetupData.title}</title>
        <meta name="description" content={meetupData.description} />
      </Head>
      <MeetupDetails
        title={meetupData.title}
        image={meetupData.image}
        description={meetupData.description}
        address={meetupData.address}
      />
    </Fragment>
  );
};

// This fxn is always needed for 'pages' which need to pre-render dynamic data by using 'getStaticProps' fxn.
// We need this fxn because by using getStaticProps we are pre-rendering data during build time,
// but we need to keep in mind that this is gonna be a dynamic page, since for different meetup IDs different
// data needs to be loaded i.e. Next.js needs to pre-generate data for all possible IDs. But how will Next.js
// know what all data to pre-generate? Thats why we need to use getStaticPaths fxn
// which will return all the possible dynamic segment values
export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://Ashish749:Greenarrow123@node-dev.w7b9d75.mongodb.net/Meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("Meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    // false-when u know u have included all IDs(when an unmentioned ID is entered, 404 will be given)
    // true- when you have just entered frequently used IDs(when an unmentioned ID is entered, Next.js will dynamically generate data)
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  // Fetch data from API for a single meetup
  const client = await MongoClient.connect(
    "mongodb+srv://Ashish749:Greenarrow123@node-dev.w7b9d75.mongodb.net/Meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("Meetups");
  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  client.close();
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
        address: selectedMeetup.address,
      },
    },
  };
};

export default MeetupDetailsPage;
