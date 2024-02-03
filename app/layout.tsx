import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Zanskar | Build scalable high performance trading strategies.',
	description: 'Options trading analytics with Zanskar securities'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Toaster position="top-center" />
				{children}
			</body>
		</html>
	)
}
