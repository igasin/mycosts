import { useState } from 'react'
import { CostForm } from '../CostForm/CostForm'
import styles from './NewCost.module.scss'

export const NewCost = props => {
	const [isFormVisible, setIsFormVisible] = useState(false)

	const SaveCostDataHandler = inputCostData => {
		const costData = {
			...inputCostData,
			id: Math.random().toString(),
		}

		props.onAddCost(costData)
		setIsFormVisible(false)
	}

	const inputCostDataHandler = () => {
		setIsFormVisible(!isFormVisible)
	}

	const cancelCostHandler = () => {
		setIsFormVisible(false)
	}

	return (
		<div className={styles.newCost}>
			{!isFormVisible && (
				<button onClick={inputCostDataHandler}>Add new cost</button>
			)}
			{isFormVisible && (
				<CostForm
					onSaveCostData={SaveCostDataHandler}
					onCancel={cancelCostHandler}
				/>
			)}
		</div>
	)
}
