// our-domain/new-meetup
import React, { Fragment } from "react";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetup() {
  function addMeetupHanlder(enteredMeetupData) {
    console.log(enteredMeetupData);
  }
  return (
    <Fragment>
      <NewMeetupForm onAddMeetup={addMeetupHanlder} />
    </Fragment>
  );
}
