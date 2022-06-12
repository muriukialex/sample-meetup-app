import styles from '../../styles/card.module.css'

const Card = props => {
	return (
		<div className={styles.card}>
			<div>{props.children}</div>
		</div>
	)
}

export default Card
