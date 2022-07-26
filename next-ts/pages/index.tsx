import React, { FunctionComponent, useEffect, useState } from 'react';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';
import Layout from '../components/layout/Layout';
import { MeetupInterface } from '../types/meetup';

interface HomePageProps {
	meetups: MeetupInterface[]
}

const HomePage: FunctionComponent<HomePageProps> = (props: HomePageProps) => {
	const [loadedMeetups, setLoadedMeetups] = useState<MeetupInterface[]>(props.meetups);

	useEffect(() => {
		setLoadedMeetups(loadedMeetups);
	}, [])

	
	return(
		<>
			<MeetupList meetups={loadedMeetups} />
		</>
	)
}


// Executed during build process, never on client 
// Can also access context.params, which will have the argument keys
export async function getStaticProps() {

	const client = await MongoClient.connect('mongodb+srv://hmrbcnt:jonasbayot@fullstackopenmongodb.lqee8.mongodb.net/meetups?retryWrites=true&w=majority');
	const db = client.db();

	const meetupsCollection = db.collection('meetups');

	const meetups = await meetupsCollection.find().toArray();

	client.close();
	
	return {
		props: {
			meetups: meetups.map(meetup => ({ 
				title: meetup.title,
				address: meetup.address,
				image: meetup.image,
				id: meetup._id.toString()
			}))
		},
		revalidate: 10 // # Of seconds nextjs regenerates the page after the build process
	}
}

// // Executes on server after deployment, runs on server
// // Runs every incoming request
// // Only use if you have data that changes multiple times per second, or if you need to access the incoming request
// export async function getServerSideProps(context) {
// 	const req = context.req;
// 	const res = context.res;

// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS
// 		}
// 	}
// }

export default HomePage;