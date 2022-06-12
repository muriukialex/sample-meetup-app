import { useRouter } from 'next/router'

const SingleMeetup = () => {
	const router = useRouter()
	const { meetupId } = router.query
	console.log(router.query)

	return (
		<div>
			<h1>SingleMeetup {meetupId}</h1>
			<div>This is a single meetup</div>
		</div>
	)
}

export default SingleMeetup
