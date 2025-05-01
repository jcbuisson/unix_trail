import { readFile, writeFile } from 'fs/promises'
import { existsSync } from 'fs'

export async function check() {
   try {
      const currentExists = existsSync('./.unix_trail/current')
      if (!currentExists) {
         console.log("*** there is a settings issue, use command 'reset' or 'initialize'")
         return
      }
      const current = await readFile('./.unix_trail/current', 'utf-8')
      const { checkWork } = await import(`./stages/stage${current}.js`)
      const isOK = await checkWork()
      if (isOK) {
         console.log(`Stage ${current}: COMPLETE!`)
         const nextCurrent = parseInt(current) + 1
         await writeFile('./.unix_trail/current', '' + nextCurrent, 'utf-8')
      }

   } catch(err) {
      // console.log(err)
      if (err.code === 'ERR_MODULE_NOT_FOUND') {
         console.log("You have completed all stages")
      }
   }
}