import React, { FunctionComponent, useState } from 'react';
import MeetupDetailComponent from '../../components/meetups/MeetupDetail';
import { MeetupInterface } from '../../types/meetup';

const MeetupDetailPage: FunctionComponent<MeetupInterface> = (props: MeetupInterface) => {
	return (
		<>
			<MeetupDetailComponent 
				image="https://www.japan-guide.com/g21/2314_02.jpg"
				title="First Meetup"
				address="address"
				description="description"
				id="12345"
			/>
		</>
	)
}

export async function getStaticPaths() {
	// Describe all the dynamic segment values
	// All meetup ids in this case
	return {
		fallback: false, // tells if your paths key contains all of your possible dynamic keys or only some of them
		paths: [
			{ params: {
				// All key value pairs that might lead to your dynamic page
				meetup_id: 'm1'
				} 
			} // One object per version of the dynamic key
		]
	}
}

export async function getStaticProps(context) {
	// Fetch data for a single meetup

	const { meetup_id } = context.params;

	return {
		props: {
			meetupData: {
				image: "https://www.japan-guide.com/g21/2314_02.jpg",
				title: 'First Meetup',
				address: 'address',
				description: 'description',
				id: '12345'
			}
		}
	}
}

export default MeetupDetailPage;