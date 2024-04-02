import { useState } from 'react'
import styles from './CostForm.module.scss'

export const CostForm = () => {
	const [name, setName] = useState('')
	const [amount, setAmount] = useState('')
	const [date, setDate] = useState('')

	const nameChangeHandler = event => {
		setName(event.target.value)
	}
	const amountChangeHandler = event => {
		setAmount(event.target.value)
	}

	const dateChangeHandler = event => {
		setDate(event.target.value)
	}

	return (
		<form>
			<div className={styles.newCostControls}>
				<div className={styles.newCostControl}>
					<label>Name</label>
					<input type='text' onChange={nameChangeHandler} />
				</div>
				<div className={styles.newCostControl}>
					<label>Amount</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						onChange={amountChangeHandler}
					/>
				</div>
				<div className={styles.newCostControl}>
					<label>Date</label>
					<input
						type='date'
						min='2019-01-01'
						step='2022-12-31'
						onChange={dateChangeHandler}
					/>
				</div>
				<div className={styles.newCostActions}>
					<button type='submit'>Add Cost</button>
				</div>
			</div>
		</form>
	)
}
