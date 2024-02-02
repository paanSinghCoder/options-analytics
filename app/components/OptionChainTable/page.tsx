import { STOCK_OPTIONS_TABLE_DATA } from '@/app/src/mock'

const OptionChainTable = () => {
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
						<th scope="col" className="px-6 py-3 uppercase bg-gray-100">
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
					{STOCK_OPTIONS_TABLE_DATA.map((item: any) => (
						<tr className="border-b" key={item.company}>
							<td scope="row" className="px-6 py-4 whitespace-nowrap">
								<div className="font-normal text-sm hover:cursor-pointer hover:underline">
									{item.company}
								</div>
								<div className="font-normal text-xs pt-1">{item.date}</div>
							</td>
							<td className="px-6 py-4">
								<div className="font-normal text-sm">{item.marketPrice}</div>
								<div className="font-normal text-xs pt-1">{item.varPrice}</div>
							</td>
							<td className="px-6 py-4 font-semibold bg-gray-100">{item.oi}</td>
							<td className="px-6 py-4">
								<div className="font-normal text-sm">{item.marketPrice}</div>
								<div className="font-normal text-xs pt-1">{item.varPrice}</div>
							</td>
							<td scope="row" className="px-6 py-4 whitespace-nowrap">
								<div className="font-normal text-sm hover:cursor-pointer hover:underline">
									{item.company}
								</div>
								<div className="font-normal text-xs pt-1">{item.date}</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default OptionChainTable
