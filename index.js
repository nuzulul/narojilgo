//const http = require('http');

const express = require('express');

var cors = require('cors');

const app = express();

var radio = require("radio-stream");

let target = 'http://stream.zeno.fm/2x8c8cnq2zhvv';

var http = require('http'),
    request = require('request'),
    remote = target;

http.createServer(function (req, res) {


    if (req.url == '/cron') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('ok');
        res.end();
    
    }
  else
    {
          const headers = {
            'Access-Control-Allow-Origin': '*', /* @dev First, read about security */
            'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
            'Access-Control-Max-Age': 2592000, // 30 days
            /** add other headers as per requirement */
            'Content-Type': 'audio/mpeg',
          };
          
          res.writeHead(200, headers);
        // http://somewhere.com/noo.bin
        var remoteUrl = remote + req.url;
        request(remoteUrl).pipe(res);
      
    }
  

}).listen(8080);