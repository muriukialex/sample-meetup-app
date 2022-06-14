//styles
import styles from '../../styles/form.module.css'

//components
import MeetupForm from '../../components/meetups/MeetupForm'

//nextjs
import { useRouter } from 'next/router'

//react
import { useState } from 'react'

const NewMeetupPage = () => {
	const router = useRouter()
	const [addingData, setAddingData] = useState(false)
	const handleSubmit = async event => {
		setAddingData(true)
		event.preventDefault()
		const userData = {
			title: event.target.title.value,
			imageUrl: event.target.imageUrl.value,
			address: event.target.address.value,
			description: event.target.description.value,
		}
		const JSONdata = JSON.stringify(userData)

		const postEndpoint = '/api/add-meetup'
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSONdata,
		}

		const response = await fetch(postEndpoint, options)
		const result = await response.json()
		// setAddingData(false)
		console.log(result)

		router.push('/all-meetups')
	}
	return <MeetupForm handleSubmit={handleSubmit} addingData={addingData} />
}

export default NewMeetupPage
