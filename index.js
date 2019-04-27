#!/usr/bin/env node

const chalk       = require('chalk');
const clear       = require('clear');
const figlet      = require('figlet');

const files        = require('./lib/files');

clear();
console.log(
  chalk.yellow(
    figlet.textSync('cva', { horizontalLayout: 'full' })
  )
);



const run = async () => {
  try {
    console.log(chalk.blue('Copying starting files...'));
    await files.copyStartingFiles();
  } catch(err) {
    console.log(chalk.red('An error happened'));
  }
}

run();