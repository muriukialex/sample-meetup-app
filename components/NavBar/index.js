import styles from '../../styles/navbar.module.css'
import Link from 'next/link'

const NavBar = () => {
	return (
		<nav className={styles.navbar}>
			<div>
				<Link href='/'>Home</Link>
			</div>
			<ul>
				<li>
					<Link href='/all-meetups'>All meetups</Link>
				</li>
				<li>
					<Link href='/new-meetup'>Create a new Meetup</Link>
				</li>
				<li>
					<Link href='/about-us'>About us</Link>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar
