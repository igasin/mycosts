import { useState } from 'react'
import styles from './CostForm.module.scss'

export const CostForm = props => {
	const [inputName, setInputName] = useState('')
	const [inputAmount, setInputAmount] = useState('')
	const [inputDate, setInputDate] = useState('')

	// const [userInput, setUserInput] = useState({
	// 	name: '',
	// 	amount: '',
	// 	date: '',
	// })

	const nameChangeHandler = event => {
		setInputName(event.target.value)
		// setUserInput({ ...userInput, name: event.target.value })

		// setUserInput(previousState => {
		// 	return {
		// 		...previousState,
		// 		name: event.target.value,
		// 	}
		// })
	}

	const amountChangeHandler = event => {
		setInputAmount(event.target.value)
		// setUserInput({ ...userInput, amount: event.target.value })
	}

	const dateChangeHandler = event => {
		setInputDate(event.target.value)
		// setUserInput({ ...userInput, date: event.target.value })
	}

	const submitHandler = event => {
		event.preventDefault()

		const costData = {
			description: inputName,
			amount: inputAmount,
			date: new Date(inputDate),
		}

		props.onSaveCostData(costData)
		setInputName('')
		setInputAmount('')
		setInputDate('')
	}

	return (
		<form onSubmit={submitHandler}>
			<div className={styles.newCostControls}>
				<div className={styles.newCostControl}>
					<label>Name</label>
					<input value={inputName} type='text' onChange={nameChangeHandler} />
				</div>
				<div className={styles.newCostControl}>
					<label>Amount</label>
					<input
						value={inputAmount}
						type='number'
						min='0.01'
						step='0.01'
						onChange={amountChangeHandler}
					/>
				</div>
				<div className={styles.newCostControl}>
					<label>Date</label>
					<input
						value={inputDate}
						type='date'
						min='2019-01-01'
						step='2022-12-31'
						onChange={dateChangeHandler}
					/>
				</div>
				<div className={styles.newCostActions}>
					<button type='submit'>Add Cost</button>
					<button type='button' onClick={props.onCancel}>
						Cancel
					</button>
				</div>
			</div>
		</form>
	)
}
