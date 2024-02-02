import React from 'react'
import { GREEKS_TABLE_DATA } from '../../mock'
import { Chart } from '..'

const OptionStrategyGenerated = () => {
	return (
		<div className="p-6 mt-8 border rounded-md">
			<h3 className="font-semibold mb-8">Payoff Diagram</h3>
			<Chart />
			<h3 className="font-semibold mb-8 mt-14">Greeks</h3>
			<div className="relative overflow-x-auto border rounded-md">
				<table className="w-full text-sm text-left opacity-80">
					<thead className="text-xs uppercase border-b">
						<tr>
							<th scope="col" className="px-6 py-3">
								Leg
							</th>
							<th scope="col" className="px-6 py-3">
								Position
							</th>
							<th scope="col" className="px-6 py-3">
								IV
							</th>
							<th scope="col" className="px-6 py-3">
								Delta
							</th>
							<th scope="col" className="px-6 py-3">
								Theta
							</th>
							<th scope="col" className="px-6 py-3">
								Gamma
							</th>
							<th scope="col" className="px-6 py-3">
								Vega
							</th>
							<th scope="col" className="px-6 py-3">
								RHO
							</th>
						</tr>
					</thead>
					<tbody>
						{GREEKS_TABLE_DATA.map((item: any) => (
							<tr className="border-b" key={item.leg}>
								<td className="px-6 py-4">{item.leg}</td>
								<td className="px-6 py-4">{item.position}</td>
								<td className="px-6 py-4">{item.iv}</td>
								<td className="px-6 py-4">{item.delta}</td>
								<td className="px-6 py-4">{item.theta}</td>
								<td className="px-6 py-4">{item.gamma}</td>
								<td className="px-6 py-4">{item.vega}</td>
								<td className="px-6 py-4">{item.rho}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default OptionStrategyGenerated
