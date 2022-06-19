//styles
import styles from '../../styles/form.module.css'

const MeetupForm = props => {
	const { handleSubmit, addingData } = props

	return (
		<div className={styles.form}>
			<h1>New meetup form</h1>
			<form onSubmit={handleSubmit} /* action='/api/add-meetup' method='post'*/>
				<div>
					<label htmlFor='title'>Meetup Title</label>
					<input type='text' id='title' name='title' placeholder='Title' required />
				</div>

				<div>
					<label htmlFor='imageUrl'>Meetup Image Url</label>
					<input type='text' id='imageUrl' name='imageUrl' placeholder='Image Url' required />
				</div>
				<div>
					<label htmlFor='address'>Meetup Address</label>
					<input type='text' id='address' name='address' placeholder='Meetup Address' required />
				</div>
				<div>
					<label htmlFor='description'>Meetup description</label>
					<textarea id='description' name='description' placeholder='Description' required />
				</div>
				<div>
					<input type='submit' value={addingData ? 'Adding your Meetup...' : 'Add the meetup'} disabled={addingData} />
				</div>
			</form>
		</div>
	)
}

export default MeetupForm
