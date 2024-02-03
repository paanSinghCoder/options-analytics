import { useState, useEffect } from 'react'

export const useStockMarket = (initialPrice: number) => {
	const [stockData, setStockData] = useState({
		price: initialPrice
	})

	const getRandomMovement = () => (Math.random() > 0.5 ? 1 : -1)

	const updateStockData = () => {
		const movement = getRandomMovement() * (Math.random() * 5)
		const updatedPrice = parseFloat((stockData.price + movement).toFixed(2))
		setStockData({ price: updatedPrice })
	}

	useEffect(() => {
		const intervalId = setInterval(updateStockData, 1000)

		// Cleanup the interval on component unmount
		return () => clearInterval(intervalId)
	}, [stockData.price])

	return stockData
}

export default useStockMarket
