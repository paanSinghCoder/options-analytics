'use client'
import { getRandomColor, getRandomNum } from '../../helpers'
import useStockMarket from '../../hooks/useStockMarket'
import { OPTION_CHAIN_TABLE_DATA } from '../../mock'

const OptionChainTable = () => {
	const { price } = useStockMarket(1000)

	return (
		<div className="relative overflow-x-auto border rounded-md max-h-[900px]">
			<table className="w-full text-sm text-left opacity-80 ">
				<thead className="text-xs uppercase border-b sticky top-0 bg-white">
					<tr>
						<th scope="col" className="px-6 py-3 uppercase">
							OI (Lots)
						</th>
						<th scope="col" className="px-6 py-3 uppercase">
							Call Price
						</th>
						<th scope="col" className="px-6 py-3 uppercase text-center bg-gray-100">
							Strike Price
						</th>
						<th scope="col" className="px-6 py-3 uppercase">
							Put Price
						</th>
						<th scope="col" className="px-6 py-3 uppercase">
							OI(Lots)
						</th>
					</tr>
				</thead>
				<tbody>
					{OPTION_CHAIN_TABLE_DATA.map((item: any) => (
						<tr className="border-b" key={item.strikePrice}>
							<td scope="row" className="px-6 py-4 whitespace-nowrap">
								<div className="font-normal text-sm hover:cursor-pointer hover:underline">
									{getRandomNum(price + item.callOI)}
								</div>
								<div style={{ color: getRandomColor() }} className="font-normal text-xs pt-1">
									{getRandomNum(price + item.callOIVar)}
								</div>
							</td>
							<td className="px-6 py-4">
								<div className="font-normal text-sm">₹{getRandomNum(price + item.callPrice)}</div>
								<div style={{ color: getRandomColor() }} className="font-normal text-xs pt-1">
									{getRandomNum(price + item.callPriceVar)}
								</div>
							</td>
							<td className="px-6 py-4 font-normal bg-gray-100 text-center">
								{getRandomNum(price + item.strikePrice)}
							</td>
							<td className="px-6 py-4">
								<div className="font-normal text-sm">₹{getRandomNum(price + item.putPrice)}</div>
								<div style={{ color: getRandomColor() }} className="font-normal text-xs pt-1">
									{getRandomNum(price + item.putPriceVar)}
								</div>
							</td>
							<td scope="row" className="px-6 py-4 whitespace-nowrap">
								<div className="font-normal text-sm hover:cursor-pointer hover:underline">
									{getRandomNum(price + item.putOI)}
								</div>
								<div style={{ color: getRandomColor() }} className="font-normal text-xs pt-1">
									{getRandomNum(price + item.putOIVar)}
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default OptionChainTable
