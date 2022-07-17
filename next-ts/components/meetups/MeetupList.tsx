import React, { FunctionComponent } from 'react';

import classes from './MeetupList.module.css';
import MeetupItem from './MeetupItem';

interface Meetup {
	id: string,
	image: string,
	title: string,
	address: string
}

interface MeetupListProps {
	meetup: Meetup[]
}

const MeetupList: FunctionComponent<MeetupListProps> = (props: MeetupListProps) => {
	return (
		<ul className={classes.list}>
			{props.meetup.map(meetup => (
				<MeetupItem
					key={meetup.id}
					id={meetup.id}
					image={meetup.image}
					title={meetup.title}
					address={meetup.address}
				/>
			))}
		</ul>
	)
}

export default MeetupList;
