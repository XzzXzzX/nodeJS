/**
 * 
 */

 var server = require("./FirstServer");
 var route = require("./Routing");

 server.start(route.route());