'use client'
import { useRouter } from 'next/navigation'
import { Searchbar } from '..'

const Navbar: any = () => {
	const router = useRouter()

	return (
		<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
			<div className="relative flex items-center justify-between h-14">
				<div className="flex-1 flex items-center">
					<div className="text-md flex items-center gap-1 font-bold cursor-pointer">
						<img
							onClick={() => router.push('/')}
							className="block h-7 w-auto"
							src="/icons/bull-dark.png"
							alt="zanskar"
						/>
						Zanskar
						{/* <span className="h-7 w-px mx-1 bg-gray-200" aria-hidden="true" /> */}
						<div className="font-semibold text-sm opacity-60 leading-none pt-0.5 pl-0.5">
							Securities
						</div>
					</div>
					<Searchbar />
				</div>
				<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
					<div className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
						{/* <span className="lg:block text-gray-700 font-normal">
											Go Handmade. Go Craftly!
										</span> */}
						<div className="ml-4 flex flex-row text-center items-center justify-center gap-6">
							<span className="opacity-70 hover:opacity-100 cursor-pointer">Strategy Builder</span>
							<span className="opacity-70 hover:opacity-100 cursor-pointer">Login</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
