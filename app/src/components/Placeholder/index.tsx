const Placeholder = ({ text, subtext }: { text?: string; subtext?: string }) => {
	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center p-8 text-center">
			<img className="block h-12 w-auto mb-4" src="/icons/bull-dark.png" alt="TradeX" />
			<div className="pb-1 font-semibold">{text}</div>
			<div className="text-sm opacity-70">{subtext}</div>
		</div>
	)
}

export default Placeholder
