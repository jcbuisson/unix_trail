import { readFile } from 'fs/promises'
import { existsSync } from 'fs'

export async function instructions() {
   try {
      const exists = existsSync('./.unix_trail/current')
      if (!exists) {
         console.log("*** there is a settings issue, use command 'reset' or 'initialize'")
         return
      }
      const current = await readFile('./.unix_trail/current', 'utf-8')
      const { displayInstructions } = await import(`./stages/stage${current}.js`)
      console.log()
      console.log("Instructions for stage", current)
      console.log("-----------------------")
      await displayInstructions()
      console.log()
   } catch(err) {
      if (err.code === 'ERR_MODULE_NOT_FOUND') {
         console.log("You have completed all stages")
      } else {
         console.lof(err)
      }
   }
}