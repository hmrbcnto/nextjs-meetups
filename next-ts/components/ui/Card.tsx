import React, { FunctionComponent } from 'react';
import classes from './Card.module.css';

interface CardProps {
	children: JSX.Element | JSX.Element[]
}

const Card: FunctionComponent<CardProps> = (props: CardProps) => {
	return (
		<div className={classes.card}>{props.children}</div>
	)
}

export default Card;