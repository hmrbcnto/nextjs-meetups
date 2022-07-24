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

const HomePage: FunctionComponent = () => {
	const [loadedMeetups, setLoadedMeetups] = useState<MeetupInterface[]>([]);

	useEffect(() => {
		setLoadedMeetups(DUMMY_MEETUPS);
	}, [])

	
	return(
		<>
			<MeetupList meetups={loadedMeetups} />
		</>
	)
}

export default HomePage;