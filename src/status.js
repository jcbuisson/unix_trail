import { getCurrentStageIndex, getCode } from '#root/src/data.js'

export async function status() {
   try {
      const current = await getCurrentStageIndex()
      const code = await getCode()
      // check for the existence of a stage of `current` index
      await import(`./stages/stage${current}.js`)
      console.log(`You are at stage ${current} (code: ${code})`)

   } catch(err) {
      if (err.code === 'ERR_MODULE_NOT_FOUND') {
         console.log("You have completed all stages")
      } else {
         console.log("*** there is a settings issue, use command 'reset' or 'initialize'")
      }
   }
}