import { useState } from 'react'
import { Card } from '../Card/Card'
import { CostFilter } from '../CostFilter/CostFilter'
import { CostList } from '../CostList/CostList'
import { CostsDiagram } from '../CostsDiagram/CostsDiagram'
import styles from './Costs.module.scss'

export const Costs = props => {
	const [selectedYear, setSelectedYear] = useState('2024')

	const yearChangeHandler = year => {
		setSelectedYear(year)
	}

	const filteredCosts = props.costs.filter(
		cost => cost.date.getFullYear().toString() === selectedYear
	)

	return (
		<div>
			<Card className={styles.costs}>
				<CostFilter year={selectedYear} onChangeYear={yearChangeHandler} />
				<CostsDiagram costs={filteredCosts} />
				<CostList costs={filteredCosts} />
				{/* {!filteredCosts.length && `${costsContent}`}
				{filteredCosts &&
					filteredCosts.map(cost => (
						<CostItem
							key={cost.id}
							date={cost.date}
							description={cost.description}
							amount={cost.amount}
						/>
					))} */}
			</Card>
		</div>
	)
}
