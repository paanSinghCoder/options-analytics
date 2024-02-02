const Searchbar = () => {
	return (
		<div className="hover:bg-slate-50 ml-12 pl-3 pr-1 flex items-center justify-between w-72 border rounded-md text-xs font-normal cursor-pointer">
			<span className="opacity-60 py-2">What are you looking for?</span>
			<div className="border rounded-sm text-xs font-light px-1 py-0.5 bg-slate-100">⌘ Z</div>
		</div>
	)
}

export default Searchbar
