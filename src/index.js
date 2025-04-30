#!/usr/bin/env node

import { Command } from 'commander'
const program = new Command()

program
   .name('unix_trail')
   .description("Fun activities to learn Unix commands")
   .version('1.0.0')

program.command('generate')
   .description("Generate a new set of activities")
   .argument('<string>', "string used to make activities unique")
   .action((string, options) => {
      console.log('string', string)
      console.log('options', options)
   })

program.command('guide')
   .description("Display a guide for the next step")
   .action((string, options) => {
      console.log('options', options)
   })

program.command('check')
   .description("Check current step")
   .action((string, options) => {
      console.log('options', options)
   })

program.parse()
