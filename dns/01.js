const dns = require('dns');

const ip = dns.lookup('xinliang.info', (err, address) => {
    if (err) throw err;
    console.log(address);
});
