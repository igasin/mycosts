import { CostForm } from '../CostForm/CostForm'
import styles from './NewCost.module.scss'

export const NewCost = () => {
	return (
		<div className={styles.newCost}>
			<CostForm />
		</div>
	)
}
