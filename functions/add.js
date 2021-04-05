const { createClient } = require('@astrajs/collections');
const faker = require('faker');

const id = faker.random.uuid();
exports.handler = async function (event, context) {
  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
  });

  const users = astraClient
    .namespace(process.env.ASTRA_DB_KEYSPACE)
    .collection('tiktokposts');
  // here i will use fake id from the npm package faker
  try {
    const user = await users.create(id, event.body);
    return {
      statusCode: 200,
      body: JSON.stringify(user),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringfy(error),
    };
  }
};
