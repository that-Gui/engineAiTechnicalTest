/* import React from 'react'; */
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import PropTypes from 'prop-types';
Chart.propTypes = {
	ticker: PropTypes.object || PropTypes.null,
};
export default function Chart({ ticker }) {
	if (ticker === null || ticker === undefined) {
		return <p>Click on table row for chart</p>;
	} else {
		const options = {
			chart: {
				type: 'spline',
			},
			title: {
				text: ticker.symbol,
			},
			xAxis: {
				type: 'datetime',
				categories: ticker.xAxis,
			},
			yAxis: [
				{
					title: {
						text: 'Close Prices',
					},
				},
				{
					title: {
						text: 'Volume',
					},
					opposite: true,
				},
			],
			series: [
				{
					name: 'Close Prices',
					data: ticker.closePrices,
					yAxis: 0,
					marker: {
						enabled: false,
					},
				},
				{
					name: 'Volume',
					data: ticker.volume,
					yAxis: 1,
					marker: {
						enabled: false,
					},
				},
			],
		};

		return (
			<div className='chartdiv'>
				<h3>Chart section</h3>
				<HighchartsReact highcharts={Highcharts} options={options} />
			</div>
		);
	}
}
