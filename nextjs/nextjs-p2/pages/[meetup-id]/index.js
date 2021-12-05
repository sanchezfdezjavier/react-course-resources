import React, { Fragment } from "react";

import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails() {
  return (
    <MeetupDetail
      image={props.image}
      title={props.title}
      address={props.address}
      description={props.description}
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupsData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Iridium-4_Mission_%2825557986177%29.jpg/2880px-Iridium-4_Mission_%2825557986177%29.jpg",
        title: "First meetup",
        address: "Some street some city",
        description: "This is the first meetup",
      },
    },
  };
}
