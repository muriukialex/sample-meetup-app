//styles
import styles from '../../styles/form.module.css'

const NewMeetup = () => {
	const handleSubmit = async event => {
		event.preventDefault()
		const postEndpoint = '/api/add-meetup'

		const userData = {
			title: event.target.title.value,
			description: event.target.description.value,
			address: event.target.address.value,
			imageUrl: event.target.imageUrl.value,
		}
		const JSONdata = JSON.stringify(userData)

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSONdata,
		}

		const response = await fetch(postEndpoint, options)
		const result = await response.json()
		console.log(result)
	}
	return (
		<div className={styles.form}>
			<h1>New meetup form</h1>
			<form onSubmit={handleSubmit} /* action='/api/add-meetup' method='post'*/>
				<input type='text' name='title' placeholder='Title' required />
				<input type='text' name='description' placeholder='Description' required />
				<input type='text' name='address' placeholder='Address' required />
				<input type='text' name='imageUrl' placeholder='Meetup image url' required />
				<input type='submit' value='Add the meetup' />
			</form>
		</div>
	)
}

export default NewMeetup
