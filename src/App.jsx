/* import React from 'react'; */
import Chart from './components/chart/chart';
import Table from './components/table/table';
import chartDataHook from './components/chart/chartDataHook';

function App() {
	const [ticker, handleTickerSelected] = chartDataHook();

	return (
		<div className='pageLayout'>
			<div className='container'>
				<Table ticker={handleTickerSelected} />

				{ticker && ticker.error ? (
					<p>{ticker.error}</p>
				) : (
					<Chart ticker={ticker} />
				)}
			</div>
		</div>
	);
}

export default App;
