
// @desc Generate an array of labels based on the strikePrice
export const getNumbersArray = (currentNumber: number = 21550, incrementValue: number = 50, length: number = 25) => {
    return Array.from({ length }, () => {
        const result = currentNumber
        currentNumber += incrementValue
        return result
    })
}

export const getRandomNum = (value: number = 100) => {
    const randomOffset = Math.random() * 20 - 10; // Generates a random number between -10 and 10
  return (value + randomOffset).toFixed(2);
}

export const getRandomColor = (): string => {
    const colors = ['green', 'red'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    
    return colors[randomIndex];
};



