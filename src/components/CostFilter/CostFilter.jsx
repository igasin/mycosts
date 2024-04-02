import styles from './CostFilter.module.scss'

export const CostFilter = props => {
	const yearChangeHandler = event => {
		props.onChangeYear(event.target.value)
	}

	return (
		<div className={styles.costFilter}>
			<div className={styles.costFilterControl}>
				<label>Selection by year</label>
				<select value={props.year} onChange={yearChangeHandler}>
					<option value='2024'>2024</option>
					<option value='2023'>2023</option>
					<option value='2022'>2022</option>
					<option value='2021'>2021</option>
				</select>
			</div>
		</div>
	)
}
