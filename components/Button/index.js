import styles from '../../styles/button.module.css'

const Button = props => {
	const bgcolor = props?.bgcolor
	return (
		<button className={styles.button} style={{ background: bgcolor }}>
			{props.children}
		</button>
	)
}

export default Button
