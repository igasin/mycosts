import styles from './CostItem.module.scss'

export const CostItem = () => {
	const costDate = new Date()
	const costDescription = 'Title'
	const costSum = 0

	return (
		<div className={styles.costItem}>
			<div>{costDate}</div>
			<div className={styles.costItemDescription}>{costDescription}</div>
			<div>{costSum}</div>
		</div>
	)
}
