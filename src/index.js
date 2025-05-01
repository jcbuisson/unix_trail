#!/usr/bin/env node
import { Command } from 'commander'
import { initialize } from './initialize.js'
import { reset } from './reset.js'
import { instructions } from './instructions.js'
import { check } from './check.js'
import { status } from './status.js'

const program = new Command()

program
   .name('unix_trail')
   .description("Guided activities to learn Unix commands")
   .version('1.0.0')

program.command('initialize')
   .description("Initialize a new set of activities")
   .argument('<string>', "string used to make activities unique")
   .action((string) => {
      initialize(string)
   })

program.command('reset')
   .description("Reset activities")
   .action(() => {
      reset()
   })

program.command('instructions')
   .description("Display instructions for the next step")
   .action(() => {
      instructions()
   })

program.command('check')
   .description("Check current step")
   .action(() => {
      check()
   })

program.command('check')
   .description("Display progress status")
   .action(() => {
      status()
   })

program.parse()
