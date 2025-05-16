import { existsSync } from 'fs'

import { getBuildingCount, getFloorCount, getRoomCount } from '#root/src/data.js'


export async function setup() {
}

export async function displayInstructions() {
   const buildingCount = await getBuildingCount()
   const floorCount = await getFloorCount()
   const roomCount = await getRoomCount()
   console.log(`Create a hierarchy of ${buildingCount} directories named 'building1', 'building2', ..., 'building${buildingCount}'
In each directory, create ${floorCount} subdirectories named 'floor1', ..., 'floor${floorCount}'
In each subdirectory, create ${roomCount} empty files named 'room1', ..., 'room${roomCount}'`)
}


export async function checkWork() {
   const buildingCount = await getBuildingCount()
   const floorCount = await getFloorCount()
   const roomCount = await getRoomCount()
   for (let i = 1; i <= buildingCount; i++) {
      const dirName = `building${i}`
      if (!existsSync(dirName)) {
         console.log(`*** the directory '${dirName}' is missing`)
         return false
      }
      for (let j = 1; j <= floorCount; j++) {
         const subdirName = `${dirName}/floor${j}`
         if (!existsSync(subdirName)) {
            console.log(`*** the subdirectory '${subdirName}' is missing`)
            return false
         }
         for (let k = 1; k <= roomCount; k++) {
            const fileName = `${subdirName}/room${k}`
            if (!existsSync(fileName)) {
               console.log(`*** the file '${fileName}' is missing`)
               return false
            }
         }
      }
   }
   return true
}
