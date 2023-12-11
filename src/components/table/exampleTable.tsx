/* import { createTheme, ThemeProvider } from '@mui/material';
import MaterialReactTable from 'material-react-table';

import { SortIcon } from '@/assets/images';
import { LoadingGIF } from '@/components/atoms';
import { NoResultsPlaceHolder } from '@/components/atoms/NoResultsPlaceHolder/NoResultsPlaceHolder';

import './styles.module.css';
export type tableProps = {
	tableData: any;
	tableColumns: any;
	enableRowSelection?: any;
	state?: any;
	onRowSelectionChange?: any;
	getRowId?: any;
	muiSelectCheckboxProps?: any;
	muiTablePaperProps?: any;
	muiTableHeadRowProps?: any;
	muiTableBodyRowProps?: any;
	muiTableBodyCellProps?: any;
	muiCheckboxProps?: any;
	isLoading?: boolean;
};

// {className: '!bg-darkbkg h-[666px] overflow-y-auto p-[10px]'}

const theme = createTheme({
	palette: {
		secondary: {
			main: '#d7e96e',
		},
	},
});

export default theme;

export const MatReactTable = ({
	tableData,
	isLoading,
	tableColumns,
	enableRowSelection,
	state,
	onRowSelectionChange,
	getRowId,
	muiSelectCheckboxProps,
	muiTablePaperProps,
	muiTableHeadRowProps,
	muiTableBodyRowProps,
	muiTableBodyCellProps,
	muiCheckboxProps,
}: tableProps) => {
	return tableData && tableData.length ? (
		<ThemeProvider theme={theme}>
			<MaterialReactTable
				columns={tableColumns}
				data={tableData}
				enableStickyHeader
				enableColumnActions={false}
				enableColumnFilters={false}
				enablePagination={false}
				enableSorting={true}
				enableSortingRemoval={false}
				enableBottomToolbar={false}
				enableTopToolbar={false}
				enableSelectAll={false}
				muiTableContainerProps={{
					sx: {
						maxHeight: '100%',
						'&::-webkit-scrollbar': {
							marginTop: '40px',
							width: '2px',
							height: '2px',
						},
						'&::-webkit-scrollbar-track': {
							backgroundColor: '#353535',
							marginTop: '48px',
						},
						'&::-webkit-scrollbar-thumb': {
							backgroundColor: '#d7e96e',
							borderRadius: '20px',
							height: '71.25px',
						},
					},
				}}
				muiTablePaperProps={{ className: muiTablePaperProps }}
				muiTableHeadRowProps={{
					hover: false,
					className: muiTableHeadRowProps,
				}}
				muiTableHeadCellProps={{
					className:
						'!font-body !text-[15px] !max-h-[55px] !leading-[17.25px] !text-white first:!pl-[60px] first:!rounded-l-[10px] last:!rounded-r-[10px] !border-none',
				}}
				muiTableBodyRowProps={() => ({
					hover: false,
					className: muiTableBodyRowProps,
				})}
				muiTableBodyCellProps={{
					className: muiTableBodyCellProps,
				}}
				icons={{
					ArrowDownwardIcon: () => <SortIcon className='ml-[14px]' />,
				}}
				enableRowSelection={enableRowSelection}
				state={state}
				onRowSelectionChange={onRowSelectionChange}
				getRowId={getRowId}
				muiSelectCheckboxProps={muiSelectCheckboxProps}
				muiSelectAllCheckboxProps={muiSelectCheckboxProps}
				displayColumnDefOptions={{
					'mrt-row-select': {
						header: '',
						size: 14,
					},
				}}
			/>
		</ThemeProvider>
	) : isLoading ? (
		<div className='h-[564px] mt-[-100px]'>
			<LoadingGIF />
		</div>
	) : (
		<div className='h-[60vh] flex align-middle items-center justify-center'>
			<NoResultsPlaceHolder
				title={'No results found'}
				paragraph={
					'Please try adjusting your search to find what you are looking for.'
				}
			/>
		</div>
	);
};
 */
