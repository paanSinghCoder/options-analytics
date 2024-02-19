'use client'

import { useState, useCallback, useEffect } from 'react'

import { SearchModal, Searchbar } from '..'
import useAuthHandler from '../../hooks/useAuthHandler'
import { HOME_PAGE, LOGIN_PAGE, STRATEGY_BUILDER_PAGE } from '../../constants/routes'

const Navbar: any = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { isLoggedIn, routeToUrl, logout } = useAuthHandler()

	// handle what happens on key press
	const handleKeyPress = useCallback((event: any) => {
		if ((event.metaKey || event.ctrlKey) && (event.code === 'KeyI' || event.code === 'Keyi')) {
			setIsOpen(prev => !prev)
		}
	}, [])

	useEffect(() => {
		// attach the event listener
		document.addEventListener('keydown', handleKeyPress)

		// remove the event listener
		return () => {
			document.removeEventListener('keydown', handleKeyPress)
		}
	}, [handleKeyPress])

	return (
		<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
			<div className="relative flex items-center justify-between h-14">
				<div className="flex-1 flex items-center">
					<div
						onClick={() => routeToUrl(HOME_PAGE)}
						className="text-md flex items-center gap-1 font-bold cursor-pointer">
						<img className="block h-7 w-auto" src="/icons/bull-dark.png" alt="TradeX" />
						TradeX
						{/* <span className="h-7 w-px mx-1 bg-gray-200" aria-hidden="true" /> */}
						<div className="font-semibold text-sm opacity-60 leading-none pt-0.5 pl-0.5">
							Securities
						</div>
					</div>
					<Searchbar onClick={() => setIsOpen(prev => !prev)} />
					<SearchModal isOpen={isOpen} setIsOpen={setIsOpen} />
				</div>
				<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
					<div className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
						{/* <span className="lg:block text-gray-700 font-normal">
											Go Handmade. Go Craftly!
										</span> */}
						<div className="ml-4 flex flex-row text-center items-center justify-center gap-6">
							<span
								onClick={() => routeToUrl(STRATEGY_BUILDER_PAGE)}
								className="opacity-70 hover:opacity-100 cursor-pointer">
								Strategy Builder
							</span>
							<span
								onClick={() => (isLoggedIn ? logout() : routeToUrl(LOGIN_PAGE))}
								className="opacity-70 hover:opacity-100 cursor-pointer">
								{isLoggedIn ? 'Logout' : 'Login'}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
