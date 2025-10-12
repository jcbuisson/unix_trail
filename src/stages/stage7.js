import { exec } from "child_process";


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

function isProcessDetached(pid) {
   return new Promise((resolve, reject) => {
      exec(`ps -p ${pid} -o tty=`, (error, stdout) => {
         if (error) {
            return resolve(false);
         }
         const tty = stdout.trim();
         const detached = tty.startsWith('?');
         resolve(detached);
      });
   });
}

export async function setup() {
}


export async function displayInstructions() {
   console.log('Run the command myhttpserver in the background')
}


export async function checkWork() {
   try {
      const pid = await getPid('myhttpserver');
      if (pid === '') {
         console.log('*** no process named myhttpserver is running - did you start it?')
         return false
      }
      if (!isProcessDetached(pid)) {
         console.log('*** a process named myhttpserver is running, but it is not detached from the terminal')
         return false
      }
   } catch (err) {
      console.log(err);
      return false
   }
   return true
}
