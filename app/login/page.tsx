'use client'
import { Suspense, useEffect } from 'react'
import Link from 'next/link'

import { brokers } from '../src/mock'
import useAuthHandler from '../src/hooks/useAuthHandler'
import { HOME_PAGE } from '../src/constants/routes'

const LoginPage = () => {
	const { isLoggedIn, login, routeToUrl } = useAuthHandler()

	useEffect(() => {
		if (isLoggedIn) {
			routeToUrl(HOME_PAGE, false)
		}
	}, [])

	return (
		<div className="container relative h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
			<div
				className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 absolute right-4 top-4 md:right-8 md:top-8"
				onClick={() => routeToUrl(HOME_PAGE)}>
				Skip login
			</div>
			<div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
				<div className="absolute inset-0 bg-cyan-900"></div>
				<div className="relative z-20 flex items-center text-lg font-medium gap-3">
					<img src="/icons/bull.png" className="w-8 h-8" />
					Zanskar
				</div>
				<div className="relative z-20 mt-auto">
					<blockquote className="space-y-2">
						<p className="text-lg">
							“Navigate the Market Waves with Ease: Unleash the Power of Options analytics –
							Analyze, Optimize, and Watch Your Profits Rise!”
						</p>
						<footer className="text-sm">Mayank Sachan</footer>
					</blockquote>
				</div>
			</div>
			<div className="lg:p-8">
				<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
					<div className="flex flex-col space-y-2 text-center">
						<h1 className="text-xl font-semibold tracking-tight">Continue with your Broker</h1>
						<p className="text-sm text-muted-foreground">Login or create a new Zanskar account</p>
					</div>
					<div className="grid gap-6">
						<div className="flex flex-wrap justify-around gap-2 w-full">
							{brokers.map((item: any) => (
								<button
									key={item.id}
									style={{ minWidth: '100px', height: '100px' }}
									onClick={() => login()}
									className="text-gray-800 font-normal py-2 px-4 border rounded-md hover:shadow text-sm flex flex-col justify-center gap-2 items-center flex-1"
									type="button">
									<img src={item.iconSrc} className="h-7 w-7" alt="" />
									{item.name}
								</button>
							))}
						</div>
						<div className="relative">
							<div className="absolute inset-0 flex items-center">
								<span className="w-full border-t"></span>
							</div>
							<div className="relative flex justify-center text-xs">
								<span className="bg-background px-2 text-muted-foreground bg-white">
									Or continue with
								</span>
							</div>
						</div>
						<button
							onClick={() => login()}
							className="hover:shadow inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-12 px-4 py-2"
							type="button">
							<img src="/icons/google-compact.svg" alt="google login" className="mr-2 h-5 w-5" />
							Continue with Google
						</button>
					</div>
					<p className="px-8 text-center text-xs text-muted-foreground">
						By proceeding, you agree to our{' '}
						<Link className="underline underline-offset-4 hover:text-primary" href="/">
							Terms and conditions
						</Link>{' '}
					</p>
					<div className="flex justify-center w-full">
						<div className="flex items-center justify-center gap-2 border rounded-md px-4 py-2 mt-12 opacity-70 hover:opacity-100">
							<img src="/icons/sebi-logo-compact.svg" alt="" className="h-5 w-5" />
							<p className="text-xs text-muted-foreground uppercase">SEBI RA INA200007930</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const Login = () => (
	<Suspense fallback={<>Loading...</>}>
		<LoginPage />
	</Suspense>
)

export default Login
