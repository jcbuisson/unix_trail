import { readFile, writeFile } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

import { getHash, getCwd, getSecretFilePath } from '#root/src/data.js'


export async function setup() {
}


export async function displayInstructions() {
   console.log(`Remove all files of size > 1G`)
}


export async function checkWork() {
   console.log(`Checking for stage 6...`)
   return false
}
