'use client'

import { Suspense } from 'react'
import {
	AcademyCard,
	GithubCard,
	Navbar,
	NewsCard,
	StockOptionsTable,
	StrategyBuilderCard,
	TickerCards
} from './src/components'
import { LOGIN_PAGE } from './src/constants/routes'
import useAuthHandler from './src/hooks/useAuthHandler'
import { INDEX_OPTIONS_DATA, OPTION_CHAINS_DATA } from './src/mock'
import { BrowserView, MobileView } from 'react-device-detect'

const HomePage = () => {
	const { isLoggedIn, routeToUrl } = useAuthHandler()

	return (
		<main className="pb-14">
			<div className="border-b">
				<Navbar />
			</div>
			<div className="max-w-7xl mx-auto px-8 pt-10">
				<div className="flex items-center justify-between mb-10 w-full">
					<div className="">Welcome, user</div>
					{!isLoggedIn && (
						<button
							onClick={() => routeToUrl(LOGIN_PAGE, true)}
							className="bg-cyan-700 hover:bg-cyan-800 text-white font-normal text-sm py-2 px-5 rounded">
							Login to continue
						</button>
					)}
				</div>
				<TickerCards cardData={OPTION_CHAINS_DATA} />

				<div className="pb-8 pt-10">Index Options</div>
				<TickerCards cardData={INDEX_OPTIONS_DATA} />

				<div className="pb-8 pt-10">Stock Options</div>
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					<div className="lg:col-span-2 sm:col-span-3">
						<StockOptionsTable />
					</div>
					<div className="lg:col-span-1 sm:col-span-3">
						<AcademyCard />
						<StrategyBuilderCard />
						<NewsCard />
						<GithubCard />
					</div>
				</div>
			</div>
		</main>
	)
}

const Home = () => (
	<Suspense fallback={<>Loading...</>}>
		<BrowserView>
			<HomePage />
		</BrowserView>
		<MobileView>
			<div className="w-screen h-screen flex items-center justify-center">
				<img className="block h-12 w-auto" src="/icons/bull-dark.png" alt="zanskar" />
				<p>Zanskar Securities webapp is best suited for desktop browsers.</p>
			</div>
		</MobileView>
	</Suspense>
)

export default Home
