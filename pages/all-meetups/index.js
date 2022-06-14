//styles
import styles from '../../styles/main.module.css'

//components
import Card from '../../components/Card'
import AllMeetups from '../../components/meetups/AllMeetups'

//next assets
import Image from 'next/image'
import Link from 'next/link'

//mongodb
import { MongoClient } from 'mongodb'

const AllMeetupsPage = ({ data }) => {
	console.log('data', data)
	return (
		<div>
			<h1>All meetups</h1>
			{data.map(item => (
				<AllMeetups item={item} key={item.id} />
			))}
		</div>
	)
}

export async function getStaticProps() {
	const MONGODB_CONNECTION_STRING = process.env.DB_MONGO_CONNECTION_STRING
	const client = await MongoClient.connect(MONGODB_CONNECTION_STRING)
	const db = client.db()
	const meetupsCollection = db.collection('meetups')

	const allMeetups = await meetupsCollection.find().toArray()

	client.close()
	return {
		props: {
			data: allMeetups.map(meetup => ({
				title: meetup.title,
				description: meetup.description,
				imageUrl: meetup.imageUrl,
				address: meetup.address,
				id: meetup._id.toString(),
			})),
		},
		revalidate: 1,
	}
}

export default AllMeetupsPage
