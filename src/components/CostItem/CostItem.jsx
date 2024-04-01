import { Card } from '../Card/Card'
import { CostDate } from '../CostDate/CostDate'
import styles from './CostItem.module.scss'

export const CostItem = props => {
	return (
		<Card className={styles.costItem}>
			<CostDate date={props.date} />
			<div className={styles.costItemDescription}>
				<h2>{props.description}</h2>
				<div className={styles.costItemPrice}>${props.amount}</div>
			</div>
		</Card>
	)
}
