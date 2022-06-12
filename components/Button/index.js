import styles from '../../styles/button.module.css'

const Button = props => {
	return <button className={styles.button}>{props.children}</button>
}

export default Button
