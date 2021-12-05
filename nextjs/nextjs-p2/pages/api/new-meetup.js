import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://user-admin:Nl5SVzobylpOz4hi@cluster0.osz55.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db;
    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}
