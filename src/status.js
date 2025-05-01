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
         await import(`./stages/stage${current}.js`)
         console.log(`You are at stage ${current}`)
      } else {
         console.log("Activities are not initialized, use command 'initialize'")
      }
   } catch(err) {
      if (err.code === 'ERR_MODULE_NOT_FOUND') {
         console.log("You have completed all stages")
      } else {
         console.lof(err)
      }
   }
}