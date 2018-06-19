// 'use strict';

const Hapi = require('hapi');
const shortlink = require('./shortlink');

const url = 'localhost';
const port = 3000;

const server = Hapi.server({
    port: port,
    host: url
});


server.route({
  method: 'POST',
  path: '/login',
  handler: (request, h) => {
    return 'Login API';
  }
});

// server.route({
//   method: 'GET',
//   path: '/{link}',
//   handler: async (request, h) => {
//     let short_link = request.params.link;
//     let checkaddamount = await shortlink.add_amount_links(short_link);
//     if(checkaddamount == 1){
//       let reallink = shortlink.get_links(short_link);
//       return reallink;
//     } else {
//       return checkaddamount;
//     }
    
//   }
// });

server.route({
  method: 'POST',
  path: '/add',
  handler: async (request, h) => {
    let reallink = request.payload.link;
    let shortlink_gen = shortlink.gen_short_links();
    let checkaddlink = await shortlink.add_links(shortlink_gen, reallink);
    if(checkaddlink == 1){
      return url + ":" + port + '/' + shortlink_gen;
    } else{
      return checkaddlink;
    }
  }
});

const init = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();