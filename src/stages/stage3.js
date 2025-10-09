import { stat } from 'fs/promises'


export async function setup() {
}


export async function displayInstructions() {
   console.log(`The file 'secret.txt' is precious! Change its permissions so that only you can read and write it`)
}


export async function checkWork() {
   const filePath = `./secret.txt`
   const stats = await stat(filePath)
   const mode = stats.mode & 0o777 // Extract permission bits
   const octalMode = mode.toString(8) // ex: "644"
   if (octalMode !== '600') {
      console.log(`*** other users can read or write secret.txt`)
      return false
   }
   return true
}
