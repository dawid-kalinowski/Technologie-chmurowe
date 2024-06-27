#!/bin/bash

# Build Docker image with Node.js 12
docker build -t nodejs_server .

# Run Docker container with Node.js server
docker run -p 27000:27017 -d nodejs_server

node server.js &
