import { readFile, writeFile } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

import { getHash, getCwd, getSecretFilePath } from '#root/src/data.js'


export async function setup() {
   // create a file path in the buildings directories with pseudo-random values taken from `hash`
   const secretFilePath = await getSecretFilePath()
   // create the secret file named `.{code`} with `hash` as content and place it in the building hierarchy at location `secretFilePath`
   const hash = await getHash()
   await writeFile(secretFilePath, hash, 'utf-8')
}


export async function displayInstructions() {
   console.log(`A hidden file (non-empty) has been placed inside one of the floor directories, among the room files.
🔍 Your task: Find this hidden file and move it to the main directory, renaming it to 'secret.txt' in the process.`)
}


export async function checkWork() {
   const cwd = await getCwd()
   // check if the hidden file is still at its original place
   const secretFilePath = await getSecretFilePath()
   if (existsSync(secretFilePath)) {
      console.log(`*** the hidden file is still at the same location - move it to the main directory`)
      return false
   }
   // check for a file named `secret.txt` at the root
   const secretTxtPath = path.join(cwd, 'secret.txt')
   if (!existsSync(secretTxtPath)) {
      console.log(`*** the main directory does not contain a secret.txt file.`)
      return false
   }
   // check that its content is `hash`
   const content = await readFile(secretTxtPath, 'utf-8')
   const hash = await getHash()
   if (content !== hash) {
      console.log(`*** the file secret.txt does not have the content of the hidden file`)
      return false
   }
   return true
}
