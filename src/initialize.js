import { mkdir, writeFile } from 'fs/promises'
import { existsSync } from 'fs'

export async function initialize(code) {
   try {
      // console.log("Generate!!", code)
      const exists = existsSync('./.unix_trail')
      if (exists) {
         console.error("*** to generate a new set, you must use the 'reset' command first")
         return
      }
      await mkdir('./.unix_trail')
      await writeFile('./.unix_trail/code', code, 'utf-8');
      await writeFile('./.unix_trail/current', '1', 'utf-8');
      console.log("Initialization complete!")
   } catch(err) {
      console.log(err)
   }
}