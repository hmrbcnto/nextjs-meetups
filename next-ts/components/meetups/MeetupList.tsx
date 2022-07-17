import React, { FunctionComponent } from 'react';

import { MeetupInterface } from '../../types/meetup';
import classes from './MeetupList.module.css';
import MeetupItem from './MeetupItem';

interface MeetupListProps {
	meetups: MeetupInterface[]
}

const MeetupList: FunctionComponent<MeetupListProps> = (props: MeetupListProps) => {
	return (
		<ul className={classes.list}>
			{props.meetups.map(meetup => (
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
