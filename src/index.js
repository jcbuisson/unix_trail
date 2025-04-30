#!/usr/bin/env node

import { Command } from 'commander';
const program = new Command();

program
  .name('greet')
  .description('A simple greeting CLI')
  .version('1.0.0');

// Add a positional argument called "name"
program
  .argument('<name>', 'name to greet')
  .option('-t, --times <number>', 'number of times to greet', '1')
  .action((name, options) => {
      const times = parseInt(options.times);
      for (let i = 0; i < times; i++) {
      console.log(`Hello, ${name}!`);
      }
   })

program.parse()
