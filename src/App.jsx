import { Costs } from './components/Costs/Costs'

export function App() {
	const costsItemsArray = [
		{
			date: new Date(2024, 3, 1),
			description: 'Fridge',
			amount: 999.99,
		},
		{
			date: new Date(2023, 7, 15),
			description: 'MacBook',
			amount: 1990,
		},
		{
			date: new Date(2022, 11, 6),
			description: 'iPad',
			amount: 550,
		},
	]
	return (
		<div>
			<Costs costs={costsItemsArray} />
		</div>
	)
}
