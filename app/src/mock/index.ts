import { getNumbersArray } from "../helpers"

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


export const STOCK_OPTIONS_TABLE_DATA = [{
    company: 'Maruti 11000 Call',
    date: '29 Feb 24',
    marketPrice: 102.15,
    varPrice: 51.90,
    oi: 682
},{
    company: 'Maruti 11000 Call',
    date: '29 Feb 24',
    marketPrice: 102.15,
    varPrice: 51.90,
    oi: 682
},{
    company: 'Maruti 11000 Call',
    date: '29 Feb 24',
    marketPrice: 102.15,
    varPrice: 51.90,
    oi: 682
},{
    company: 'Maruti 11000 Call',
    date: '29 Feb 24',
    marketPrice: 102.15,
    varPrice: 51.90,
    oi: 682
},{
    company: 'Maruti 11000 Call',
    date: '29 Feb 24',
    marketPrice: 102.15,
    varPrice: 51.90,
    oi: 682
},{
    company: 'Maruti 11000 Call',
    date: '29 Feb 24',
    marketPrice: 102.15,
    varPrice: 51.90,
    oi: 682
},{
    company: 'Maruti 11000 Call',
    date: '29 Feb 24',
    marketPrice: 102.15,
    varPrice: 51.90,
    oi: 682
},{
    company: 'Maruti 11000 Call',
    date: '29 Feb 24',
    marketPrice: 102.15,
    varPrice: 51.90,
    oi: 682
},{
    company: 'Maruti 11000 Call',
    date: '29 Feb 24',
    marketPrice: 102.15,
    varPrice: 51.90,
    oi: 682
},{
    company: 'Maruti 11000 Call',
    date: '29 Feb 24',
    marketPrice: 102.15,
    varPrice: 51.90,
    oi: 682
},{
    company: 'Maruti 11000 Call',
    date: '29 Feb 24',
    marketPrice: 102.15,
    varPrice: 51.90,
    oi: 682
},{
    company: 'Maruti 11000 Call',
    date: '29 Feb 24',
    marketPrice: 102.15,
    varPrice: 51.90,
    oi: 682
},{
    company: 'Maruti 11000 Call',
    date: '29 Feb 24',
    marketPrice: 102.15,
    varPrice: 51.90,
    oi: 682
},{
    company: 'Maruti 11000 Call',
    date: '29 Feb 24',
    marketPrice: 102.15,
    varPrice: 51.90,
    oi: 682
},{
    company: 'Maruti 11000 Call',
    date: '29 Feb 24',
    marketPrice: 102.15,
    varPrice: 51.90,
    oi: 682
},{
    company: 'Maruti 11000 Call',
    date: '29 Feb 24',
    marketPrice: 102.15,
    varPrice: 51.90,
    oi: 682
}]


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