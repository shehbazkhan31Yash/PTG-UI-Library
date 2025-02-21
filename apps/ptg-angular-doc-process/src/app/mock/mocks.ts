/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Mock mock data;
 * @description This file for mock data 
**/

// import { TreeviewItem } from "ngx-treeview";

export const GENDER_LIST = [
  {
    id: '1',
    name: 'male',
    default: true,
  },
  {
    id: '2',
    name: 'female',
  },
  {
    id: '3',
    name: 'other',
  },
];

export const CITY_LIST = [
  {
    id: '1',
    name: 'indore',
  },
  {
    id: '2',
    name: 'bhopal',
  },
  {
    id: '3',
    name: 'neemuch',
  },
  {
    id: '4',
    name: 'pune',
  },
  {
    id: '5',
    name: 'bangalore',
  },
  {
    id: '6',
    name: 'nagpur',
  },
  {
    id: '7',
    name: 'delhi',
  },
  {
    id: '8',
    name: 'hyderabad',
  },
  {
    id: '9',
    name: 'ahmedabad',
  },
  {
    id: '10',
    name: 'kanpur',
  },
  {
    id: '11',
    name: 'agra',
  },
  {
    id: '12',
    name: 'nashik',
  }
];

export const TODO = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

export const DONE = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

export const CHECKBOX_ARRAY = new TreeviewItem({
  text: 'IT', value: 9, children: [
    {
      text: 'Programming', value: 91, children: [{
        text: 'Frontend', value: 911, children: [
          { text: 'Angular 1', value: 9111 },
          { text: 'Angular 2', value: 9112 },
          { text: 'ReactJS', value: 9113}
        ]
      }, {
        text: 'Backend', value: 912, children: [
          { text: 'C#', value: 9121 },
          { text: 'Java', value: 9122 },
          { text: 'Python', value: 9123}
        ]
      }]
    },
    {
      text: 'Networking', value: 92, children: [
        { text: 'Internet', value: 921 },
        { text: 'Security', value: 922 }
      ]
    }
  ]
});
// table and dropdown data for download functionlity 
export const TABLE_DATA = {
  columnsData:['SN', 'NAME', 'DESIGNATION', 'DEPARTMENT'],
  rowsData: [
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
  ]
};

export const FILE_TYPE = [
  {
    id: '1',
    name: 'Download PDF',
    value: 'PDF',
  },
  {
    id: '2',
    name: 'Download Excel',
    value: 'EXCEL',
  },
  {
    id: '3',
    name: 'Download Word',
    value: 'WORD',
  },
  {
    id: '4',
    name: 'Download PNG',
    value: 'PNG',
  },
];

export const ACCORDIAN_DATA = [
  {
    title: 'Static Header 1',
    discription: 'This content is straight in the template.',
  },
  {
    title: 'Static Header 2',
    discription: 'This content is straight in the template.',
  },
  {
    title: 'Static Header 3',
    discription: 'This content is straight in the template.',
  },
  {
    title: 'Static Header 4',
    discription: 'This content is straight in the template.',
  }
];