import React, { FunctionComponent } from 'react';
import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

interface MeetupData {
	title: string,
	image: string,
	address: string,
	description: string
}

interface NewMeetupFormProps {
	onAddMeetup(meetup: MeetupData): void;
}

const NewMeetupForm: FunctionComponent<NewMeetupFormProps> = (props: NewMeetupFormProps) => {
	const titleInputRef = useRef<HTMLInputElement>();
	const imageInputRef = useRef<HTMLInputElement>();
	const addressInputRef = useRef<HTMLInputElement>();
	const descriptionInputRef = useRef<HTMLTextAreaElement>();

	const submitEventHandler = () => {
		event.preventDefault();

		const enteredTitle: string = titleInputRef.current.value;
		const enteredImage: string = imageInputRef.current.value;
		const enteredAddress: string = addressInputRef.current.value;
		const enteredDescription: string = descriptionInputRef.current.value;

		const meetup: MeetupData = {
			title: enteredTitle,
			image: enteredImage,
			address: enteredAddress,
			description: enteredDescription
		};

		props.onAddMeetup(meetup);
	}

	return (
		<Card>
			<form className={classes.form} onSubmit={submitEventHandler}>
				<div className={classes.control}>
					<label htmlFor='title'> Meetup Title </label>
				</div>
				<div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
				<div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows={5}
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
			</form>
		</Card>
	)
}

export default NewMeetupForm;