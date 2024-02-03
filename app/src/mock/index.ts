import { getNumbersArray } from "../helpers"


export const brokers = [
	{
		id: 1,
		name: 'Zerodha',
		iconSrc: '/icons/zerodha-compact.svg',
		url: '/'
	},
	{
		id: 2,
		name: 'Groww',
		iconSrc: '/icons/groww-logo-compact.svg',
		url: '/'
	},
	{
		id: 3,
		name: 'Upstox',
		iconSrc: '/icons/upstox-logo-compact.png',
		url: '/'
	},
	{
		id: 4,
		name: 'Angel One',
		iconSrc: '/icons/angelone-logo-compact.svg',
		url: '/'
	},
	{
		id: 5,
		name: '5Paisa',
		iconSrc: '/icons/5paisa-logo-compact.jpeg',
		url: '/'
	},
	{
		id: 6,
		name: 'ICICI',
		iconSrc: '/icons/icicidirect-logo-compact.png',
		url: '/'
	}
]

export const OPTION_CHAINS_DATA = [
	{
		contractName: 'NIFTY 50',
		exchange: 'NSE',
		price: 21697.45,
		movingPrice: 28.25
	},
	{
		contractName: 'BANKNIFTY',
		exchange: 'NSE',
		price: 46188.65,
		movingPrice: 191.85
	},
	{
		contractName: 'FINNIFTY',
		exchange: 'NSE',
		price: 20516.65,
		movingPrice: 19.15
	}
]


export const INDEX_OPTIONS_DATA = [
	{
		contractName: 'NIFTY 21700 Put',
		exchange: '07 Feb 24',
		price: 2.45,
		movingPrice: 109.65
	},
	{
		contractName: 'NIFTY 21700 Call',
		exchange: '07 Feb 24',
		price: 0.05,
		movingPrice: 144.85
	},
	{
		contractName: 'BANKNIFTY 46500 Call',
		exchange: '07 Feb 24',
		price: 336.65,
		movingPrice: 138.15
	},
	{
		contractName: 'BANKNIFTY 46000 Call',
		exchange: '07 Feb 24',
		price: 577.45,
		movingPrice: 138.65
	}
]


export const STOCK_OPTIONS_TABLE_DATA = [
    {
      company: 'Maruti Suzuki 11000 Call',
      date: '29 Feb 24',
      marketPrice: 102.15,
      varPrice: 51.90,
      oi: 682,
    },
    {
      company: 'Reliance Industries 12000 Put',
      date: '29 Feb 24',
      marketPrice: 75.50,
      varPrice: -22.30,
      oi: 432,
    },
    {
      company: 'Tata Consultancy Services 10500 Call',
      date: '29 Feb 24',
      marketPrice: 88.75,
      varPrice: 35.40,
      oi: 543,
    },
    {
      company: 'Infosys 9500 Put',
      date: '29 Feb 24',
      marketPrice: 62.20,
      varPrice: -18.10,
      oi: 789,
    },
    {
      company: 'HDFC Bank 11500 Call',
      date: '29 Feb 24',
      marketPrice: 110.80,
      varPrice: 48.30,
      oi: 876,
    },
    {
      company: 'ITC Limited 9800 Put',
      date: '29 Feb 24',
      marketPrice: 80.45,
      varPrice: -25.60,
      oi: 654,
    },
    {
      company: 'Bharti Airtel 11200 Call',
      date: '29 Feb 24',
      marketPrice: 94.30,
      varPrice: 28.75,
      oi: 543,
    },
    {
      company: 'Wipro 9700 Put',
      date: '29 Feb 24',
      marketPrice: 72.80,
      varPrice: -20.15,
      oi: 432,
    },
    {
      company: 'Axis Bank 10800 Call',
      date: '29 Feb 24',
      marketPrice: 105.25,
      varPrice: 42.60,
      oi: 789,
    },
    {
      company: 'Mahindra & Mahindra 9200 Put',
      date: '29 Feb 24',
      marketPrice: 56.90,
      varPrice: -15.20,
      oi: 654,
    },
    {
      company: 'Hindustan Unilever 11800 Call',
      date: '29 Feb 24',
      marketPrice: 118.40,
      varPrice: 53.10,
      oi: 876,
    },
    {
      company: 'Sun Pharmaceutical 9900 Put',
      date: '29 Feb 24',
      marketPrice: 84.15,
      varPrice: -24.80,
      oi: 543,
    },
    {
      company: 'Kotak Mahindra Bank 10300 Call',
      date: '29 Feb 24',
      marketPrice: 99.80,
      varPrice: 36.15,
      oi: 789,
    },
    {
      company: 'Coal India 9400 Put',
      date: '29 Feb 24',
      marketPrice: 68.50,
      varPrice: -19.75,
      oi: 432,
    },
    {
      company: 'NTPC Limited 11400 Call',
      date: '29 Feb 24',
      marketPrice: 112.75,
      varPrice: 47.40,
      oi: 654,
    },
    // Add more as needed
  ];
  


export const strategies = [
	{ id: 0, title: 'Stradle' },
	{ id: 1, title: 'Strangle' },
	{ id: 2, title: 'Iron Condor' },
	{ id: 3, title: 'Spread' },
	{ id: 4, title: 'Iron Fly' },
	{ id: 5, title: 'Jade Lizard' }
]

export const DEFAULT_DROPDOWN_DATA = [{ title: 'NIFTY' }, { title: 'BANKNIFTY' }, { title: 'FINNIFTY' }]

export const INSTRUMENT_DROPDOWN_DATA = [{ title: 'CALL' }, { title: 'PUT' }, { title: 'FUTURE' }]

export const EXPIRY_DROPDOWN_DATA = [{ title: '2024-02-8' }, { title: '2024-02-15' }, { title: '2024-02-22' }, { title: '2024-02-29' }, { title: '2024-03-07' }, { title: '2024-03-28' }, { title: '2024-04-25' }, { title: '2024-06-27' }]

export const STRIKE_PRICE_DROPDOWN_DATA = getNumbersArray(1900, 50, 15).map((item: number) => ({ title: item }))

export const POSITIONS_DROPDOWN_DATA = [{ title: 'SHORT' }, { title: 'LONG' }]


export const GREEKS_TABLE_DATA = [{
    leg: 'LEG 1',
    position: 'SHORT 21850CE (08 Feb 24)',
    iv: 14.15,
    delta: -51.90,
    theta: 1500,
    gamma: -0.10,
    vega: -1114,
    rho: -187
},{
    leg: 'LEG 2',
    position: 'LONG 21650PE(08-Feb-2024)',
    iv: 13.83,
    delta: -28.00,
    theta: 969,
    gamma: -0.19,
    vega: 928,
    rho: -171
},{
    leg: 'LEG 3',
    position: 'SHORT 21850PE(08-Feb-2024)',
    iv: 13.20,
    delta: 33,
    theta: 1054,
    gamma: -0.14,
    vega: -1011,
    rho: 116
},{
    leg: 'LEG 4',
    position: 'LONG 22050CE(08-Feb-2024)',
    iv: 13.65,
    delta: 28,
    theta: -1277,
    gamma: 0.09,
    vega: 1902,
    rho: 201
}]

export const OPTION_CHAIN_TABLE_DATA = [
    {
      callOI: 8214,
      callOIVar: 39.10,
      callPrice: 340,
      callPriceVar: 117.10,
      strikePrice: 21600,
      putPrice: 57.15,
      putPriceVar: 64.35,
      putOI: 93528,
      putOIVar: 122.11
    },
    {
      callOI: 7523,
      callOIVar: -15.20,
      callPrice: 315,
      callPriceVar: 82.50,
      strikePrice: 21700,
      putPrice: 62.50,
      putPriceVar: -48.75,
      putOI: 87936,
      putOIVar: 94.75
    },
    {
      callOI: 9420,
      callOIVar: 27.80,
      callPrice: 370,
      callPriceVar: -65.30,
      strikePrice: 21800,
      putPrice: 52.20,
      putPriceVar: 31.80,
      putOI: 80127,
      putOIVar: -14.50
    },
    {
      callOI: 6655,
      callOIVar: 48.15,
      callPrice: 295,
      callPriceVar: 59.80,
      strikePrice: 23100,
      putPrice: 49.80,
      putPriceVar: -36.40,
      putOI: 108753,
      putOIVar: 75.20
    },
    {
      callOI: 8800,
      callOIVar: 10.50,
      callPrice: 320,
      callPriceVar: -42.30,
      strikePrice: 21900,
      putPrice: 55.30,
      putPriceVar: 12.60,
      putOI: 92000,
      putOIVar: -5.20
    },
    {
      callOI: 9350,
      callOIVar: 18.75,
      callPrice: 355,
      callPriceVar: 23.40,
      strikePrice: 22000,
      putPrice: 60.40,
      putPriceVar: -15.80,
      putOI: 87000,
      putOIVar: 8.90
    },
    {
      callOI: 7700,
      callOIVar: -22.60,
      callPrice: 305,
      callPriceVar: 33.80,
      strikePrice: 22500,
      putPrice: 53.80,
      putPriceVar: 44.10,
      putOI: 95000,
      putOIVar: -29.50
    },
    // Add 18 more objects with random values
    {
      callOI: 9200,
      callOIVar: -10.80,
      callPrice: 330,
      callPriceVar: 15.20,
      strikePrice: 22600,
      putPrice: 58.20,
      putPriceVar: -5.30,
      putOI: 100120,
      putOIVar: 20.10
    },
    {
      callOI: 8100,
      callOIVar: 30.50,
      callPrice: 345,
      callPriceVar: -10.70,
      strikePrice: 22700,
      putPrice: 56.70,
      putPriceVar: 38.40,
      putOI: 98000,
      putOIVar: 15.80
    },
    {
      callOI: 7000,
      callOIVar: -14.90,
      callPrice: 310,
      callPriceVar: 25.90,
      strikePrice: 22800,
      putPrice: 61.90,
      putPriceVar: -22.70,
      putOI: 93000,
      putOIVar: 10.20
    },
    {
      callOI: 8500,
      callOIVar: 20.30,
      callPrice: 325,
      callPriceVar: 30.80,
      strikePrice: 22900,
      putPrice: 54.30,
      putPriceVar: 27.50,
      putOI: 99000,
      putOIVar: -18.60
    },
    {
      callOI: 7800,
      callOIVar: -8.10,
      callPrice: 300,
      callPriceVar: 45.20,
      strikePrice: 23000,
      putPrice: 59.20,
      putPriceVar: -40.90,
      putOI: 97000,
      putOIVar: 5.30
    },
    {
      callOI: 8900,
      callOIVar: 15.40,
      callPrice: 335,
      callPriceVar: -20.30,
      strikePrice: 23100,
      putPrice: 51.80,
      putPriceVar: 18.10,
      putOI: 102000,
      putOIVar: -25.40
    },
    {
      callOI: 7300,
      callOIVar: -5.70,
      callPrice: 320,
      callPriceVar: 10.40,
      strikePrice: 23200,
      putPrice: 56.40,
      putPriceVar: 33.80,
      putOI: 95000,
      putOIVar: 22.70
    },
    {
      callOI: 9800,
      callOIVar: 25.20,
      callPrice: 355,
      callPriceVar: -15.30,
      strikePrice: 23300,
      putPrice: 50.30,
      putPriceVar: 15.20,
      putOI: 108000,
      putOIVar: -30.20
    },
    {
      callOI: 8200,
      callOIVar: 12.90,
      callPrice: 340,
      callPriceVar: 20.10,
      strikePrice: 23400,
      putPrice: 55.10,
      putPriceVar: -10.30,
      putOI: 100500,
      putOIVar: 8.90
    },
    {
      callOI: 7100,
      callOIVar: -18.20,
      callPrice: 315,
      callPriceVar: 35.30,
      strikePrice: 23500,
      putPrice: 59.90,
      putPriceVar: -5.20,
      putOI: 97000,
      putOIVar: 12.20
    },
    {
      callOI: 9000,
      callOIVar: 8.50,
      callPrice: 330,
      callPriceVar: -25.40,
      strikePrice: 23600,
      putPrice: 54.20,
      putPriceVar: 30.10,
      putOI: 103000,
      putOIVar: -20.50
    },
    {
      callOI: 7900,
      callOIVar: -7.80,
      callPrice: 305,
      callPriceVar: 40.20,
      strikePrice: 23700,
      putPrice: 58.80,
      putPriceVar: 25.50,
      putOI: 98000,
      putOIVar: 15.80
    },
    {
      callOI: 8800,
      callOIVar: 16.30,
      callPrice: 320,
      callPriceVar: -30.50,
      strikePrice: 23800,
      putPrice: 53.50,
      putPriceVar: 12.90,
      putOI: 105000,
      putOIVar: -10.30
    },
    {
      callOI: 7300,
      callOIVar: 4.10,
      callPrice: 345,
      callPriceVar: 15.20,
      strikePrice: 23900,
      putPrice: 57.10,
      putPriceVar: -15.80,
      putOI: 102500,
      putOIVar: 5.40
    },
    {
      callOI: 9200,
      callOIVar: 22.60,
      callPrice: 330,
      callPriceVar: -20.30,
      strikePrice: 24000,
      putPrice: 52.80,
      putPriceVar: 10.30,
      putOI: 108000,
      putOIVar: -25.60
    },
    {
      callOI: 8000,
      callOIVar: -10.50,
      callPrice: 315,
      callPriceVar: 25.40,
      strikePrice: 24100,
      putPrice: 56.50,
      putPriceVar: 5.20,
      putOI: 105000,
      putOIVar: 20.50
    },
    {
      callOI: 7700,
      callOIVar: 18.20,
      callPrice: 340,
      callPriceVar: -15.20,
      strikePrice: 24200,
      putPrice: 51.20,
      putPriceVar: 30.50,
      putOI: 110000,
      putOIVar: -12.90
    },
    {
      callOI: 9600,
      callOIVar: -8.50,
      callPrice: 325,
      callPriceVar: 10.70,
      strikePrice: 24300,
      putPrice: 55.80,
      putPriceVar: -5.40,
      putOI: 107500,
      putOIVar: 15.30
    },
    {
      callOI: 8400,
      callOIVar: 15.30,
      callPrice: 310,
      callPriceVar: -25.90,
      strikePrice: 24400,
      putPrice: 50.70,
      putPriceVar: 20.30,
      putOI: 115000,
      putOIVar: -30.80
    },
    {
      callOI: 7800,
      callOIVar: -12.90,
      callPrice: 335,
      callPriceVar: 15.30,
      strikePrice: 24500,
      putPrice: 54.20,
      putPriceVar: -10.10,
      putOI: 112500,
      putOIVar: 5.40
    },
    {
      callOI: 9100,
      callOIVar: 5.70,
      callPrice: 320,
      callPriceVar: -10.40,
      strikePrice: 24600,
      putPrice: 58.80,
      putPriceVar: -15.20,
      putOI: 118000,
      putOIVar: -20.50
    },
    {
      callOI: 8500,
      callOIVar: -25.20,
      callPrice: 355,
      callPriceVar: 15.30,
      strikePrice: 24700,
      putPrice: 53.30,
      putPriceVar: 10.20,
      putOI: 115000,
      putOIVar: 25.40
    },
    {
      callOI: 8000,
      callOIVar: 8.10,
      callPrice: 340,
      callPriceVar: -20.10,
      strikePrice: 24800,
      putPrice: 57.10,
      putPriceVar: 5.30,
      putOI: 120000,
      putOIVar: 10.30
    },
    {
      callOI: 7700,
      callOIVar: -15.40,
      callPrice: 315,
      callPriceVar: 30.50,
      strikePrice: 24900,
      putPrice: 51.80,
      putPriceVar: -12.20,
      putOI: 117500,
      putOIVar: 18.20
    },
    {
      callOI: 9200,
      callOIVar: -5.30,
      callPrice: 330,
      callPriceVar: -15.20,
      strikePrice: 25000,
      putPrice: 56.50,
      putPriceVar: 22.70,
      putOI: 125000,
      putOIVar: -4.10
    }
  ];
  