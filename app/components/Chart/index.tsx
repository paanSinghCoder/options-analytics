'use client'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	Title,
	Tooltip,
	Legend
} from 'chart.js'
import { Line, Bar } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
)

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'bottom' as const
		},
		title: {
			display: false,
			text: 'Chart'
		}
	}
}

let currentNumber = 21550,
	incrementValue = 50

// Generate an array of labels based on the strikePrice
const strikePrice = Array.from({ length: 25 }, () => {
	const result = currentNumber
	currentNumber += incrementValue
	return result
})

export const data = {
	labels: strikePrice.map(String), // Convert numbers to strings for labels
	datasets: [
		{
			label: 'Calls IO 7,42,02,900',
			data: strikePrice.map(() => faker.number.int({ min: 1000000, max: 6000000 })),
			borderColor: 'rgb(255, 99, 132)',
			backgroundColor: 'rgba(255, 99, 132, 0.5)'
		},
		{
			label: 'Puts OI 8,72,87,550',
			data: strikePrice.map(() => faker.number.int({ min: 1000000, max: 6000000 })),
			borderColor: 'rgb(53, 162, 235)',
			backgroundColor: 'rgba(53, 162, 235, 0.5)'
		}
	]
}

export function Chart({ typeToggle = false }: { typeToggle: Boolean }) {
	if (typeToggle) {
		return <Bar options={options} data={data} />
	}

	return <Line options={options} data={data} />
}
