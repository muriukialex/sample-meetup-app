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
				<span className={styles['small-disclaimer']}>Images used here are from pexels.com </span>
			</ul>
		</footer>
	)
}

export default Footer
