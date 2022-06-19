//nextjs
import Link from 'next/link'
import Image from 'next/image'

//components
import Button from '../Button'
import Card from '../Card'

const SingleMeetup = props => {
	const { id, title, imageUrl, address, description } = props
	console.log(props)
	return (
		<div>
			<div>
				<h1>Meetup Details</h1>
				<Link href='/all-meetups'>
					<a>
						<Button>Back</Button>
					</a>
				</Link>
			</div>
			<Card key={id}>
				<h3>{title}</h3>
				<p>{description}</p>
				<Image src={imageUrl} height={600} width={900} />
				<address>{address}</address>
			</Card>
		</div>
	)
}

export default SingleMeetup
