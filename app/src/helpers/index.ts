
// @desc Generate an array of labels based on the strikePrice
export const getNumbersArray = (currentNumber: number = 21550, incrementValue: number = 50, length: number = 25) => {
    return Array.from({ length }, () => {
        const result = currentNumber
        currentNumber += incrementValue
        return result
    })
}