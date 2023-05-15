import { MongoClient } from "mongodb";
//FOR API ROUTE: /api/new-meetup

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    
    const client = await MongoClient.connect(
      "mongodb+srv://Ashish749:Greenarrow123@node-dev.w7b9d75.mongodb.net/Meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("Meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({
      success: true,
      message: "A new Meetup created!",
    });
  }
};

export default handler;
