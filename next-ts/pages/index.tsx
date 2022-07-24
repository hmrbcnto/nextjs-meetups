import React, { FunctionComponent } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import Layout from '../components/layout/Layout';

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
	return(
		<>
			<MeetupList meetups={DUMMY_MEETUPS} />
		</>
	)
}

export default HomePage;