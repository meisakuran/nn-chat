"use strict";
const http = require("node:http");
const { basic } = require(".");
const router = require("./lib/router");

const server = http
  .createServer(
    basic.check((req, res) => {
      router.route(req, res);
    }),
  )
  .on("error", (e) => {
    console.error("Server Error", e);
  })
  .on("clientError", (e) => {
    console.error("Client Error", e);
  });
exports.server = server;
