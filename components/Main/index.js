//styles
import styles from '../../styles/main.module.css'

//components
import Button from '../Button'

//nextjs
import Link from 'next/link'

const Main = () => {
	return (
		<div className={styles.main}>
			<h1>Create your own meetup here</h1>
			<div>It's super simple. What's required</div>
			<ul>
				<li>Your meetup name ✍🏼</li>
				<li>Your meetup's meeting's address 🏘</li>
				<li>An image of the meetups Location 🏠</li>
			</ul>
			<p>Super simple and fun!</p>
			<Link href='/new-meetup'>
				<a>
					<Button>Get started here</Button>
				</a>
			</Link>
		</div>
	)
}

export default Main
