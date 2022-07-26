import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import classes from './MeetupItem.module.css';
import Card from '../ui/Card';

interface MeetupItemProps {
	image: string,
	title: string,
	address: string,
	id: string,
	key: string
}

const MeetupItem: FunctionComponent<MeetupItemProps> = (props: MeetupItemProps) => {
	const router = useRouter();

	const showDetailsHandler = () => {
		router.push(`/${props.id}`);
	}


	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.image}>
					<img src={props.image} alt={props.title} />
				</div>
				<div className={classes.content}>
					<h3> {props.title} </h3>
					<address> {props.address} </address>
				</div>
				<div className={classes.actions}>
					<button onClick={showDetailsHandler}> Show Detail </button>
				</div>
			</Card>
		</li>
	)
}

export default MeetupItem;