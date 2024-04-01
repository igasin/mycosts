import styles from './CostDate.module.scss'

export const CostDate = props => {
	const month = props.date.toLocaleString('en-US', { month: 'long' })
	const year = props.date.getFullYear()
	const day = props.date.toLocaleString('en-US', { day: '2-digit' })

	return (
		<div className={styles.costDate}>
			<div className={styles.costDateMonth}>{month}</div>
			<div className={styles.costDateYear}>{year}</div>
			<div className={styles.costDateDay}>{day}</div>
		</div>
	)
}
