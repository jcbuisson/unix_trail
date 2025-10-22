import { existsSync } from 'fs'
import { readFile } from 'fs/promises'
import path from 'path'

import { getCwd } from '#root/src/data.js'


export async function setup() {
}


export async function displayInstructions() {
   console.log('Download the file situated at https://ftp.jcbuisson.dev/misc/ciqual2020_FR_2020_07_07.csv in the main directory into a file named ciqual.csv')
}


export async function checkWork() {
   const cwd = await getCwd()
   const ciqualPath = path.join(cwd, 'ciqual.csv')
   if (!existsSync(ciqualPath)) {
      console.log("*** there is no file named ciqual.csv in the main directory")
      return false
   }
   const content = await readFile(ciqualPath, 'utf-8')
   if (!content.startsWith("alim_grp_code;alim_ssgrp_code;alim_ssssgrp_code;alim_grp_nom_fr")) {
      console.log("*** the file ciqual.csv exists but does not have the right content")
      return false
   }
   return true
}
