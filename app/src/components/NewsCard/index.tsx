'use client'

import { ENGLISH_NEWS, HINDI_NEWS } from '../../constants/urls'

const NewsCard = () => {
	return (
		<div className="border rounded-md w-full h-[540px] my-4">
			<div className="flex justify-between items-center pr-4">
				<h3 className="py-4 px-4 text-md border-b">Latest News</h3>
				<div className="">
					<div
						onClick={() =>
							typeof window !== 'undefined' ? window.open(HINDI_NEWS, '_blank') : null
						}
						className="border rounded-md px-3 py-1 opacity-80 text-xs cursor-pointer hover:opacity-100">
						हिंदी में पढ़े
					</div>
				</div>
			</div>

			<img src="/news-cover-200.avif" className="w-full" alt="image" />
			<h3
				onClick={() => (typeof window !== 'undefined' ? window.open(ENGLISH_NEWS, '_blank') : null)}
				className="font-semibold py-4 px-4 opacity-80 cursor-pointer hover:underline">
				Paytm Erases $2 Billion in Two Days as RBI Action Spooks Market
			</h3>
			<p className="text-xs font-light opacity-60 px-4">02 Feb 2024, 10.30AM</p>
			<p className="text-sm py-4 px-4">
				Regulatory troubles for the digital payments giant are mounting after the Reserve Bank of
				India ordered its unit Paytm Payments Bank Ltd.
			</p>
		</div>
	)
}

export default NewsCard
