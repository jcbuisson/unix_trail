import { readFile, writeFile } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

import { getHash, getCwd, getSecretFilePath } from '#root/src/data.js'


export async function setup() {
}


export async function displayInstructions() {
   console.log(`Créer un script Python appelé 'xxx.py' qui fait yyy et lui donner le droit en exécution pour tous`)
}


export async function checkWork() {
   console.log(`Checking for stage 7...`)
   return false
}
