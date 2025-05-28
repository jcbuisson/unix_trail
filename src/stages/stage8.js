import { readFile, writeFile } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

import { getHash, getCwd, getSecretFilePath } from '#root/src/data.js'


export async function setup() {
}


export async function displayInstructions() {
   console.log(`Créer un lien symbolique de /usr/local/bin/xxx vers 'xxx.py'`)
}


export async function checkWork() {
   console.log(`Checking for stage 8...`)
   return false
}
