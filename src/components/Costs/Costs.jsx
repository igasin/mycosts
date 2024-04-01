import { CostItem } from '../CostItem/CostItem'
import styles from './Costs.module.scss'

export const Costs = props => {
	return (
		<div className={styles.costs}>
			<CostItem
				date={props.costs[0].date}
				description={props.costs[0].description}
				amount={props.costs[0].amount}
			/>
			<CostItem
				date={props.costs[1].date}
				description={props.costs[1].description}
				amount={props.costs[1].amount}
			/>
			<CostItem
				date={props.costs[2].date}
				description={props.costs[2].description}
				amount={props.costs[2].amount}
			/>
		</div>
	)
}
