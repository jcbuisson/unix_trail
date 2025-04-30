import { mkdir } from 'fs/promises'

export async function generate(string) {
   try {
      console.log("Generate!!", string)
      await mkdir('./.unix_trail')
   } catch(err) {
      console.log(err)
   }
}