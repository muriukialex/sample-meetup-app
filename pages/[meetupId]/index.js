//components
import SingleMeetup from '../../components/meetups/SingleMeetup'

//nextjs

//mongodb
import { MongoClient } from 'mongodb'

const SingleMeetupPage = props => {
	// const { id, title, description, imageUrl, address } = props
	// console.log('props', props)

	return (
		<SingleMeetup
			id={1}
			title={'My team'}
			description={'desc'}
			imageUrl={'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg'}
			address={'Naio'}
		/>
	)
}

export async function getStaticPaths() {
	const MONGODB_CONNECTION_STRING = process.env.DB_MONGO_CONNECTION_STRING
	const client = await MongoClient.connect(MONGODB_CONNECTION_STRING)
	const db = client.db()
	const meetupsCollection = db.collection('meetups')

	const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray()
	console.log('meetups', meetups)
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

	const selectedMeetup = await meetupsCollection.findOne({ _id: meetupId })
	console.log('selected meetup', selectedMeetup)

	client.close()
	return {
		props: {
			meetupData: [], //selectedMeetup,
		},
	}
}

export default SingleMeetupPage
