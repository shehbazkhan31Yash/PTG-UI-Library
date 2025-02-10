export const CITY_LIST = [
	// { value: '', label: 'Select' },
	{ value: 'pune', label: 'Pune', name: 'city' },
	{ value: 'indore', label: 'Indore', name: 'city' },
	{ value: 'gujarat', label: 'Gujarat', name: 'city' },
	{ value: 'Karnataka', label: 'Karnataka', name: 'city' },
	{ value: 'goa', label: 'Goa', name: 'city' },
];

export const Lang_LIST = [
	{ value: 'en', label: 'English', name: 'en' },
	{ value: 'fr', label: 'French', name: 'fr' },
];

export const CHECKBOX_DATA = [
	{
		id: 1,
		name: 'IT',
		parentId: 0,
	},
	{
		id: 2,
		name: 'Programming',
		parentId: 1,
	},
	{
		id: 4,
		name: 'Frontend',
		parentId: 2,
	},
	{
		id: 5,
		name: 'Angular 1',
		parentId: 4,
	},
	{
		id: 6,
		name: 'Angular 2',
		parentId: 4,
	},
	{
		id: 7,
		name: 'ReactJS',
		parentId: 4,
	},
	{
		id: 8,
		name: 'Backend',
		parentId: 2,
	},
	{
		id: 9,
		name: 'C#',
		parentId: 8,
	},
	{
		id: 10,
		name: 'Java',
		parentId: 8,
	},
	{
		id: 11,
		name: 'Python',
		parentId: 8,
	},
	{
		id: 12,
		name: 'Networking',
		parentId: 1,
	},
	{
		id: 13,
		name: 'Internet',
		parentId: 12,
	},
	{
		id: 14,
		name: 'Security',
		parentId: 12,
	},
];

export const GENDER_LIST = [
	{
		id: '1',
		name: 'Male',
		value: 'male',
	},
	{
		id: '2',
		name: 'Female',
		value: 'female',
	},
	{
		id: '3',
		name: 'Other',
		value: 'other',
	},
];

export const d3LineData: any = {
	data: [
		{
			date: new Date('2022-03-01'),
			value: 130,
		},
		{
			date: new Date('2022-02-15'),
			value: 300,
		},
		{
			date: new Date('2022-02-01'),
			value: 1000,
		},
	],
};

export const d3BarData: any = {
	height: 600,
	width: 800,
	title: 'My Charts',
	source: 'Trending languages',
	x_title: 'Languages',
	y_title: 'Numbers',
	data: [
		{ Framework: 'Vuee', Stars: '100000', Released: '2014', color: '#454545' },

		{ Framework: 'React', Stars: '120793', Released: '2013', color: 'blue' },

		{ Framework: 'Angular', Stars: '92342', Released: '2016', color: 'green' },

		{
			Framework: 'Backbone',

			Stars: '67647',

			Released: '2010',

			color: 'orange',
		},

		{ Framework: 'Ember', Stars: '121471', Released: '2011', color: 'pink' },
	],
};

export const d3PieData: any = {
	height: 600,
	width: 800,
	innerRadius: 0,
	outerRadius: 150,
	data: [
		{ Framework: 'Vuee', Stars: '100000', Released: '2014', color: '#454545' },

		{ Framework: 'React', Stars: '120793', Released: '2013', color: 'blue' },

		{ Framework: 'Angular', Stars: '92342', Released: '2016', color: 'green' },

		{
			Framework: 'Backbone',

			Stars: '67647',

			Released: '2010',

			color: 'orange',
		},

		{ Framework: 'Ember', Stars: '121471', Released: '2011', color: 'pink' },
	],
};

export const highchartsLineData: any = {
	title: 'my Charts',
	data: [],
	remainingOptions: {
		xAxis: {
			lineColor: 'transparent',
			tickLength: 0,
		},

		plotOptions: {
			series: {
				pointStart: 2010,
			},
		},
		series: [
			{
				name: 'Installation',
				data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
			},
		],
	},
};

export const highchartsMultiLineData: any = {
	title: 'my Charts',
	data: [],
	remainingOptions: {
		xAxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		},
		plotOptions: {
			series: {
				lineWidth: 5,
			},
		},
		series: [
			{
				name: 'Installation',
				data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
			},
			{
				name: 'Manufacturing',
				data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
			},
			{
				name: 'Sales & Distribution',
				data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
			},
			{
				name: 'Project Development',
				data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
			},
			{
				name: 'Other',
				data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
			},
		],
	},
};

export const highchartsLineBarData: any = {
	title: 'my Charts',
	subtitle: 'Source: WorldClimate.com',
	categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	remainingOptions: {
		series: [
			{
				name: 'Rainfall',
				type: 'column',
				//yAxis: 1,
				data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
				tooltip: {
					valueSuffix: ' mm',
				},
			},
			{
				name: 'Temperature',
				type: 'spline',
				data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
				tooltip: {
					valueSuffix: '°C',
				},
			},
		],
	},
};

export const highchartStackedColumnData: any = {
	title: 'Stacked Column',
	categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
	remainingOptions: {
		series: [
			{
				name: 'John',
				data: [5, 3, 4, 7, 2],
			},
			{
				name: 'Jane',
				data: [2, 2, 3, 2, 1],
			},
			{
				name: 'Joe',
				data: [3, 4, 4, 2, 5],
			},
		],
	},
};

export const highchartsColumnData: any = {
	title: 'my Charts',
	data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
	remainingOptions: {
		xAxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		},
	},
};

export const highchartsPieData = {
	title: 'My charts',
	data: [
		{
			name: 'Chrome',
			y: 61.41,
			sliced: true,
			selected: true,
		},
		{
			name: 'Internet Explorer',
			y: 11.84,
		},
		{
			name: 'Firefox',
			y: 10.85,
		},
		{
			name: 'Edge',
			y: 4.67,
		},
		{
			name: 'Safari',
			y: 4.18,
		},
		{
			name: 'Sogou Explorer',
			y: 1.64,
		},
		{
			name: 'Opera',
			y: 1.6,
		},
		{
			name: 'QQ',
			y: 1.2,
		},
		{
			name: 'Other',
			y: 2.61,
		},
	],
};

export const line3DOptions: any = {
	//title:"Languages",
	data: [
		{
			name: 'Year 1800',
			data: [107, 31, 635, 203, 2],
		},
	],
	categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
};

export const column3DOptions: any = {
	//title:"Languages",
	data: [
		{
			name: 'Year 1800',
			data: [107, 31, 635, 203, 2],
		},
	],
	categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
};

export const pie3dData: any = {
	data: [
		['Firefox', 45.0],
		['IE', 26.8],
		{
			name: 'Chrome',
			y: 12.8,
			sliced: true,
			selected: true,
		},
		['Safari', 8.5],
		['Opera', 6.2],
		['Others', 0.7],
	],
	title: '',
};

export const downloadFileData: any = {
	columns: ['SN', 'NAME', 'DESIGNATION', 'DEPARTMENT'],
	data: [
		[1, 'Astik', 'Manager', 'Engineering and MBA'],

		[2, 'Yogita', 'QA', 'Testing'],

		[3, 'Rajesh', 'Manager', 'Management'],

		[4, 'Swapnil', 'Developer', 'Development'],

		[5, 'Anmol', 'Consultant', 'HR'],

		[6, 'Mansi', 'Software Developer', 'Engineering'],

		[7, 'Astik', 'Manager', 'Engineering and MBA'],

		[8, 'Yogita', 'QA', 'Testing'],

		[9, 'Rajesh', 'Manager', 'Management'],

		[10, 'Yogita', 'QA', 'Testing'],
	],
};

export const SALUTATION_LIST = [
	// { value: '', label: 'Select' },
	{ value: 'Mr.', label: 'Mr', name: 'salutation' },
	{ value: 'Mrs', label: 'Mrs', name: 'salutation' },
];

export const GENDER_LIST_SELECT = [
	// { value: '', label: 'Select' },
	{ value: 'Male.', label: 'Male', name: 'Gender' },
	{ value: 'Female', label: 'Female', name: 'Gender' },
	{ value: 'Other', label: 'Other', name: 'Gender' },
];
export const STATE_LIST = [
	// { value: '', label: 'Select' },
	{ value: 'Madhya Pradesh', label: 'Madhya Pradesh', name: 'state' },
	{ value: 'Maharashtra', label: 'Maharashtra', name: 'state' },
	{ value: 'Gujarat', label: 'Gujarat', name: 'state' },
	{ value: 'Karnataka', label: 'Karnataka', name: 'state' },
	{ value: 'goa', label: 'Goa', name: 'state' },
];
export const COUNTRY_LIST = [
	// { value: '', label: 'Select' },
	{ value: 'India', label: 'India', name: 'Country' },
	{ value: 'Russia', label: 'Russia', name: 'Country' },
	{ value: 'Israel', label: 'Israel', name: 'Country' },
	{ value: 'France', label: 'France', name: 'Country' },
	{ value: 'USA', label: 'USA', name: 'Country' },
];
export const CARD_LIST = [
	// { value: '', label: 'Select' },
	{ value: 'Visa', label: 'Visa', name: 'card' },
	{ value: 'Master Card', label: 'Master Card', name: 'card' },
	{ value: 'Rupay Card', label: 'Rupay Card', name: 'card' },
];
