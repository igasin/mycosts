import styles from './CostForm.module.scss'

export const CostForm = () => {
	return (
		<form>
			<div className={styles.newCostControls}>
				<div className={styles.newCostControl}>
					<label>Name</label>
					<input type='text' />
				</div>
				<div className={styles.newCostControl}>
					<label>Amount</label>
					<input type='number' min='0.01' step='0.01' />
				</div>
				<div className={styles.newCostControl}>
					<label>Date</label>
					<input type='date' min='2019-01-01' step='2022-12-31' />
				</div>
				<div className={styles.newCostActions}>
					<button type='submit'>Add Cost</button>
				</div>
			</div>
		</form>
	)
}
