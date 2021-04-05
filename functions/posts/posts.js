const { createClient } = require('@astrajs/collections');

exports.handler = async function (event, context) {
  // create an Astra client
  // astra client is used to get collection of posts it contains the info to connect to database in datastax
  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
  });
  // create a shortcut to the users collection in the app namespace/keyspace
  // collections are created automatically
  // the collection of posts

  const posts = astraClient
    .namespace(process.env.ASTRA_DB_KEYSPACE)
    // i am changing it from "posts to tik-tok so that it can be cleared means i have created a post which i want to clear so changing the collections name "
    // .collection('posts');
    .collection('tiktokposts');

  // fetching the data
  // basically finding the data or you can call the post
  try {
    const response = await posts.find();
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringfy(error),
    };
  }
};
