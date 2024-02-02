const NewsCard = () => {
	return (
		<div className="border rounded-md w-full h-[620px] my-4">
			<div className="flex justify-between items-center pr-4">
				<h3 className="py-4 px-4 text-md border-b">Latest News</h3>
				<div className="">
					<div className="border rounded-md px-3 py-1 opacity-80 text-xs cursor-pointer hover:opacity-100">
						हिंदी में पढ़े
					</div>
				</div>
			</div>

			<img
				src="https://media.assettype.com/bloombergquint%2F2024-02%2Ffbb39772-7dd2-4052-922b-288e7f0504ae%2F_1x_1.jpg?auto=format%2Ccompress&w=720"
				className="w-full"
				alt="image"
			/>
			<h3 className="font-semibold py-4 px-4 opacity-80">
				Paytm Erases $2 Billion in Two Days as RBI Action Spooks Market
			</h3>
			<p className="text-xs font-light opacity-60 px-4">02 Feb 2024, 10.30AM</p>
			<p className="opacity-80 text-sm py-4 px-4">
				Regulatory troubles for the digital payments giant are mounting after the Reserve Bank of
				India ordered its unit Paytm Payments Bank Ltd. to stop many of its activities, citing
				persistent non-compliance and supervisory concerns.
			</p>
			<p className="px-4 text-xs font-bold cursor-pointer">Read more</p>
		</div>
	)
}

export default NewsCard
