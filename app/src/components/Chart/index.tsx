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
import { getNumbersArray } from '../../helpers'

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

export const data = {
	labels: getNumbersArray().map(String), // Convert numbers to strings for labels
	datasets: [
		{
			label: 'Calls IO 7,42,02,900',
			data: getNumbersArray().map(() => faker.number.int({ min: 1000000, max: 6000000 })),
			borderColor: 'rgb(255, 99, 132)',
			backgroundColor: 'rgba(255, 99, 132, 0.5)'
		},
		{
			label: 'Puts OI 8,72,87,550',
			data: getNumbersArray().map(() => faker.number.int({ min: 1000000, max: 6000000 })),
			borderColor: 'rgb(53, 162, 235)',
			backgroundColor: 'rgba(53, 162, 235, 0.5)'
		}
	]
}

export function Chart({ typeToggle = false }: { typeToggle?: Boolean }) {
	if (typeToggle) {
		return <Bar options={options} data={data} />
	}

	return <Line options={options} data={data} />
}
