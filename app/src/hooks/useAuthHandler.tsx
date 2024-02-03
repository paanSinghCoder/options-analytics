'use client'

import toast from 'react-hot-toast'
import { useRouter, useSearchParams } from 'next/navigation'

import { HOME_PAGE, LOGIN_PAGE } from '../constants/routes'
import { AUTH_LOGGED_IN, AUTH_LOGGED_OUT, AUTH_MODE } from '../constants'

const useAuthHandler = () => {
	const router = useRouter()
	const search = typeof window !== 'undefined' ? window.location.search : ''
	const searchParams = useSearchParams()
	const mode = searchParams.get(AUTH_MODE)

	/*
	 *  @desc Check if the user is logged in
	 */
	const isLoggedIn: boolean = mode === AUTH_LOGGED_IN

	/*
	 *  @desc Takes custom path to redirect. If shouldLogout=true,
	 *  it will open page in logged out state else in current state.
	 */
	const routeToUrl = (route: string = HOME_PAGE, shouldLogout?: boolean | undefined) => {
		/*
		 *  Retaining the query param as it is if shouldLogout is not passed
		 */
		if (typeof shouldLogout === 'undefined') {
			router.push(`${route}?${AUTH_MODE}=${mode ? mode : AUTH_LOGGED_OUT}`)
			return
		}

		if (shouldLogout) {
			toast.success('User logged out')
			router.replace(`${route}?${AUTH_MODE}=${AUTH_LOGGED_OUT}`)
			return
		}

		toast.success('User logged in')
		router.replace(`${route}?${AUTH_MODE}=${AUTH_LOGGED_IN}`)
	}

	/*
	 *  @desc Logs out user and redirects to Login page with query param removed.
	 */
	const logout = () => {
		toast.success('Logged out')
		router.replace(LOGIN_PAGE)
	}

	/*
	 *  @desc Logs in user and redirects to Home page with query param ?mode=in.
	 */
	const login = () => {
		toast.success('Logged in')
		router.replace(`${HOME_PAGE}?${AUTH_MODE}=${AUTH_LOGGED_IN}`)
	}

	return { isLoggedIn, login, routeToUrl, logout }
}

export default useAuthHandler
