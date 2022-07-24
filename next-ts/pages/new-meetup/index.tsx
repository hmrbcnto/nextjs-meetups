import React, { FunctionComponent } from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { MeetupData } from '../../types/meetup';

const NewMeetup: FunctionComponent = () => {

	const onAddMeetup = (meetup_data: MeetupData) => {
		console.log(meetup_data);
	}

	return (
		<div>
			<NewMeetupForm onAddMeetup={onAddMeetup} />
		</div>
	);
}

export default NewMeetup;