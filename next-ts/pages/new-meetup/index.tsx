import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { MeetupData } from '../../types/meetup';
import Head from 'next/head';

const NewMeetup: FunctionComponent = () => {

	const router = useRouter();

	const onAddMeetup = async (meetup_data: MeetupData) => {
		// Send data to api route
		const response = await fetch('/api/new-meetup', {
			method: 'POST',
			body: JSON.stringify(meetup_data),
			headers: {
				'Contenxt-Type': 'application/json'
			}
		})

		const data = await response.json();
		router.push('/');
	}

	return (
		<div>
			<Head>
				<title> Add a New Meetup </title>
				<meta name="description" content="Add a new NextJS Meetup!" />
			</Head>
			<NewMeetupForm onAddMeetup={onAddMeetup} />
		</div>
	);
}

export default NewMeetup;