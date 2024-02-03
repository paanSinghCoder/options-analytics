'use client'
import { STRATEGY_BUILDER_PAGE } from '../../constants/routes'
import useAuthHandler from '../../hooks/useAuthHandler'

const StrategyBuilderCard = () => {
	const { routeToUrl } = useAuthHandler()

	return (
		<div
			onClick={() => routeToUrl(STRATEGY_BUILDER_PAGE)}
			className="w-full h-32 bg-blue-600 rounded-md cursor-pointer mb-3">
			<div className="p-5 flex flex-row items-center text-white justify-between space-y-0 pb-2">
				<h3 className="tracking-tight text-sm font-medium">Try for Free </h3>
			</div>
			<div className="p-5 pt-0 text-white">
				<div className="text-lg font-bold">Strategy Builder</div>
				<p className="text-xs text-muted-foreground">
					Enter a target and get the best suggested trades for your target.
				</p>
			</div>
		</div>
	)
}

export default StrategyBuilderCard
