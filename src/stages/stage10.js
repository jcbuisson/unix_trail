import { existsSync } from 'fs'
import { readFile } from 'fs/promises'
import path from 'path'

import { getCwd, getCode } from '#root/src/data.js'


export async function setup() {
}


export async function displayInstructions() {
   const code = await getCode()
   console.log(`Make a copy of ciqual.csv named ciqual_${code}.sql and keep only the columns labelled "alim_code", "alim_nom_fr", "Energie, Règlement UE N° 1169/2011 (kcal/100 g)"`)
}


export async function checkWork() {
   const code = await getCode()
   const cwd = await getCwd()
   const foodPath = path.join(cwd, `ciqual_${code}.sql`)
   if (!existsSync(foodPath)) {
      console.log(`*** there is no file named ciqual_${code}.sql in the trail directory`)
      return false
   }
   const content = await readFile(foodPath, 'utf-8')
   if (!content.startsWith("alim_code;alim_nom_fr;Energie, Règlement UE N° 1169/2011 (kcal/100 g)")) {
      console.log("*** the file ciqual_${code}.sql exists but does not have the right content")
      return false
   }
   return true
}
