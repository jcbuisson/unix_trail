import { mkdir, stat } from 'fs/promises'

export async function generate(string) {
   try {
      console.log("Generate!!", string)
      const stats = await stat('./.unix_trail')
      console.log('stats', stats)
      // await mkdir('./.unix_trail', { recursive: true }) // no error if directory already exists
   } catch(err) {
      console.log(err)
   }
}