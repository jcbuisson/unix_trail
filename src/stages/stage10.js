import { existsSync } from 'fs'
import { readFile } from 'fs/promises'
import path from 'path'

import { getCwd } from '#root/src/data.js'


export async function setup() {
}


export async function displayInstructions() {
   console.log('Make a copy of ciqual.csv named food.sql and keep only in food.sql the columns labelled "alim_code", "alim_nom_fr", "Energie, Règlement UE N° 1169/2011 (kcal/100 g)"')
}


export async function checkWork() {
   const cwd = await getCwd()
   const foodPath = path.join(cwd, 'food.sql')
   if (!existsSync(foodPath)) {
      console.log("*** there is no file named food.sql in the main directory")
      return false
   }
   const content = await readFile(foodPath, 'utf-8')
   if (!content.startsWith("24999")) {
      console.log("*** the file food.sql exists but does not have the right content")
      return false
   }
   return true
}
