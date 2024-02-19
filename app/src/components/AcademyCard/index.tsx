'use client'
import { TRADEX_HOME } from '../../constants/urls'

const AcademyCard = () => {
	return (
		<div
			onClick={() => (typeof window !== 'undefined' ? window.open(TRADEX_HOME, '_blank') : null)}
			className="w-full h-32 bg-rose-600 rounded-md cursor-pointer mb-3">
			<div className="p-5 flex flex-row items-center text-white justify-between space-y-0 pb-2">
				<h3 className="tracking-tight text-sm font-medium">Enroll for free </h3>
			</div>
			<div className="p-5 pt-0 text-white">
				<div className="text-lg font-bold">TradeX Academy!</div>
				<p className="text-xs text-muted-foreground">
					Learn market prediction, option strategies, greeks, and much more for free.
				</p>
			</div>
		</div>
	)
}

export default AcademyCard
