const fs = require('fs');

let pl = fs.readFileSync('./proxylist', 'utf8');
pl = JSON.parse(pl);
pl = pl.splice(0, 600)
fs.appendFileSync('./proxylist2', JSON.stringify(pl) ,'utf8')
console.log(pl)