import { Costs } from './components/Costs/Costs'
import { NewCost } from './components/NewCost/NewCost'

export function App() {
	const costsItemsArray = [
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

	const addCostHandler = cost => {
		console.log(cost)
		console.log('App Component')
	}

	return (
		<>
			<NewCost onAddCost={addCostHandler} />
			<Costs costs={costsItemsArray} />
		</>
	)
}
