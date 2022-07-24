import React, { FunctionComponent, PropsWithChildren, ReactElement } from 'react';
import { MeetupInterface } from '../../types/meetup';
import classes from './MeetupDetail.module.css';

const MeetupDetailComponent: FunctionComponent<MeetupInterface> = (props: MeetupInterface) => {
	return (
		<section
			className={classes.detail}>
			<img 
				src={props.image}
				alt={props.title}
				className={classes.detail_item}
			/>
			<h1> {props.title} </h1>
			<address>{props.address}</address> 
			<p> {props.description} </p>
		</section>
	)
}

export default MeetupDetailComponent;

