//styles
import styles from '../../styles/main.module.css'

//components
import Card from '../../components/Card'

//next assets
import Image from 'next/image'
import Link from 'next/link'

const Allmeetups = ({ data }) => {
	console.log('data', data)
	return (
		<div>
			<h1>All meetups</h1>
			{data.map(item => (
				<Card key={item.id}>
					<Link href={'/' + item.id}>
						<a>
							<h3>{item.title}</h3>

							<p>{item.description}</p>

							<Image src={item.imageUrl} height={600} width={900} />
							<address>{item.address}</address>
						</a>
					</Link>
				</Card>
			))}
		</div>
	)
}

export async function getStaticProps() {
	return {
		props: {
			data: [
				{
					id: 1,
					title: 'React Developers Kenya 2022 Meetup',
					description: 'This is the best React developers meetup in Kenya!',
					address: 'Ihub Senteu Plaza, Room 234',
					imageUrl: 'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg',
				},
				{
					id: 2,
					title: 'Angular Developers Kenya 2022 Meetup',
					description: 'This is the best Angular developers meetup in Kenya!',
					address: 'Ihub Senteu Plaza, Room 239',
					imageUrl: 'https://images.pexels.com/photos/3182826/pexels-photo-3182826.jpeg',
				},
				{
					id: 3,
					title: 'NodeJS Developers Kenya 2022 Meetup',
					description: 'This is the best NodeJS developers meetup in Kenya!',
					address: 'Ihub Senteu Plaza, Room 2',
					imageUrl: 'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg',
				},
			],
		},
	}
}

export default Allmeetups
