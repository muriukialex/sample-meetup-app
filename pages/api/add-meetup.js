import { MongoClient } from 'mongodb'

async function handler(req, res) {
	const MONGODB_CONNECTION_STRING = process.env.DB_MONGO_CONNECTION_STRING

	if (req.method == 'POST') {
		const data = req.body

		try {
			const client = await MongoClient.connect(MONGODB_CONNECTION_STRING)
			const db = client.db()
			const meetupsCollection = db.collection('meetups')

			try {
				const result = await meetupsCollection.insertOne(data)
				console.log('result', result)

				client.close()

				return res.status(201).json({ message: 'Meetup created successfully!' })
			} catch (error) {
				console.log(error)
			}
		} catch (error) {
			console.log(error)
		}
	}
}

export default handler
