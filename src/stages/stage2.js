import { readFile } from 'fs/promises'
import { existsSync } from 'fs'


export async function setup() {
   console.log("setup stage 2!!")
}

export async function displayInstructions() {
   console.log("Instructions stage 2")
}


export async function checkWork() {
   return true
}
