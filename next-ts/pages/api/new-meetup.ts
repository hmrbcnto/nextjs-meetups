// /api/new-meetup
import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import { CreateMeetupInterface } from "../../types/meetup";


// handler function
// TODO: add error handling
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case 'POST':
			const data: CreateMeetupInterface = JSON.parse(req.body);
			const { image, title, address, description } = data;

			const client = await MongoClient.connect('mongodb+srv://hmrbcnt:jonasbayot@fullstackopenmongodb.lqee8.mongodb.net/meetups?retryWrites=true&w=majority');
			const db = client.db();

			const meetupsCollection = db.collection('meetups');

			const result = await meetupsCollection.insertOne({
				title,
				image,
				address,
				description
			});

			client.close(); // Closing client

			res.status(201).json({ message: 'Meetup created' });
		default:
	}
}

export default handler;