// import React from 'react';
import data from './data.json';
import { DataGrid } from '@mui/x-data-grid';

export default function Table(ticker) {
	const handleRowClick = (row) => {
		ticker.ticker(row.id);
	};

	const columns = [
		{ field: 'securityName', headerName: 'Security Name', width: 255 },
		{ field: 'sector', headerName: 'Sector', width: 211 },
		{ field: 'country', headerName: 'Country', width: 155 },
		{
			field: 'trend',
			headerName: 'Trend',
			width: 111,
			renderCell: (params) => {
				const trend = params.row.trend;
				if (trend <= -20) {
					return <span style={{ color: 'red' }}>{trend}%</span>;
				} else if (trend <= 20) {
					return <span style={{ color: 'green' }}>{trend}%</span>;
				} else {
					return <span style={{ color: 'blue' }}>{trend}%</span>;
				}
			},
		},
	];

	const rows = data.map((row) => {
		return {
			id: row.ticker,
			securityName: row.securityName,
			sector: row.sector,
			country: row.country,
			trend: row.trend,
		};
	});

	return (
		<div className='tablediv'>
			<h3>Table section</h3>
			<DataGrid
				columns={columns}
				rows={rows}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 8,
						},
					},
				}}
				pageSizeOptions={[8]}
				rowSelectionOnClick
				onRowClick={handleRowClick}
			/>
		</div>
	);
}
