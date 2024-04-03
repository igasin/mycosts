import { CostItem } from '../CostItem/CostItem'
import styles from './CostList.module.scss'

export const CostList = props => {
	if (!props.costs.length) {
		return <h2 className={styles.costListFallback}>No costs found.</h2>
	}

	return (
		<ul className={styles.costList}>
			{props.costs.map(cost => (
				<CostItem
					key={cost.id}
					date={cost.date}
					description={cost.description}
					amount={cost.amount}
				/>
			))}
		</ul>
	)
}
