// our-domain/new-meetup
import React, { Fragment } from "react";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetup() {
  async function addMeetupHanlder(enteredMeetupData) {
    const response = await fetch("../api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
  }
  return (
    <Fragment>
      <NewMeetupForm onAddMeetup={addMeetupHanlder} />
    </Fragment>
  );
}
