'use client'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { SearchIcon, LightningBoltIcon } from '@heroicons/react/outline'
import useAuthHandler from '../../hooks/useAuthHandler'
import {
	HOME_PAGE,
	LOGIN_PAGE,
	OPTION_CHAIN_PAGE,
	STRATEGY_BUILDER_PAGE
} from '../../constants/routes'
import { ZANSKAR_HOME } from '../../constants/urls'

export default function SearchModal({
	isOpen = true,
	setIsOpen = (bool: boolean) => null
}: {
	isOpen: boolean
	setIsOpen: (bool: boolean) => any
}) {
	const { isLoggedIn, routeToUrl } = useAuthHandler()

	function closeModal() {
		setIsOpen(false)
	}

	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={closeModal}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0">
					<div className="fixed inset-0 bg-black/75" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95">
							<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all">
								<Dialog.Title
									as="h3"
									className="border-b text-lg font-medium leading-6 text-gray-900 flex items-center px-3 pt-1">
									<SearchIcon className="h-5 w-5 mr-2 text-gray-600 opacity-90" />
									<input
										ref={input => input && input.focus()}
										className="py-3 w-full focus:outline-none text-sm"
										placeholder="What are you looking for?"
									/>
								</Dialog.Title>
								<div
									onClick={() => {
										closeModal()
										routeToUrl(OPTION_CHAIN_PAGE)
									}}
									className="px-4 py-3 text-sm flex opacity-80 hover:bg-gray-50 cursor-pointer">
									<LightningBoltIcon className="h-5 w-5 mr-2 text-gray-600" />
									NIFTY 50 Option Chain
								</div>
								<div
									onClick={() => {
										closeModal()
										routeToUrl(STRATEGY_BUILDER_PAGE)
									}}
									className="px-4 py-3 text-sm flex opacity-80 hover:bg-gray-50 cursor-pointer">
									<LightningBoltIcon className="h-5 w-5 mr-2 text-gray-600" />
									Strategy builder
								</div>
								<div
									onClick={() => {
										closeModal()
										typeof window !== 'undefined' ? window.open(ZANSKAR_HOME, '_blank') : null
									}}
									className="px-4 py-3 text-sm flex opacity-80 hover:bg-gray-50 cursor-pointer">
									<LightningBoltIcon className="h-5 w-5 mr-2 text-gray-600" />
									Zanskar homepage
								</div>
								{!isLoggedIn && (
									<div
										onClick={() => {
											closeModal()
											routeToUrl(LOGIN_PAGE)
										}}
										className="px-4 py-3 text-sm flex opacity-80 hover:bg-gray-50 cursor-pointer">
										<LightningBoltIcon className="h-5 w-5 mr-2 text-gray-600" />
										Login to Dashboard
									</div>
								)}
								<div
									onClick={() => {
										closeModal()
										routeToUrl(HOME_PAGE)
									}}
									className="px-4 py-3 text-sm flex opacity-80 hover:bg-gray-50 cursor-pointer">
									<LightningBoltIcon className="h-5 w-5 mr-2 text-gray-600" />
									Go to Homepage
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	)
}
