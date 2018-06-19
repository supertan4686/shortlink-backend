'use strict';

const Hapi = require('hapi');
const shortlink = require('./shortlink_modules');
const boom = require('boom');

const host = 'localhost';
const port = 3000;
const url = host + ":" + port; 

const server = Hapi.server({
    port: port,
    host: host
});

server.route({
  method: 'POST',
  path: '/api/login',
  handler: (request, h) => {
    return h.response('hello login');
  }
});

server.route({
  method: 'GET',
  path: '/{shortlink}',
  handler: async (request, h) => {
    try{
      let short_link = await encodeURIComponent(request.params.shortlink);
      let checkaddamount = await shortlink.add_amount_links(short_link);
      if(checkaddamount == 1){
        let reallink = await shortlink.get_links(short_link);
        return h.response(reallink[0]);
      } else {
        return boom.notFound('Link Not Found');
      }
    } catch (err){
      console.log(err);
    }
  }
});

server.route({
  method: 'POST',
  path: '/api/add',
  handler: async (request, h) => {
    let reallink = request.payload.link;
    let shortlink_gen = shortlink.gen_short_links();
    await shortlink.add_links(shortlink_gen, reallink);
    let json = {
      shortlink : url + '/' + shortlink_gen
    };
    return h.response(json);
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