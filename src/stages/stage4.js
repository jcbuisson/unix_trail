import { readFile, writeFile } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

import { getCode, getCwd, getSecretFilePath } from '#root/src/data.js'


export async function setup() {
}


export async function displayInstructions() {
   const code = await getCode()
   console.log(`Copy the gist 'https://gist.githubusercontent.com/jcbuisson/f0cd0f29636618fa05d5faecdbd5a44c/raw/839867053883c37756b0a6a1c0c9aca5646669ea/httpserver.py' in a file named 'httpserver${code}.py' in the trail directory`)
}


export async function checkWork() {
   const cwd = await getCwd()
   const code = await getCode()
   // check for a file named `httpserver<code>.py` at the root
   const filePath = path.join(cwd, `httpserver${code}.py`)
   if (!existsSync(filePath)) {
      console.log(`*** the trail directory does not contain a httpserver${code}.py file.`)
      return false
   }
   // check that its content starts with 'from http.server import HTTPServer'
   const content = await readFile(filePath, 'utf-8')
   if (!content.startsWith('from http.server import HTTPServer')) {
      console.log(`*** the httpserver.py file does not have the right content`)
      return false
   }
   return true
}
