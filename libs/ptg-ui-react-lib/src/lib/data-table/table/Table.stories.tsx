import React, { useEffect, useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { PtgUiTable } from './Table';
import { PtgUiPagination } from '../../pagination/pagination';

export default {
	title: 'Components/Table',
	component: PtgUiTable,
	argTypes: {
		columns: { control: 'object' },
		data: { control: 'object' },
		stickyHeader: { control: 'boolean' },
		alternateRowColor: { control: 'boolean' },
	},
} as Meta<typeof PtgUiTable>;

const Template: StoryFn<typeof PtgUiTable> = (args) => <PtgUiTable {...args} />;

const PaginationTemplate: StoryFn<typeof PtgUiTable> = (args) => {
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 5; // Define the number of items per page

	// Calculate the data to display based on the current page and page size
	const startIndex = (currentPage - 1) * pageSize;
	const paginatedData = args.data.slice(startIndex, startIndex + pageSize);

	return (
		<section>
			<PtgUiTable columns={args.columns} data={paginatedData} stickyHeader={args.stickyHeader} />
			<PtgUiPagination
				dataCount={args.data.length}
				pageNumber={currentPage}
				pageIndex={setCurrentPage}
				pageSize={pageSize}
				siblingCount={1}
				previousBtnText="Previous"
				nextBtnText="Next"
			/>
		</section>
	);
};
const ServerSidePaginationTemplate: StoryFn<typeof PtgUiTable> = (args) => {
	const [data, setData] = useState<{ id: number; title: string; description: string }[]>([]);
	const [dataCount, setDataCount] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 10; // Define the number of items per page

	// Mock API to generate mock server-side data
	const generateMockData = (totalItems: number) => {
		const mockData: { id: number; title: string; description: string }[] = [];
		for (let i = 1; i <= totalItems; i++) {
			mockData.push({
				id: i,
				title: `Item ${i}`,
				description: `This is the description for item ${i}.`,
			});
		}
		return mockData;
	};

	useEffect(() => {
		// Simulate an API call
		const mockData = generateMockData(100); // Total 100 items
		setData(mockData);
		setDataCount(mockData.length);
	}, []);

	const currentItems = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

	return (
		<section>
			<PtgUiTable columns={args.columns} data={currentItems} stickyHeader={args.stickyHeader} />
			<PtgUiPagination
				dataCount={dataCount}
				pageNumber={currentPage}
				pageIndex={setCurrentPage} // Update current page
				pageSize={pageSize}
				siblingCount={1}
				previousBtnText="Previous"
				nextBtnText="Next"
			/>
		</section>
	);
};
// Default Table
export const DefaultTable = Template.bind({});
DefaultTable.args = {
	columns: [
		{ accessor: 'athlete', Header: 'Athlete', columnWidth: '100px' },
		{ accessor: 'age', Header: 'Age', columnWidth: '100px' },
		{ accessor: 'country', Header: 'Country', columnWidth: '150px' },
		{ accessor: 'date', Header: 'Date', columnWidth: '100px' },
		{ accessor: 'sport', Header: 'Sport', columnWidth: '100px' },
		{ accessor: 'gold', Header: 'Gold', columnWidth: '100px' },
		{ accessor: 'silver', Header: 'Silver', columnWidth: '100px' },
		{ accessor: 'total', Header: 'Total', columnWidth: '100px' },
		{ accessor: '', Header: '', columnWidth: '80px' },
	],
	data: [],
	stickyHeader: false,
	alternateRowColor: false,
};

// Table with Sticky Header
export const TableWithStickyHeader = Template.bind({});
TableWithStickyHeader.args = {
	columns: [
		{ Header: 'ID', accessor: 'id', isNumeric: true, columnWidth: '75px' },
		{ Header: 'First Name', accessor: 'firstName', columnWidth: '140px' },
		{ Header: 'Last Name', accessor: 'lastName', columnWidth: '140px' },
		{ Header: 'Email', accessor: 'email', columnWidth: '140px' },
		{ Header: 'Phone', accessor: 'phone', columnWidth: '140px' },
		{ Header: 'Age', accessor: 'age', isNumeric: true, columnWidth: '75px' },
		{ Header: 'Country', accessor: 'country', columnWidth: '125px' },
		{ Header: 'City', accessor: 'city', columnWidth: '100px' },
	],
	data: [
		{
			id: 1,
			firstName: 'John',
			lastName: 'Doe',
			email: 'john.doe@example.com',
			phone: '123-456-7890',
			age: 28,
			country: 'USA',
			city: 'New York',
		},
		{
			id: 2,
			firstName: 'Jane',
			lastName: 'Smith',
			email: 'jane.smith@example.com',
			phone: '234-567-8901',
			age: 34,
			country: 'Canada',
			city: 'Toronto',
		},
		{
			id: 3,
			firstName: 'Alice',
			lastName: 'Johnson',
			email: 'alice.johnson@example.com',
			phone: '345-678-9012',
			age: 25,
			country: 'UK',
			city: 'London',
		},
		{
			id: 4,
			firstName: 'Bob',
			lastName: 'Brown',
			email: 'bob.brown@example.com',
			phone: '456-789-0123',
			age: 45,
			country: 'Australia',
			city: 'Sydney',
		},
		{
			id: 5,
			firstName: 'Charlie',
			lastName: 'Davis',
			email: 'charlie.davis@example.com',
			phone: '567-890-1234',
			age: 30,
			country: 'USA',
			city: 'Los Angeles',
		},
		{
			id: 6,
			firstName: 'David',
			lastName: 'Wilson',
			email: 'david.wilson@example.com',
			phone: '678-901-2345',
			age: 40,
			country: 'Canada',
			city: 'Vancouver',
		},
		{
			id: 7,
			firstName: 'Eva',
			lastName: 'Garcia',
			email: 'eva.garcia@example.com',
			phone: '789-012-3456',
			age: 22,
			country: 'Mexico',
			city: 'Mexico City',
		},
		{
			id: 8,
			firstName: 'Frank',
			lastName: 'Martinez',
			email: 'frank.martinez@example.com',
			phone: '890-123-4567',
			age: 29,
			country: 'USA',
			city: 'Chicago',
		},
		{
			id: 9,
			firstName: 'Grace',
			lastName: 'Hernandez',
			email: 'grace.hernandez@example.com',
			phone: '901-234-5678',
			age: 31,
			country: 'Spain',
			city: 'Madrid',
		},
		{
			id: 10,
			firstName: 'Henry',
			lastName: 'Lopez',
			email: 'henry.lopez@example.com',
			phone: '012-345-6789',
			age: 27,
			country: 'Argentina',
			city: 'Buenos Aires',
		},
		{
			id: 11,
			firstName: 'Isabella',
			lastName: 'Gonzalez',
			email: 'isabella.gonzalez@example.com',
			phone: '123-456-7891',
			age: 35,
			country: 'Colombia',
			city: 'Bogotá',
		},
		{
			id: 12,
			firstName: 'Jack',
			lastName: 'Wilson',
			email: 'jack.wilson@example.com',
			phone: '234-567-8902',
			age: 38,
			country: 'USA',
			city: 'Miami',
		},
		{
			id: 13,
			firstName: 'Kathy',
			lastName: 'Anderson',
			email: 'kathy.anderson@example.com',
			phone: '345-678-9013',
			age: 26,
			country: 'UK',
			city: 'Manchester',
		},
		{
			id: 14,
			firstName: 'Leo',
			lastName: 'Thomas',
			email: 'leo.thomas@example.com',
			phone: '456-789-0124',
			age: 33,
			country: 'Australia ',
			city: 'Melbourne',
		},
		{
			id: 15,
			firstName: 'Mia',
			lastName: 'Taylor',
			email: 'mia.taylor@example.com',
			phone: '567-890-1235',
			age: 24,
			country: 'Canada',
			city: 'Ottawa',
		},
	],
	stickyHeader: true,
	alternateRowColor: false,
};

// Table with Filtering and Sorting
export const TableWithFilterAndSort = Template.bind({});
TableWithFilterAndSort.args = {
	columns: [
		{ Header: 'Employee Name', accessor: 'name' },
		{ Header: 'Position', accessor: 'position' },
		{ Header: 'Salary', accessor: 'salary' },
	],
	data: [
		{ id: 1, name: 'Ella Fitzgerald', position: 'Analyst', salary: '$80,000' },
		{ id: 2, name: 'Louis Armstrong', position: 'Developer', salary: '$100,000' },
		{ id: 3, name: 'Duke Ellington', position: 'Manager', salary: '$120,000' },
	],
	stickyHeader: true,
	alternateRowColor: true,
};

// Table with Pagination Story
export const TableWithPagination = PaginationTemplate.bind({});
TableWithPagination.args = {
	columns: [
		{ Header: 'ID', accessor: 'id', columnWidth: '75px' },
		{ Header: 'First Name', accessor: 'firstName', columnWidth: '140px' },
		{ Header: 'Last Name', accessor: 'lastName', columnWidth: '140px' },
		{ Header: 'Email', accessor: 'email', columnWidth: '200px' },
		{ Header: 'Phone', accessor: 'phone', columnWidth: '140px' },
		{ Header: 'Age', accessor: 'age', columnWidth: '75px' },
		{ Header: 'Country', accessor: 'country', columnWidth: '125px' },
		{ Header: 'City', accessor: 'city', columnWidth: '100px' },
	],
	data: [
		{
			id: 1,
			firstName: 'John',
			lastName: 'Doe',
			email: 'john.doe@example.com',
			phone: '123-456-7890',
			age: 28,
			country: 'USA',
			city: 'New York',
		},
		{
			id: 2,
			firstName: 'Jane',
			lastName: 'Smith',
			email: 'jane.smith@example.com',
			phone: '234-567-8901',
			age: 34,
			country: 'Canada',
			city: 'Toronto',
		},
		{
			id: 3,
			firstName: 'Alice',
			lastName: 'Johnson',
			email: 'alice.johnson@example.com',
			phone: '345-678-9012',
			age: 25,
			country: 'UK',
			city: 'London',
		},
		{
			id: 4,
			firstName: 'Bob',
			lastName: 'Brown',
			email: 'bob.brown@example.com',
			phone: '456-789-0123',
			age: 45,
			country: 'Australia',
			city: 'Sydney',
		},
		{
			id: 5,
			firstName: 'Charlie',
			lastName: 'Davis',
			email: 'charlie.davis@example.com',
			phone: '567-890-1234',
			age: 30,
			country: 'USA',
			city: 'Los Angeles',
		},
		{
			id: 6,
			firstName: 'David',
			lastName: 'Wilson',
			email: 'david.wilson@example.com',
			phone: '678-901-2345',
			age: 40,
			country: 'Canada',
			city: 'Vancouver',
		},
		{
			id: 7,
			firstName: 'Eva',
			lastName: 'Garcia',
			email: 'eva.garcia@example.com',
			phone: '789-012-3456',
			age: 22,
			country: 'Mexico',
			city: 'Mexico City',
		},
		{
			id: 8,
			firstName: 'Frank',
			lastName: 'Martinez',
			email: 'frank.martinez@example.com',
			phone: '890-123-4567',
			age: 29,
			country: 'USA',
			city: 'Chicago',
		},
		{
			id: 9,
			firstName: 'Grace',
			lastName: 'Hernandez',
			email: 'grace.hernandez@example.com',
			phone: '901-234-5678',
			age: 31,
			country: 'Spain',
			city: 'Madrid',
		},
		{
			id: 10,
			firstName: 'Henry',
			lastName: 'Lopez',
			email: 'henry.lopez@example.com',
			phone: '012-345-6789',
			age: 27,
			country: 'Argentina',
			city: 'Buenos Aires',
		},
		{
			id: 11,
			firstName: 'Isabella',
			lastName: 'Gonzalez',
			email: 'isabella.gonzalez@example.com',
			phone: '123-456-7891',
			age: 35,
			country: 'Colombia',
			city: 'Bogotá',
		},
		{
			id: 12,
			firstName: 'Jack',
			lastName: 'Wilson',
			email: 'jack.wilson@example.com',
			phone: '234-567-8902',
			age: 38,
			country: 'USA',
			city: 'Miami',
		},
		{
			id: 13,
			firstName: 'Kathy',
			lastName: 'Anderson',
			email: 'kathy.anderson@example.com',
			phone: '345-678-9013',
			age: 26,
			country: 'UK',
			city: 'Manchester',
		},
		{
			id: 14,
			firstName: 'Leo',
			lastName: 'Thomas',
			email: 'leo.thomas@example.com',
			phone: '456-789-0124',
			age: 33,
			country: 'Australia',
			city: 'Melbourne',
		},
		{
			id: 15,
			firstName: 'Mia',
			lastName: 'Taylor',
			email: 'mia.taylor@example.com',
			phone: '567-890-1235',
			age: 24,
			country: 'Canada',
			city: 'Ottawa',
		},
	],
	stickyHeader: false,
	alternateRowColor: true,
};
// Table with Server Side Pagination Story
export const TableWithServerSidePagination = ServerSidePaginationTemplate.bind({});
TableWithServerSidePagination.args = {
	columns: [
		{ Header: 'ID', accessor: 'id', columnWidth: '75px' },
		{ Header: 'Title', accessor: 'title', columnWidth: '200px' },
		{ Header: 'Description', accessor: 'description', columnWidth: '300px' },
	],
	stickyHeader: false,
	alternateRowColor: true,
};
