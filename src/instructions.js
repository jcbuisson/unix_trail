import { getCurrentStageIndex } from '#root/src/data.js'

export async function instructions() {
   try {
      const current = await getCurrentStageIndex()
      const { displayInstructions } = await import(`./stages/stage${current}.js`)
      console.log("You are at stage", current)
      console.log()
      await displayInstructions()
      console.log()
   } catch(err) {
      if (err.code === 'ERR_MODULE_NOT_FOUND') {
         console.log("You have completed all stages")
      } else {
         console.log("*** there is a settings issue, use command 'reset' or 'initialize'")
      }
   }
}