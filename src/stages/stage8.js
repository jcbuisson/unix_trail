import { exec } from "child_process";
import axios from 'axios'


function getPid(processName) {
   return new Promise((resolve, reject) => {
      exec(`ps aux | grep ${processName} | grep -v grep | awk '{print $2}'`, (error, stdout) => {
         if (error) {
            return resolve(false);
         }
         resolve(stdout.trim());
      });
   });
}

export async function setup() {
}


export async function displayInstructions() {
   console.log('Run the command myhttpserver')
}


export async function checkWork() {
   try {
      const pid = await getPid('myhttpserver');
      if (pid === '') {
         console.log('*** no process named myhttpserver is running - did you start it?')
         return false
      }
   } catch (err) {
      console.log(err);
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
