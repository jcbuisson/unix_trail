import { exec } from "child_process";

function isProcessRunning(processName) {
  return new Promise((resolve, reject) => {
    exec(`ps aux | grep ${processName} | grep -v grep`, (error, stdout) => {
      if (error) {
        return resolve(false);
      }
      resolve(stdout.trim().length > 0);
    });
  });
}


export async function setup() {
}


export async function displayInstructions() {
   console.log('Kill the process created by the command myhttpserver')
}


export async function checkWork() {
   const isRunning = await isProcessRunning('myhttpserver')
   if (isRunning) {
      console.log("*** the process created by the command myhttpserver is still running")
      return false
   }
   return false
}
