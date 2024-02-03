'use client'
import { OPTION_CHAIN_PAGE } from '../../constants/routes'
import { getRandomColor, getRandomNum } from '../../helpers'
import useAuthHandler from '../../hooks/useAuthHandler'
import useStockMarket from '../../hooks/useStockMarket'
import { TickerCardType } from './TickerCards.types'

const TickerCards = ({ cardData }: any) => {
	const { routeToUrl } = useAuthHandler()
	const { price } = useStockMarket(1000)

	return (
		<div className={`grid gap-4 md:grid-cols-4 lg:grid-cols-${cardData?.length ?? 3}`}>
			{cardData.map((item: TickerCardType) => (
				<div
					onClick={() => routeToUrl(OPTION_CHAIN_PAGE)}
					className="rounded-md border bg-card text-card-foreground hover:shadow cursor-pointer">
					<div className="p-5 flex flex-row items-center justify-between space-y-0 pb-2">
						<h3 className="tracking-tight text-sm font-medium">{item.contractName}</h3>
						<p className="text-xs opacity-60">{item.exchange}</p>
					</div>
					<div className="p-5 pt-0">
						<div className="text-lg font-bold">{getRandomNum(price)}</div>
						<p style={{ color: getRandomColor() }} className="text-xs text-muted-foreground">
							₹{getRandomNum(price)}
						</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default TickerCards
