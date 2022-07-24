import React, { FunctionComponent, useState } from 'react';
import MeetupDetailComponent from '../../components/meetups/MeetupDetail';
import { MeetupInterface } from '../../types/meetup';


const MeetupDetailPage: FunctionComponent = () => {
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

export default MeetupDetailPage;