//styles
import styles from '../../styles/form.module.css'

//components
import MeetupForm from '../../components/meetups/MeetupForm'
import CreationSuccess from '../../components/CreationSuccess'
import { ToastContainer, toast } from 'react-toastify'

//nextjs
import { useRouter } from 'next/router'

//react
import { useEffect, useState } from 'react'

const NewMeetupPage = () => {
	const router = useRouter()
	const [addingData, setAddingData] = useState(false)
	const [success, setSuccess] = useState(null)
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
		//result contains the following object
		/* 
		{
			message: Meetup created successfully!
		}
		*/
		if (result.message === 'Meetup created successfully!') {
			setSuccess(true)
		}

		setTimeout(() => {
			router.push('/all-meetups')
		}, 2500)
	}
	// useEffect(() => {
	// 	setSuccess(true)
	// }, [])
	console.log('success info', success)
	return <>{success ? <CreationSuccess /> : <MeetupForm handleSubmit={handleSubmit} addingData={addingData} />}</>
}

export default NewMeetupPage
