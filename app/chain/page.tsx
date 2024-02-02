'use client'
import { useState } from 'react'
import {
	BarLineToggle,
	Chart,
	Navbar,
	NewsCard,
	OptionChainTable,
	TickerCards
} from '../components'
import { OPTION_CHAINS_DATA } from '../src/mock'

const Chain = () => {
	const [isChecked, setIsChecked] = useState(false)

	return (
		<main className="pb-14">
			<div className="border-b">
				<Navbar />
			</div>
			<div className="max-w-7xl mx-auto px-8 pt-10">
				<div className="w-full grid grid-cols-3 gap-4">
					<div className="col-span-2">
						<TickerCards cardData={OPTION_CHAINS_DATA} />
						<div>
							<BarLineToggle isChecked={isChecked} setIsChecked={setIsChecked} />

							<Chart typeToggle={isChecked} />
						</div>
						<div className="flex justify-between pb-8 pt-20 px-2">
							<h3 className="font-semibold">NIFTY 50 Option Chain</h3>
							<div>drop</div>
						</div>

						<OptionChainTable />
					</div>
					<div className="col-span-1">
						<div className="border rounded-md w-full h-[600px] flex items-center justify-center">
							<div className="text-sm opacity-80 font-normal px-4 py-2 border rounded-lg shadow hover:opacity-100 cursor-pointer">
								Login to create a strategy
							</div>
						</div>
						<NewsCard />
					</div>
				</div>
			</div>
		</main>
	)
}

export default Chain
