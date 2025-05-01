import { readFile } from 'fs/promises'
import { existsSync } from 'fs'

export async function status() {
   try {
      const dirExists = existsSync('./.unix_trail')
      if (dirExists) {
         const currentExists = existsSync('./.unix_trail/current')
         if (!currentExists) {
            console.log("*** there is a settings issue, use command 'reset' or 'initialize'")
            return
         }
         const current = await readFile('./.unix_trail/current', 'utf-8')
         console.log(`./stages/stage${current}.js`)
         const currentStageExists = existsSync(`./stages/stage${current}.js`)
         if (currentStageExists) {
            console.log(`You are at stage ${current}`)
         } else {
            console.log("You have completed all stages")
         }
      } else {
         console.log("Activities are not initialized, use command 'initialize'")
      }
   } catch(err) {
      console.log(err)
   }
}