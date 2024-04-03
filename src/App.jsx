import { useState } from 'react'
import { Costs } from './components/Costs/Costs'
import { NewCost } from './components/NewCost/NewCost'

const INITIAL_COSTS = [
	{
		id: 'c1',
		date: new Date(2024, 3, 1),
		description: 'Fridge',
		amount: 999.99,
	},
	{
		id: 'c2',
		date: new Date(2023, 7, 15),
		description: 'MacBook',
		amount: 1990,
	},
	{
		id: 'c3',
		date: new Date(2022, 11, 6),
		description: 'iPad',
		amount: 550,
	},
]

export function App() {
	const [costs, setCosts] = useState(INITIAL_COSTS)

	const addCostHandler = cost => {
		setCosts(prevCosts => {
			return [cost, ...prevCosts]
		})
	}

	return (
		<>
			<NewCost onAddCost={addCostHandler} />
			<Costs costs={costs} />
		</>
	)
}
