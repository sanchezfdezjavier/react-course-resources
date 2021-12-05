import React from "react";

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Iridium-4_Mission_%2825557986177%29.jpg/2880px-Iridium-4_Mission_%2825557986177%29.jpg",
    address: "Some silly address 1",
    description: "This is the first meetup 1",
  },
  {
    id: "m2",
    title: "Second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Ayuntamiento%2C_La_Coru%C3%B1a%2C_Espa%C3%B1a%2C_2015-09-25%2C_DD_44.jpg/2880px-Ayuntamiento%2C_La_Coru%C3%B1a%2C_Espa%C3%B1a%2C_2015-09-25%2C_DD_44.jpg",
    address: "Some silly address 2",
    description: "This is the first meetup 2",
  },
];

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// // Runs on the server on every request -> for high frequency changing data
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

// Runs on the server after the revalidation time (if there are requests) -> for low frequency changing data
export async function getStaticProps() {
  // fetch data from API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
      revalidate: 10, // sets time till next re-render if there are incoming requests for this page
    },
  };
}
