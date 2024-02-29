#!/bin/bash

# Build Docker image and run container
./zad1.sh

# Wait for server to start
sleep 3

# Test server response
response=$(curl -s http://localhost:8080)

# Check if response is "Hello World"
if [[ "$response" == "Hello World" ]]; then
  echo "Test passed: Server responded with 'Hello World'"
else
  echo "Test failed: Server response is not 'Hello World'"
fi
