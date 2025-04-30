#!/usr/bin/env node

import { Command } from 'commander';
const program = new Command();

program
  .name('unix_trail')
  .description('Fun activities to learn Unix commands')
  .version('1.0.0');

// Add a positional argument called "name"
program.command('generate')
   .description('Generate a new set of activities')
   .argument('<string>', 'string used to make activities unique')
   .action((string, options) => {
      console.log('string', string)
      console.log('options', options)
   })

program.parse()
