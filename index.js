'use strict';

const Hapi = require('hapi');
const shortlink = require('./shortlink_modules');
const admin = require('./admin_modules');
const boom = require('boom');

const host = 'localhost';
const port = 3000;
const url = host + ":" + port; 

const server = Hapi.server({
    port: port,
    host: host
});


server.route({
  method: 'GET',
  path: '/api/get/{shortlink}',
  options: {
    cors : true
  },
  handler: async (request, h) => {
    let short_link = await encodeURIComponent(request.params.shortlink);
    let checkaddamount = await shortlink.add_amount_links(short_link);
    if(checkaddamount == 1){
      let data = await shortlink.get_links(short_link);
      let url = data[0].reallink;
      let json = {
        reallink: url
      }
      return h.response(json);
    } else {
      return boom.notFound('Link Not Found');
    }
  }
});

server.route({
  method: 'POST',
  path: '/api/login',
  options: {
    cors : true
  },
  handler: async (request, h) => {
    let username = request.payload.username;
    let password = request.payload.password;
    let checkid = await admin.login(username, password);
    let json = {};
    if (typeof checkid != "undefined" && checkid != null && checkid.length != null && checkid.length > 0){
      json = {
        message: 'success'
      };
      
    }
    else {
      json = {
        message: 'fail'
      };
    }
    return h.response(json);
  }
});

server.route({
  method: 'GET',
  path: '/api/getstatlinks',
  options: {
    cors : true
  },
  handler: async (request, h) => {
    let statlink = shortlink.get_stat_links();
    return statlink;
  }
});

server.route({
  method: 'POST',
  path: '/api/add',
  options: {
    cors : true
  },
  handler: async (request, h) => {
    let reallink = request.payload.link;
    let shortlink_gen = shortlink.gen_short_links();
    await shortlink.add_links(shortlink_gen, reallink);
    let json = {
      shortlink : shortlink_gen
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