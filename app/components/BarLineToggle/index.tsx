import { BarLineToggleProps } from './BarLineToggle.type'

const BarLineToggle = ({ isChecked = false, setIsChecked = () => null }: BarLineToggleProps) => {
	return (
		<div className="flex justify-between pb-2 px-2 pt-16">
			<h3 className="font-semibold">NIFTY OI Chart</h3>
			<label className="relative inline-flex items-center mb-5 cursor-pointer">
				<input
					type="checkbox"
					className="sr-only peer"
					onChange={event => setIsChecked(event.currentTarget.checked)}
					checked={isChecked}
				/>
				<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-cyan-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-700"></div>
				<span className="ms-3 text-sm font-medium opacity-60">Line / Bar</span>
			</label>
		</div>
	)
}

export default BarLineToggle
