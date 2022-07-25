import React, { FunctionComponent, useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import Layout from '../components/layout/Layout';
import { MeetupInterface } from '../types/meetup';

const DUMMY_MEETUPS = [
	{
		id: 'm1',
		title: 'Meetup 1',
		image: 'https://www.japan-guide.com/g21/2314_02.jpg',
		address: 'Address 1',
		description: 'Description 1'
	},
	{
		id: 'm2',
		title: 'Meetup 2',
		image: 'https://www.japan-guide.com/g21/2314_02.jpg',
		address: 'Address 2',
		description: 'Description 2'
	},
	{
		id: 'm3',
		title: 'Meetup 3',
		image: 'https://www.japan-guide.com/g21/2314_02.jpg',
		address: 'Address 3',
		description: 'Description 3'
	}
]

interface HomePageProps {
	meetups: MeetupInterface[]
}

const HomePage: FunctionComponent<HomePageProps> = (props: HomePageProps) => {
	const [loadedMeetups, setLoadedMeetups] = useState<MeetupInterface[]>(props.meetups);

	useEffect(() => {
		setLoadedMeetups(DUMMY_MEETUPS);
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
	return {
		props: {
			meetups: DUMMY_MEETUPS
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