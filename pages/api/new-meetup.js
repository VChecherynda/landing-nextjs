import { MongoClient } from "mongodb";

async function apiHandler(req,res) {
    if(req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://Vadym:Avy2qcDYAz4M7utE@cluster0.h6nlrnt.mongodb.net/meetups?retryWrites=true&w=majority')
        const db = client.db();

        const meetupCollection = db.collection('meetups');

        const result =  await meetupCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({ message: 'Meetup inserted' });
    }
}

export default apiHandler;