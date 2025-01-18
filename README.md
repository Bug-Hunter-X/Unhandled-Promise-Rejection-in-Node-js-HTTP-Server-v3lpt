# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common error in Node.js: unhandled promise rejections.  The `bug.js` file contains code with a potential unhandled rejection, while `bugSolution.js` shows how to fix it.

## Problem

Unhandled promise rejections can lead to unexpected behavior and crashes in your Node.js applications.  They can be difficult to debug because they don't always cause immediate errors. 

## Solution

The solution is to always handle potential rejections using `.catch()`.  This ensures that any errors are caught and handled gracefully, preventing unexpected crashes.