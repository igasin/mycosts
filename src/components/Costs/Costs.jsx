import { useState } from 'react'
import { Card } from '../Card/Card'
import { CostFilter } from '../CostFilter/CostFilter'
import { CostItem } from '../CostItem/CostItem'
import styles from './Costs.module.scss'

export const Costs = props => {
	const [selectedYear, setSelectedYear] = useState('2024')

	const yearChangeHandler = year => {
		setSelectedYear(year)
	}

	return (
		<div>
			<Card className={styles.costs}>
				<CostFilter year={selectedYear} onChangeYear={yearChangeHandler} />
				{props.costs.map(cost => (
					<CostItem
						key={cost.id}
						date={cost.date}
						description={cost.description}
						amount={cost.amount}
					/>
				))}
			</Card>
		</div>
	)
}
