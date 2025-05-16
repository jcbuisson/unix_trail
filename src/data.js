import { readFile, writeFile } from 'fs/promises'
// import path from 'path'

// `hash` is used to get deterministic random values

export const getCwd = async () => await readFile('./.unix_trail/cwd', 'utf-8')
export const getCode = async () => await readFile('./.unix_trail/code', 'utf-8')
export const getHash = async () => await readFile('./.unix_trail/hash', 'utf-8')

export const getCurrent = async () => await readFile('./.unix_trail/current', 'utf-8')
export const setCurrent = async (value) => await writeFile('./.unix_trail/current', value+'', 'utf-8')

export const getBuildingCount = async () => {
   const hash = await getHash()
   return 3 + parseInt(hash.substring(0, 2), 16) % 3 // between 3 and 5
}
export const getFloorCount = async () => {
   const hash = await getHash()
   return 3 + parseInt(hash.substring(2, 4), 16) % 3 // between 3 and 5
}
export const getRoomCount = async () => {
   const hash = await getHash()
   return 3 + parseInt(hash.substring(4, 6), 16) % 3 // between 3 and 5
}

export const getSecretFilePath = async () => {
   const cwd = await getCwd()
   const code = await getCode()
   const hash = await getHash()
   const buildingCount = await getBuildingCount()
   const floorCount = await getFloorCount()
   const buildingIndex = parseInt(hash.substring(6, 7), 16) % buildingCount + 1
   const floorIndex = parseInt(hash.substring(7, 8), 16) % floorCount + 1
   return `${cwd}/building${buildingIndex}/floor${floorIndex}/.${code}`
}
