import { exec } from "child_process";
import fs from "fs";

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

function isDetached(pid) {
   try {
      const tty = fs.readlinkSync(`/proc/${pid}/fd/0`);
      // If it points to /dev/null or similar, no terminal is attached
      return !tty.startsWith("/dev/pts/") && !tty.startsWith("/dev/tty");
   } catch (err) {
      return false; // process might not exist or no permissions
   }
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
      if (!isDetached(pid)) {
         console.log('*** a process named myhttpserver is running, but it is not detached from the terminal')
         return false
      }
   } catch (err) {
      console.log(err);
      return false
   }
   return true
}
