export const USERS = [
    {
      id: '1',
      name: 'Harsha',
    },
    {
      id: '2',
      name: 'Ahilya',
    }
];

export const TODO = [
  { id:' 1', content: 'Home' },
  { id: '2', content: 'Pick up Groceries' },
  { id: '3', content: 'Get up' },
  { id: '4', content: 'Fall asleep' },
  { id: '5', content: 'Check e-mail' },
  { id: '6', content: 'Get to work' },
];

export const DRAG_DROP = [
  {
    "id": 1,
    "parent": 0,
    "droppable": true,
    "text": "Folder 1"
  },
  {
    "id": 2,
    "parent": 1,
    "text": "File 1-1",
    "data": {
      "fileType": "csv",
      "fileSize": "0.5MB"
    }
  },
  {
    "id": 3,
    "parent": 1,
    "droppable": true,
    "text": "File 1-2",
    "data": {
      "fileType": "pdf",
      "fileSize": "4.8MB"
    }
  },
  {
    "id": 4,
    "parent": 0,
    "droppable": true,
    "text": "Folder 2"
  },
  {
    "id": 5,
    "parent": 4,
    "droppable": true,
    "text": "Folder 2-1"
  },
  {
    "id": 6,
    "parent": 5,
    "droppable": true,
    "text": "File 2-1-1",
    "data": {
      "fileType": "image",
      "fileSize": "2.1MB"
    }
  },

  {
    "id": 7,
    "parent": 0,
    "droppable": true,
    "text": "Folder 3"
  },
  {
    "id": 8,
    "parent": 7,
    "droppable": true,
    "text": "Folder 3-1"
  },
  {
    "id": 9,
    "parent": 7,
    "droppable": true,
    "text": "File 3-1-1",
    "data": {
      "fileType": "image",
      "fileSize": "2.1MB"
    }
  }
]