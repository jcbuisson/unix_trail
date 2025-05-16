import { getCurrent, setCurrent } from '#root/src/data.js'


export async function check() {
   try {
      const current = await getCurrent()
      const { checkWork } = await import(`./stages/stage${current}.js`)
      const isOK = await checkWork()
      if (isOK) {
         console.log(`Stage ${current}: COMPLETE!`)
         const nextCurrent = parseInt(current) + 1
         await setCurrent(nextCurrent)
         // if exists, load next stage and run its setup() function
         const { setup } = await import(`./stages/stage${nextCurrent}.js`) // will throw ERR_MODULE_NOT_FOUND if there is no next stage
         console.log("You are at stage", nextCurrent)
         await setup()
      }

   } catch(err) {
      if (err.code === 'ERR_MODULE_NOT_FOUND') {
         console.log("You have completed all stages")
      } else {
      console.log("*** there is a settings issue, use command 'reset' or 'initialize'")
      }
   }
}