import axios from 'axios'
import { getCode } from '#root/src/data.js'


export async function setup() {
}


export async function displayInstructions() {
   const code = await getCode()
   console.log(`Run httpserver${code}.py`)
}


export async function checkWork() {
   try {
      const response = await axios.get('http://localhost:8000/')
      if (response.status != 200 || response.data !== "Hello, world!") {
         console.log('*** the http server returned an incorrect response')
         return false
      }
   } catch(err) {
      if (err.code === 'ECONNREFUSED') {
         console.log('*** connection to http server is impossible - have you started it?')
      } else {
         console.log('*** erreur inconnue lors de la requête au serveur http')
      }
      return false
   }
   return true
}
