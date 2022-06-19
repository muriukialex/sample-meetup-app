//components
import SingleMeetup from '../../components/meetups/SingleMeetup'

//nextjs

//mongodb
import { MongoClient, ObjectId } from 'mongodb'

const SingleMeetupPage = props => {
	return (
		<SingleMeetup
			id={props.meetupData.id}
			title={props.meetupData.title}
			description={props.meetupData.description}
			imageUrl={props.meetupData.imageUrl}
			address={props.meetupData.address}
		/>
	)
}

export async function getStaticPaths() {
	const MONGODB_CONNECTION_STRING = process.env.DB_MONGO_CONNECTION_STRING
	const client = await MongoClient.connect(MONGODB_CONNECTION_STRING)
	const db = client.db()
	const meetupsCollection = db.collection('meetups')

	const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray()
	client.close()

	return {
		paths: meetups.map(meetup => ({
			params: { meetupId: meetup._id.toString() },
		})),
		fallback: false,
	}
}

export async function getStaticProps(context) {
	const meetupId = context.params.meetupId
	const MONGODB_CONNECTION_STRING = process.env.DB_MONGO_CONNECTION_STRING
	const client = await MongoClient.connect(MONGODB_CONNECTION_STRING)
	const db = client.db()
	const meetupsCollection = db.collection('meetups')

	const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) })

	client.close()
	return {
		props: {
			meetupData: {
				id: selectedMeetup._id.toString(),
				title: selectedMeetup.title,
				description: selectedMeetup.description,
				address: selectedMeetup.address,
				imageUrl: selectedMeetup.imageUrl,
			},
		},
	}
}

export default SingleMeetupPage
