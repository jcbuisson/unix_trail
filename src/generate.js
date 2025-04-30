import { mkdir, exists } from 'fs/promises'

export async function generate(string) {
   try {
      console.log("Generate!!", string)
      const x = await exists('./.unix_trailll')
      console.log('x', x)
      // await mkdir('./.unix_trail', { recursive: true }) // no error if directory already exists
   } catch(err) {
      console.log(err)
   }
}