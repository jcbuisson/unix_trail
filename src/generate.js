import { mkdir, exists } from 'fs/promises'

export async function generate(string) {
   try {
      console.log("Generate!!", string)
      const stats = await exists('./.unix_trailll')
      console.log('exists', exists)
      // await mkdir('./.unix_trail', { recursive: true }) // no error if directory already exists
   } catch(err) {
      console.log(err)
   }
}