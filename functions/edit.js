// const { createClient } = require('@astrajs/collections');

// exports.handler = async function (event, context) {
//   const astraClient = await createClient({
//     astraDatabaseId: process.env.ASTRA_DB_ID,
//     astraDatabaseRegion: process.env.ASTRA_DB_REGION,
//     applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
//   });

//   const users = astraClient
//     .namespace(process.env.ASTRA_DB_KEYSPACE)
//     .collection('tiktokposts');

//   try {
//       // partially update a user subdocument
//  users.update(id, {
//     title: "my spot",
//   });

//      return {
//       statusCode: 200,
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       statusCode: 500,
//       body: JSON.stringfy(error),
//     };
//   }
// };
