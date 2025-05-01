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
      console.log("Instructions for step", current)
      console.log("-----------------------")
      const { displayInstructions } = await import(`./step${current}.js`)
      displayInstructions()
   } catch(err) {
      console.log(err)
   }
}