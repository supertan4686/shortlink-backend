// 'use strict';

const Hapi = require('hapi');

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return 'Hello, world!';
  }
});

server.route({
  method: 'POST',
  path: '/login',
  handler: (request, h) => {
    return 'Login API';
  }
});

server.route({
  method: 'GET',
  path: '/{link}',
  handler: (request, h) => {
    var link = encodeURIComponent(request.params.link);
    
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