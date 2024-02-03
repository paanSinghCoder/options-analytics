'use client'
import { Suspense, useState } from 'react'
import {
	BarLineToggle,
	Chart,
	Dropdown,
	Navbar,
	NewsCard,
	OptionChainTable,
	TickerCards
} from '../src/components'
import { EXPIRY_DROPDOWN_DATA, OPTION_CHAINS_DATA } from '../src/mock'
import { LOGIN_PAGE, STRATEGY_BUILDER_PAGE } from '../src/constants/routes'
import useAuthHandler from '../src/hooks/useAuthHandler'

const Chain = () => {
	const [isChecked, setIsChecked] = useState(false)
	const { isLoggedIn, routeToUrl } = useAuthHandler()

	return (
		<Suspense>
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
								<div className="flex gap-2 items-center text-sm">
									Expiry
									<Dropdown menuItems={EXPIRY_DROPDOWN_DATA} />
								</div>
							</div>

							<OptionChainTable />
						</div>
						<div className="col-span-1">
							<div className="border rounded-md w-full h-[600px] flex items-center justify-center">
								<div
									onClick={() =>
										isLoggedIn ? routeToUrl(STRATEGY_BUILDER_PAGE) : routeToUrl(LOGIN_PAGE)
									}
									className="text-sm opacity-80 font-normal px-4 py-2 border rounded-lg shadow hover:opacity-100 cursor-pointer">
									{isLoggedIn ? 'Create a Strategy' : 'Login to create a strategy'}
								</div>
							</div>
							<NewsCard />
						</div>
					</div>
				</div>
			</main>
		</Suspense>
	)
}

export default Chain
