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
  path: '/{shortlink}',
  handler: async (request, h) => {
    let short_link = await encodeURIComponent(request.params.shortlink);
    let checkaddamount = await shortlink.add_amount_links(short_link);
    if(checkaddamount == 1){
      let data = await shortlink.get_links(short_link);
      let url = data[0].reallink;
      let checkhttp = url.split("/");
      let redirecturl = "";
      if(checkhttp.includes('http:') || checkhttp.includes('https:')){
        redirecturl = url;
      } else {
        redirecturl = "http://" + url;
      }
      return h.redirect(redirecturl);
    } else {
      return boom.notFound('Link Not Found');
    }
  }
});

server.route({
  method: 'GET',
  path: '/admin',
  handler: (request, h) => {
    // redirect to page admin
  }
});

server.route({
  method: 'POST',
  path: '/api/login',
  handler: async (request, h) => {
    let username = request.payload.username;
    let password = request.payload.password;

    let checkid = await admin.login(username, password);
    if (typeof checkid != "undefined" && checkid != null && checkid.length != null && checkid.length > 0){
      let json = {
        id : checkid[0].id,
        username : username
      };
      return h.response(json);
    }
    else {
      return boom.notFound('User Not Found');
    }
  }
});

server.route({
  method: 'GET',
  path: '/api/getstatlinks',
  handler: async (request, h) => {
    let statlink = shortlink.get_stat_links();
    return statlink;
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