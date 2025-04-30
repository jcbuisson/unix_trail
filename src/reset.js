import { rm } from 'fs/promises'
import { existsSync } from 'fs'

export async function reset() {
   try {
      const exists = existsSync('./.unix_trail')
      if (exists) {
         await rm('./.unix_trail', { recursive: true })
      }
      console.log("Reset complete")
   } catch(err) {
      console.log(err)
   }
}