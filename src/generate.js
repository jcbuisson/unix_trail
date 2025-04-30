import { mkdir, writeFile } from 'fs/promises'
import { existsSync } from 'fs'

export async function generate(code) {
   try {
      // console.log("Generate!!", code)
      const exists = existsSync('./.unix_trail')
      if (exists) {
         console.error("*** to generate a new set, you must use the 'reset' command first")
         return
      }
      console.log("Creating .unix_trail...")
      await mkdir('./.unix_trail')
      await writeFile('./.unix_trail/code', code, 'utf-8');
   } catch(err) {
      console.log(err)
   }
}