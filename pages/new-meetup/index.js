import React, { Fragment } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";
import { useRouter } from "next/router";

const NewMeetupPage = () => {
  const router = useRouter();
  const addMeetupHandler = async (enteredMeetupData) => {
    await fetch("/api/new-meetup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enteredMeetupData),
    });
    router.push("/");
  };

  return (
    <Fragment>
      <Head>
        <title>Add React.js+Next.js meetup</title>
        <meta
          name="description"
          content="Add amazing awesome active meetups here."
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
};

export default NewMeetupPage;
