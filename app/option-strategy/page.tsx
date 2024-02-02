'use client'
import { useState } from 'react'
import { Dropdown, Navbar } from '../src/components'
import {
	EXPIRY_DROPDOWN_DATA,
	INSTRUMENT_DROPDOWN_DATA,
	POSITIONS_DROPDOWN_DATA,
	STRIKE_PRICE_DROPDOWN_DATA,
	strategies
} from '../src/mock'
import { PlusCircleIcon, TrashIcon } from '@heroicons/react/outline'

const OptionStrategy = () => {
	const [rowCount, setRowCount] = useState(3)

	return (
		<main className="pb-14">
			<div className="border-b">
				<Navbar />
			</div>
			<div className="max-w-7xl mx-auto px-8 pt-10">
				<div className="w-full px-6 py-3 rounded-lg bg-cyan-700 text-white cursor-pointer flex justify-between items-center">
					<p className="text-md">
						Welcome to Zanskar Option Strategy Builder. You can also enroll to Zanskar Academy to
						learn Options Trading for free.
					</p>
					<div className="text-white text-2xl">➜</div>
				</div>
				<h3 className="font-semibold text-xl my-6">Strategy Builder</h3>
				<div className="w-full px-6 py-5 rounded-md border flex items-center gap-4">
					<Dropdown />
					<div className="text-green-700 font-semibold">21853.8 🠹 156.35 (0.72%)</div>
					<div className="text-xs font-normal border px-2 py-1 rounded-md">Lot size: 50</div>
				</div>

				<div className="w-full px-6 py-5 rounded-md border flex items-center gap-4 mt-4">
					<h3 className="text-sm">Pre-built Strategies:</h3>
					{strategies.map((item: any) => (
						<button
							key={item.id}
							className="hover:bg-cyan-700 hover:text-white font-normal  text-sm py-2 px-5 rounded-md border text-gray-700">
							{item.title}
						</button>
					))}
				</div>

				<div className="w-full rounded-md border flex items-center gap-4 mt-4">
					<table className="w-full text-sm text-left opacity-80">
						<thead className="text-xs uppercase border-b">
							<tr>
								<th scope="col" className="px-6 py-3">
									Instrument
								</th>
								<th scope="col" className="px-6 py-3">
									Expiry
								</th>
								<th scope="col" className="px-6 py-3">
									Strike Price
								</th>
								<th scope="col" className="px-6 py-3">
									Position
								</th>
								<th scope="col" className="px-6 py-3">
									No. of lots
								</th>
								<th scope="col" className="px-6 py-3">
									Trade price
								</th>

								<th scope="col" className="px-6 py-3">
									{rowCount <= 8 && (
										<PlusCircleIcon
											className="h-6 w-6 text-gray-600 cursor-pointer hover:text-green-600"
											onClick={() => setRowCount(prev => prev + 1)}
										/>
									)}
								</th>
							</tr>
						</thead>
						<tbody>
							{Array.from(Array(rowCount).keys(), item => item + 1).map((item: number) => (
								<tr key={item}>
									<th className="px-6 py-4">
										<Dropdown menuItems={INSTRUMENT_DROPDOWN_DATA} />
									</th>
									<td className="px-6 py-4">
										<Dropdown menuItems={EXPIRY_DROPDOWN_DATA} />
									</td>
									<td className="px-6 py-4">
										<Dropdown menuItems={STRIKE_PRICE_DROPDOWN_DATA} />
									</td>
									<td className="px-6 py-4">
										<Dropdown menuItems={POSITIONS_DROPDOWN_DATA} />
									</td>
									<td className="px-6 py-4">
										<input
											type="text"
											name="lots"
											className="block w-full rounded-md border py-1.5 pl-3 border-gray-300 pr-20 text-gray-900 placeholder:text-gray-400 "
											placeholder="0"
										/>
									</td>
									<td className="px-6 py-4">
										<input
											type="text"
											name="tradePrice"
											className="block w-full rounded-md border py-1.5 pl-3 border-gray-300 pr-20 text-gray-900 placeholder:text-gray-400 "
											placeholder="0.00"
										/>
									</td>
									<td className="px-6 py-4">
										<TrashIcon
											className="h-5 w-5 text-gray-600 cursor-pointer hover:text-red-600"
											onClick={() => null}
										/>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</main>
	)
}

export default OptionStrategy
