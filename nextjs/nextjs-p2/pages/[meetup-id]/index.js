import React, { Fragment } from "react";

import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Iridium-4_Mission_%2825557986177%29.jpg/2880px-Iridium-4_Mission_%2825557986177%29.jpg"
      title="First meetup"
      address="Some street some city"
      description="This is the first meetup"
    />
  );

  //   {
  //     id: "m1",
  //     title: "First meetup",
  //     image:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Iridium-4_Mission_%2825557986177%29.jpg/2880px-Iridium-4_Mission_%2825557986177%29.jpg",
  //     address: "Some silly address 1",
  //     description: "This is the first meetup 1",
  //   }
}
