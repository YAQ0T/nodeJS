const massage = require("node:worker_threads");
let j = 0;

for (i = 0; i < 800000000; i++) {
  j++;
}
massage.parentPort.postMessage(j);
