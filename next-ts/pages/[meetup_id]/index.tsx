import { Collection, Db, MongoClient, ObjectId, WithId } from 'mongodb';
import Head from 'next/head';
import React, { FunctionComponent, useState } from 'react';
import MeetupDetailComponent from '../../components/meetups/MeetupDetail';
import { MeetupInterface, QueryMeetupInterface } from '../../types/meetup';

const MeetupDetailPage: FunctionComponent<MeetupInterface> = (props: MeetupInterface) => {
	return (
		<>
			<Head>
				<title> {props.title} </title>
				<meta name="description" content={props.title}/>
			</Head>
			<MeetupDetailComponent 
				image={props.image}
				title={props.title}
				address={props.address}
				description={props.description}
				id={props.id}
			/>
		</>
	)
}

export async function getStaticPaths() {
	// Describe all the dynamic segment values
	// All meetup ids in this case

	const client: MongoClient = await MongoClient.connect('mongodb+srv://hmrbcnt:jonasbayot@fullstackopenmongodb.lqee8.mongodb.net/meetups?retryWrites=true&w=majority');
	const db: Db = client.db();

	const meetupsCollection: Collection = db.collection('meetups');

	const meetups: WithId<Object>[] = await meetupsCollection.find({}, { projection: { _id: 1 } }).toArray();

	client.close();

	// Paths - All key value pairs that might lead to your dynamic page
	// One object per version of the dynamic key
	return {
		fallback: false, // tells if your paths key contains all of your possible dynamic keys or only some of them
		paths: meetups.map(meetup => {
			return { params: { meetup_id: meetup._id.toString() }}
		}
		)
	}
}

export async function getStaticProps(context) {
	// Fetch data for a single meetup
	const params = context.params;
	const client: MongoClient = await MongoClient.connect('mongodb+srv://hmrbcnt:jonasbayot@fullstackopenmongodb.lqee8.mongodb.net/meetups?retryWrites=true&w=majority');
	const db: Db = client.db();

	const meetupsCollection: Collection = db.collection('meetups');

	const meetup = (await meetupsCollection.findOne({ _id: new ObjectId(params.meetup_id) })) as QueryMeetupInterface;

	client.close();

	return {
		props: {
				image: meetup.image,
				id: meetup._id.toString(),
				address: meetup.address,
				title: meetup.title,
				description: meetup.description
		}
	}
}

export default MeetupDetailPage;