#!/usr/bin/env node

import { Command } from 'commander';
const program = new Command();

program
  .name('greet')
  .description('A simple greeting CLI')
  .version('1.0.0');

program
  .option('-n, --name <string>', 'name to greet')
  .option('-t, --times <number>', 'number of times to greet', '1');

program.parse(process.argv);

const options = program.opts();
const name = options.name || 'World';
const times = parseInt(options.times);

for (let i = 0; i < times; i++) {
  console.log(`Hello, ${name}!`);
}
