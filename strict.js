"use strict";

const prompt = require("prompt-sync")({ sigint: true });

let name = prompt("enter your name : ");
console.log(`hello ${name}`);