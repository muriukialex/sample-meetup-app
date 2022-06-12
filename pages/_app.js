import '../styles/globals.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

//styles
import styles from '../styles/main.module.css'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<NavBar />
			<div className={styles.main}>
				<Component {...pageProps} />
			</div>
			<Footer />
		</>
	)
}

export default MyApp
