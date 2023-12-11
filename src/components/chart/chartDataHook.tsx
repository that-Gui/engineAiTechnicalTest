import React from 'react';

export default function chartDataHook() {
	const [ticker, setTicker] = React.useState<{
		symbol: string | null;
		error: string | null;
		xAxis: string[] | null; // Update the type of xAxis to string[]
		closePrices: number[] | null;
		volume: number[] | null;
	}>({
		symbol: null,
		error: null,
		xAxis: null,
		closePrices: null,
		volume: null,
	}); // Initialize xAxis with null

	const handleTickerSelected = async (symbol: string) => {
		console.log('symbol received for the api call', symbol);
		try {
			const response = await fetch(
				`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=${
					import.meta.env.VITE_API_KEY
				}}`
			);
			if (!response.ok) {
				throw new Error('API request failed');
			}
			const dataFetch = await response.json();
			if (dataFetch.hasOwnProperty('Information')) {
				setTicker({
					symbol: symbol,
					error:
						'Error: API rate limit exceeded. Please upgrade to a premium plan to increase your request limit.',
					xAxis: null,
					closePrices: null,
					volume: null,
				});
			}

			const dataParsing = Object.entries(dataFetch['Monthly Time Series'])
				.sort()
				.slice(-12)
				.map((item) => {
					return {
						date: item[0],
						close: item[1]['4. close'],
						volume: item[1]['5. volume'],
					};
				});

			console.log('dataParsing', dataParsing);

			const xAxis = dataParsing.map((item) => item.date);
			const closePrices = dataParsing.map((item) => +item.close);
			const volume = dataParsing.map((item) => +item.volume);

			setTicker({
				symbol,
				error: null,
				xAxis,
				closePrices,
				volume,
			});
		} catch (error) {
			console.log('API request error');
		}
	};

	return [ticker, handleTickerSelected];
}
