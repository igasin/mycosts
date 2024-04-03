import styles from './Diagram.module.scss'
import { DiagramBar } from './DiagramBar'

export const Diagram = props => {
	const dataSetsValues = props.dataSets.map(dataSet => dataSet.value)

	const maxMonthCosts = Math.max(...dataSetsValues)

	return (
		<div className={styles.diagram}>
			{props.dataSets.map(dataSet => (
				<DiagramBar
					key={dataSet.label}
					label={dataSet.label}
					value={dataSet.value}
					maxValue={maxMonthCosts}
				/>
			))}
		</div>
	)
}
