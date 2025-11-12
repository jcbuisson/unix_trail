import { readFile, readlink } from 'fs/promises'
import { existsSync } from 'fs'
import axios from 'axios'

import { getCode } from '#root/src/data.js'


export async function setup() {
}


export async function displayInstructions() {
   const code = await getCode()
   console.log(`Create a symbolic link name 'myhttpserver' in /usr/local/bin to httpserver${code}.py`)
}


export async function checkWork() {
   const code = await getCode()
   if (!existsSync('/usr/local/bin/myhttpserver')) {
      console.log('*** cannot access /usr/local/bin/myhttpserver')
      return false
   }
   const targetFile = await readlink('/usr/local/bin/myhttpserver')
   if (!targetFile.endsWith(`httpserver${code}.py`)) {
      console.log(`*** /usr/local/bin/myhttpserver does not point to the right file`)
      return false
   }
   return true
}
