// Basically adding data in app we will use the astrajs collection code here
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
    // .collection('posts');
    .collection('tiktokposts');

  // before we have created my first post but i want this data to be created as posts
  const data = [
    {
      id: 0,
      name: 'Mo Farooq',
      username: 'mofarooq32',
      avatar: 'https://i.imgur.com/9KYq7VG.png',
      is_followed: true,
      video: 'https://i.imgur.com/FTBP02Y.mp4',
      caption: 'These ducks are MEGA cute',
      likes: 10,
      comments: 2,
      timestamp: '2019-03-10T09:08:31.020Z',
      button_visible: true,
    },
    {
      id: 1,
      name: 'Tim Salowski',
      username: 'timmytam',
      avatar: 'https://i.imgur.com/rWYtZa6.png',
      is_followed: false,
      video: 'https://i.imgur.com/1A7AKoF.mp4',
      caption: 'When your fries give you attitude #getInMyBelly',
      likes: 12,
      comments: 2,
      timestamp: '2020-03-10T09:08:31.020Z',
      button_visible: true,
    },
    {
      id: 2,
      name: 'Angela Lee',
      username: 'angiecakes',
      avatar: 'https://i.imgur.com/eX3hkoc.png',
      is_followed: true,
      video: 'https://i.imgur.com/al6MLay.mp4',
      caption: 'Happiest of Birthdays my Angel',
      likes: 2,
      comments: 4,
      timestamp: '2020-04-10T09:08:31.020Z',
      button_visible: true,
    },
    {
      id: 3,
      name: 'Nina Xen',
      username: 'nina_lina',
      avatar: 'https://i.imgur.com/IigY4Hm.png',
      is_followed: false,
      video: 'https://i.imgur.com/Kzvbeup.mp4',
      caption: 'The new normal',
      likes: 10,
      comments: 2,
      timestamp: '2020-05-10T09:08:31.020Z',
      button_visible: true,
    },
    {
      id: 0,
      name: 'Lana Del Mont',
      username: 'lana_del_away',
      avatar: 'https://i.imgur.com/jONHmE5.png',
      is_followed: true,
      video: 'https://i.imgur.com/H9UX0Jm.mp4',
      caption: 'Art is for everyone',
      likes: 231,
      comments: 20,
      timestamp: '2020-09-10T09:08:31.020Z',
      button_visible: true,
    },
  ];

  // create a user subdocument
  // basically adding the data or you can call the post
  try {
    // await posts.create('a post', {
    //   title: 'my first post',
    // });
    await posts.create();
    return {
      statusCode: 200,
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringfy(error),
    };
  }
};
