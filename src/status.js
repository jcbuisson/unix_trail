import { readFile } from 'fs/promises'
import { existsSync } from 'fs'

export async function status() {
   try {
      const currentExists = existsSync('./.unix_trail/current')
      if (!currentExists) {
         console.log("*** there is a settings issue, use command 'reset' or 'initialize'")
         return
      }
      const current = await readFile('./.unix_trail/current', 'utf-8')
      console.log(`You are at stage ${current}`)
   } catch(err) {
      console.log(err)
   }
}