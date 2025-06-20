export const fetchDataFromStrapi = async (endpoint) => {
  const baseUrl = 'https://yash-ui-strapi.azurewebsites.net/api';
  const url = `${baseUrl}/${endpoint}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
    // return data?.data.length > 0 ? data : dummyData; // Use dummy data if no data is returned
  } catch (error) {
    console.error('Error fetching data from Strapi:', error);
    throw error; // Rethrow the error for further handling if needed
  }
};

// const dummyData = {
//   data: [
//     {
//       id: 1,
//       attributes: {
//         createdAt: '2025-06-19T04:02:52.714Z',
//         updatedAt: '2025-06-19T04:02:54.209Z',
//         publishedAt: '2025-06-19T04:02:54.206Z',
//         file: {
//           data: [
//             {
//               id: 1,
//               attributes: {
//                 name: 'BestPractices-FrontEnd.pptx',
//                 alternativeText: null,
//                 caption: null,
//                 width: null,
//                 height: null,
//                 formats: null,
//                 hash: 'Best_Practices_Front_End_d7c90a5e3c',
//                 ext: '.pptx',
//                 mime: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
//                 size: 2033.78,
//                 url: '/uploads/Best_Practices_Front_End_d7c90a5e3c.pptx',
//                 previewUrl: null,
//                 provider: 'local',
//                 provider_metadata: null,
//                 createdAt: '2025-06-18T12:17:51.100Z',
//                 updatedAt: '2025-06-18T12:17:51.100Z',
//               },
//             },
//           ],
//         },
//         fileType: {
//           data: null,
//         },
//       },
//     },
//     {
//       id: 2,
//       attributes: {
//         createdAt: '2025-06-19T04:03:36.207Z',
//         updatedAt: '2025-06-19T04:03:38.520Z',
//         publishedAt: '2025-06-19T04:03:38.514Z',
//         file: {
//           data: [
//             {
//               id: 12,
//               attributes: {
//                 name: 'CodingStandard-Angular.docx',
//                 alternativeText: null,
//                 caption: null,
//                 width: null,
//                 height: null,
//                 formats: null,
//                 hash: 'Coding_Standard_Angular_4c79168a07',
//                 ext: '.docx',
//                 mime: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
//                 size: 387.61,
//                 url: '/uploads/Coding_Standard_Angular_4c79168a07.docx',
//                 previewUrl: null,
//                 provider: 'local',
//                 provider_metadata: null,
//                 createdAt: '2025-06-19T04:00:27.678Z',
//                 updatedAt: '2025-06-19T04:00:27.678Z',
//               },
//             },
//           ],
//         },
//         fileType: {
//           data: null,
//         },
//       },
//     },
//     {
//       id: 3,
//       attributes: {
//         createdAt: '2025-06-19T04:04:14.433Z',
//         updatedAt: '2025-06-19T04:04:15.745Z',
//         publishedAt: '2025-06-19T04:04:15.740Z',
//         file: {
//           data: [
//             {
//               id: 2,
//               attributes: {
//                 name: 'CodingStandard-React.docx',
//                 alternativeText: null,
//                 caption: null,
//                 width: null,
//                 height: null,
//                 formats: null,
//                 hash: 'Coding_Standard_React_f9bd01f05d',
//                 ext: '.docx',
//                 mime: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
//                 size: 71.06,
//                 url: '/uploads/Coding_Standard_React_f9bd01f05d.docx',
//                 previewUrl: null,
//                 provider: 'local',
//                 provider_metadata: null,
//                 createdAt: '2025-06-18T12:18:21.141Z',
//                 updatedAt: '2025-06-18T12:18:21.141Z',
//               },
//             },
//           ],
//         },
//         fileType: {
//           data: null,
//         },
//       },
//     },
//     {
//       id: 4,
//       attributes: {
//         createdAt: '2025-06-19T04:04:53.153Z',
//         updatedAt: '2025-06-19T04:04:54.911Z',
//         publishedAt: '2025-06-19T04:04:54.903Z',
//         file: {
//           data: [
//             {
//               id: 3,
//               attributes: {
//                 name: 'PTG-UI-Generator.pptx',
//                 alternativeText: null,
//                 caption: null,
//                 width: null,
//                 height: null,
//                 formats: null,
//                 hash: 'PTG_UI_Generator_16d05664d0',
//                 ext: '.pptx',
//                 mime: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
//                 size: 781.26,
//                 url: '/uploads/PTG_UI_Generator_16d05664d0.pptx',
//                 previewUrl: null,
//                 provider: 'local',
//                 provider_metadata: null,
//                 createdAt: '2025-06-18T12:18:32.137Z',
//                 updatedAt: '2025-06-18T12:18:32.137Z',
//               },
//             },
//           ],
//         },
//         fileType: {
//           data: null,
//         },
//       },
//     },
//     {
//       id: 6,
//       attributes: {
//         createdAt: '2025-06-19T07:05:33.174Z',
//         updatedAt: '2025-06-19T07:05:35.811Z',
//         publishedAt: '2025-06-19T07:05:35.807Z',
//         file: {
//           data: [
//             {
//               id: 13,
//               attributes: {
//                 name: 'Security Guidelines-UI.pptx',
//                 alternativeText: null,
//                 caption: null,
//                 width: null,
//                 height: null,
//                 formats: null,
//                 hash: 'Security_Guidelines_UI_eb7ebd42b6',
//                 ext: '.pptx',
//                 mime: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
//                 size: 2037.92,
//                 url: '/uploads/Security_Guidelines_UI_eb7ebd42b6.pptx',
//                 previewUrl: null,
//                 provider: 'local',
//                 provider_metadata: null,
//                 createdAt: '2025-06-19T07:03:38.193Z',
//                 updatedAt: '2025-06-19T07:03:38.193Z',
//               },
//             },
//           ],
//         },
//         fileType: {
//           data: null,
//         },
//       },
//     },
//     {
//       id: 7,
//       attributes: {
//         createdAt: '2025-06-19T07:06:46.793Z',
//         updatedAt: '2025-06-19T07:06:48.389Z',
//         publishedAt: '2025-06-19T07:06:48.385Z',
//         file: {
//           data: [
//             {
//               id: 14,
//               attributes: {
//                 name: 'Front End Best Practices Using ReactJS.xlsx',
//                 alternativeText: null,
//                 caption: null,
//                 width: null,
//                 height: null,
//                 formats: null,
//                 hash: 'Front_End_Best_Practices_Using_React_JS_32d114da77',
//                 ext: '.xlsx',
//                 mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
//                 size: 26.03,
//                 url: '/uploads/Front_End_Best_Practices_Using_React_JS_32d114da77.xlsx',
//                 previewUrl: null,
//                 provider: 'local',
//                 provider_metadata: null,
//                 createdAt: '2025-06-19T07:04:04.079Z',
//                 updatedAt: '2025-06-19T07:04:04.079Z',
//               },
//             },
//           ],
//         },
//         fileType: {
//           data: null,
//         },
//       },
//     },
//   ],
//   meta: {
//     pagination: {
//       page: 1,
//       pageSize: 25,
//       pageCount: 1,
//       total: 6,
//     },
//   },
// };
