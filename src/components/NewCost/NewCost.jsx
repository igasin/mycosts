import { CostForm } from '../CostForm/CostForm'
import styles from './NewCost.module.scss'

export const NewCost = props => {
	const onSaveCostDataHandler = inputCostData => {
		const costData = {
			...inputCostData,
			id: Math.random().toString(),
		}

		props.onAddCost(costData)
	}

	return (
		<div className={styles.newCost}>
			<CostForm onSaveCostData={onSaveCostDataHandler} />
		</div>
	)
}
