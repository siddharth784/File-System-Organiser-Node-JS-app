#!/usr/bin/env node 
//(SHEBANG SYNTAX FOR NODE.JS. WHAT THIS DOES IS THAT AFTER WRITING THIS IN OUR PROJECT, I CAN OPEN COMMAND LINE ANYWHERE AT ANY FOLDER, TYPE "PEPPY ORGANISE" OR "PEPPY TREE" AND EXECUTE THIS PROJECT THERE.(AFTER ADDING PEPPY IN BIN IN PACKAGE.JSON)
const { dir } = require('console');
const fs=require('fs');
const path=require('path')
const treeObj=require('./tree')
const helpObj=require('./help')
const organiseObj=require('./organise')

let inputArr=process.argv.slice(2); 
// process.argv is used to take input 

//cuz user will write "node input.js xyzabc" and that xyzabc is of importance to us
// console.log(inputArr);
let command=inputArr[0];
switch(command){
    case "help":
        helpObj.helpkey(inputArr[1]);
        break;
    case "organise":
        organiseObj.organisekey(inputArr[1]);
        break;
    case "tree":
        treeObj.treekey(inputArr[1]);
        break;
    default:console.log("please enter a valid command");
        break;
}

