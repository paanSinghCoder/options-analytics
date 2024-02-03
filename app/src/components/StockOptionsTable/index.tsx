'use client'
import { STOCK_OPTIONS_TABLE_DATA } from '@/app/src/mock'
import useAuthHandler from '../../hooks/useAuthHandler'
import { OPTION_CHAIN_PAGE } from '../../constants/routes'
import useStockMarket from '../../hooks/useStockMarket'
import { getRandomColor, getRandomNum } from '../../helpers'

const StockOptionsTable = () => {
	const { routeToUrl } = useAuthHandler()
	const { price } = useStockMarket(1000)

	return (
		<div className="relative overflow-x-auto border rounded-md pr-4">
			<table className="w-full text-sm text-left opacity-80">
				<thead className="text-xs uppercase border-b">
					<tr>
						<th scope="col" className="px-6 py-3">
							Company
						</th>
						<th scope="col" className="px-6 py-3">
							Market Price
						</th>
						<th scope="col" className="px-6 py-3">
							OI
						</th>
					</tr>
				</thead>
				<tbody>
					{STOCK_OPTIONS_TABLE_DATA.map((item: any) => (
						<tr className="border-b" key={item.company}>
							<th scope="row" className="px-6 py-4">
								<div
									onClick={() => routeToUrl(OPTION_CHAIN_PAGE)}
									className="font-semibold text-sm hover:cursor-pointer hover:underline">
									{item.company}
								</div>
								<div className="font-normal text-xs pt-1">{item.date}</div>
							</th>
							<td className="px-6 py-4">
								<div className="font-semibold text-sm">{getRandomNum(price)}</div>
								<div style={{ color: getRandomColor() }} className="font-normal text-xs pt-1">
									₹{getRandomNum(price)}
								</div>
							</td>
							<td style={{ color: getRandomColor() }} className="px-6 py-4 font-semibold w-[200px]">
								{getRandomNum(price)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default StockOptionsTable
