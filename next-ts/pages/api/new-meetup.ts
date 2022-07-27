// /api/new-meetup
import { NextApiRequest, NextApiResponse } from "next";
import { CreateMeetup } from '../../services/meetups';


// handler function
// TODO: add error handling
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case 'POST':
			return CreateMeetup(req, res);
		default:
	}
}

export default handler;