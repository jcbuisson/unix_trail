#!/usr/bin/env node
import { Command } from 'commander'
import { generate } from './generate.js'

const program = new Command()

program
   .name('unix_trail')
   .description("Fun activities to learn Unix commands")
   .version('1.0.0')

program.command('generate')
   .description("Generate a new set of activities")
   .argument('<string>', "string used to make activities unique")
   .action((string) => {
      generate(string)
   })

program.command('guide')
   .description("Display a guide for the next step")
   .action(() => {
      console.log("Guide!")
   })

program.command('check')
   .description("Check current step")
   .action(() => {
      console.log("Check!")
   })

program.parse()
