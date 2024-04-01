import { useState } from 'react'
import { Card } from '../Card/Card'
import { CostDate } from '../CostDate/CostDate'
import styles from './CostItem.module.scss'

export const CostItem = props => {
	const [description, setDescription] = useState(props.description)

	const changeDescriptionHandler = () => {
		setDescription('New description')
	}

	return (
		<Card className={styles.costItem}>
			<CostDate date={props.date} />
			<div className={styles.costItemDescription}>
				<h2>{description}</h2>
				<div className={styles.costItemPrice}>${props.amount}</div>
			</div>
			<button onClick={changeDescriptionHandler}>Change Description</button>
		</Card>
	)
}
