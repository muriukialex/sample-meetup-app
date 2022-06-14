//components
import Card from '../Card'
import Button from '../Button'

//nextjs
import Link from 'next/link'
import Image from 'next/image'

const AllMeetups = props => {
	const { item } = props
	return (
		<Card key={item.id}>
			<h3>{item.title}</h3>

			<p>{item.description}</p>

			<Image src={item.imageUrl} height={600} width={900} />
			<address>{item.address}</address>
			<Link href={'/' + item.id}>
				<a>
					<Button bgcolor='red'>Show details</Button>
				</a>
			</Link>
		</Card>
	)
}

export default AllMeetups
