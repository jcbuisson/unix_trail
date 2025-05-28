import { readFile, stat } from 'fs/promises'
import path from 'path'

import { getHash, getCwd, getSecretFilePath } from '#root/src/data.js'


export async function setup() {
}


export async function displayInstructions() {
   console.log(`Add to httpserver.py the python3 "shebang" and give it the execution permission for everyone`)
}


export async function checkWork() {
   const cwd = await getCwd()
   const filePath = path.join(cwd, 'httpserver.py')
   // check that it starts with '#!/usr/bin/env python3'
   const content = await readFile(filePath, 'utf-8')
   if (!content.startsWith('#!/usr/bin/env python3')) {
      console.log(`*** httpserver.py  does not start with the python3 shebang`)
      return false
   }
   // check that it has the execution permission for everyone
   const stats = await stat(filePath)
   const mode = stats.mode & 0o111 // Extract execution bits
   const octalMode = mode.toString(8) // ex: "110"
   if (octalMode !== '111') {
      console.log(`*** httpserver.py does not have the execution permission for everyone`)
      return false
   }
   return true
}
