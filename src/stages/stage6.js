import { readFile, stat } from 'fs/promises'
import path from 'path'

import { getCwd, getCode } from '#root/src/data.js'


export async function setup() {
}


export async function displayInstructions() {
   const code = await getCode()
   console.log(`Add to httpserver${code}.py the python3 "shebang" and give it the execution permission for everyone`)
}


export async function checkWork() {
   const code = await getCode()
   const cwd = await getCwd()
   const filePath = path.join(cwd, `httpserver${code}.py`)
   // check that it starts with '#!/usr/bin/env python3'
   const content = await readFile(filePath, 'utf-8')
   if (!content.startsWith('#!/usr/bin/env python3')) {
      console.log(`*** httpserver${code}.py  does not start with the python3 shebang`)
      return false
   }
   // check that it has the execution permission for everyone
   const stats = await stat(filePath)
   const mode = stats.mode & 0o111 // Extract execution bits
   const octalMode = mode.toString(8) // ex: "110"
   if (octalMode !== '111') {
      console.log(`*** httpserver${code}.py does not have the execution permission for everyone`)
      return false
   }
   return true
}
