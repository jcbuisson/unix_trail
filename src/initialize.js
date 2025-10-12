import { mkdir, writeFile } from 'fs/promises'
import { existsSync } from 'fs'
import { createHash } from 'crypto'


export async function initialize(code) {
   try {
      const exists = existsSync('./.unix_trail')
      if (exists) {
         console.error("*** to generate a new set, you must use the 'reset' command first")
         return
      }
      const hash = createHash('sha256').update(code).digest('hex')
      
      await mkdir('./.unix_trail')
      // await writeFile('./.unix_trail/cwd', process.cwd(), 'utf-8')
      await writeFile('./.unix_trail/code', code, 'utf-8')
      await writeFile('./.unix_trail/hash', hash, 'utf-8')
      await writeFile('./.unix_trail/current', '1', 'utf-8')
      
      console.log("Initialization complete!")
   } catch(err) {
      console.log(err)
   }
}