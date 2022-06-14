//components
import SingleMeetup from '../../components/meetups/SingleMeetup'

//nextjs

//mongodb
import { MongoClient } from 'mongodb'

const SingleMeetupPage = props => {
	const { id, title, description, imageUrl, address } = props
	console.log('props', props)

	return <SingleMeetup id={id} title={title} description={description} imageUrl={imageUrl} address={address} />
}

export async function getStaticProps(context) {
	const meetupId = context.params.meetupId
	const MONGODB_CONNECTION_STRING = process.env.DB_MONGO_CONNECTION_STRING
	const client = await MongoClient.connect(MONGODB_CONNECTION_STRING)
	const db = client.db()
	const meetupsCollection = db.collection('meetups')

	const selectedMeetup = await meetupsCollection.findOne({ _id: meetupId })
	client.close()

	return {
		props: {
			data: selectedMeetup,
		},
	}
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

export default SingleMeetupPage
