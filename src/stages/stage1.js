import { readFile } from 'fs/promises'
import { existsSync } from 'fs'


export async function setup() {
   console.log("setup stage 1!!")
}

export async function displayInstructions() {
   const hashExists = existsSync('./.unix_trail/hash')
   if (!hashExists) {
      console.log("*** there is a settings issue, use command 'reset' or 'initialize'")
      return
   }

   const hash = await readFile('./.unix_trail/hash', 'utf-8')
   const n = 3 + parseInt(hash.substring(0, 2), 16) % 3 // between 3 and 5
   const m = 3 + parseInt(hash.substring(2, 4), 16) % 3 // between 3 and 5
   const p = 3 + parseInt(hash.substring(4, 6), 16) % 3 // between 3 and 5

   console.log(`Create a hierarchy of ${n} directories named 'building1', 'building2', ..., 'building${n}'
In each directory, create ${m} subdirectories named 'floor1', ..., 'floor${m}'
In each subdirectory, create ${p} empty files named 'room1', ..., 'room${p}'`)
}


export async function checkWork() {
   const hash = await readFile('./.unix_trail/hash', 'utf-8')
   const n = 3 + parseInt(hash.substring(0, 2), 16) % 3 // between 3 and 5
   const m = 3 + parseInt(hash.substring(2, 4), 16) % 3 // between 3 and 5
   const p = 3 + parseInt(hash.substring(4, 6), 16) % 3 // between 3 and 5

   for (let i = 1; i <= n; i++) {
      const dirName = `building${i}`
      if (!existsSync(dirName)) {
         console.log(`The directory '${dirName}' is missing`)
         return false
      }
      for (let j = 1; j <= m; j++) {
         const subdirName = `${dirName}/floor${j}`
         if (!existsSync(subdirName)) {
            console.log(`The subdirectory '${subdirName}' is missing`)
            return false
         }
         for (let k = 1; k <= p; k++) {
            const fileName = `${subdirName}/room${k}`
            if (!existsSync(fileName)) {
               console.log(`The file '${fileName}' is missing`)
               return false
            }
         }
      }
   }
   return true
}
