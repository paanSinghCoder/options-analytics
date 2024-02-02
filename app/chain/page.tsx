'use client'
import { useState } from 'react'
import { Chart, Navbar, OptionChainTable, TickerCards } from '../components'
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
							<div className="flex justify-between pb-2 px-2 pt-16">
								<h3 className="font-semibold">NIFTY OI Chart</h3>
								<label className="relative inline-flex items-center mb-5 cursor-pointer">
									<input
										type="checkbox"
										className="sr-only peer"
										onChange={event => setIsChecked(event.currentTarget.checked)}
										checked={isChecked}
									/>
									<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-cyan-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-700"></div>
									<span className="ms-3 text-sm font-medium opacity-60">Line / Bar</span>
								</label>
							</div>

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
					</div>
				</div>
			</div>
		</main>
	)
}

export default Chain
