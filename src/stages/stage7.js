import { readFile, writeFile } from 'fs/promises'
import { existsSync } from 'fs'
import axios from 'axios'


export async function setup() {
}


export async function displayInstructions() {
   console.log(`Create a symbolic link name 'myhttpserver' in /usr/local/bin to myhttpd.py`)
}


export async function checkWork() {
   if (!existsSync('/usr/local/bin/myhttpserver')) {
      console.log('*** cannot access /usr/local/bin/myhttpserver')
      return false
   }
   const content = await readFile('/usr/local/bin/myhttpserver', 'utf-8')
   if (!content.startsWith('#!/usr/bin/env python3')) {
      console.log(`*** /usr/local/bin/myhttpserver does not point to the right file`)
      return false
   }
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
