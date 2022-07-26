export interface MeetupInterface  {
	id: string,
	_id?: object,
	image: string,
	title: string,
	address: string,
	description?: string
};


export interface MeetupData {
	title: string,
	image: string,
	address: string,
	description: string
}

export interface CreateMeetupInterface {
	image: string,
	title: string,
	address: string,
	description?: string	
}

export interface QueryMeetupInterface {
	_id: object,
	image: string,
	title: string,
	address: string,
	description?: string
}