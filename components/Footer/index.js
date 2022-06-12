//styles
import styles from '../../styles/footer.module.css'

//nextjs
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<ul>
				<li>
					<Link href='/about-us'>About</Link>
				</li>
				<li>
					<Link href='/new-meetup'>Create a new meetups</Link>
				</li>
				<li>
					<Link href='/all-meetups'>All meetups</Link>
				</li>
			</ul>
		</footer>
	)
}

export default Footer
