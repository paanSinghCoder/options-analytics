import { TickerCardType } from './TickerCards.types'

const TickerCards = ({ cardData }: any) => {
	return (
		<div className={`grid gap-4 md:grid-cols-4 lg:grid-cols-${cardData?.length ?? 3}`}>
			{cardData.map((item: TickerCardType) => (
				<div className="rounded-md border bg-card text-card-foreground hover:shadow cursor-pointer">
					<div className="p-5 flex flex-row items-center justify-between space-y-0 pb-2">
						<h3 className="tracking-tight text-sm font-medium">{item.contractName}</h3>
						<p className="text-xs opacity-60">{item.exchange}</p>
					</div>
					<div className="p-5 pt-0">
						<div className="text-lg font-bold">{item.price}</div>
						<p className="text-xs text-muted-foreground">{item.movingPrice}</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default TickerCards
