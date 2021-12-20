const SerialPort = require('serialport')
const Delimiter = require('@serialport/parser-delimiter')
const port = new SerialPort('/dev/ttyACM0')
const open = require('open');
var ks = require('node-key-sender');

// e.g. https://app.partbolt.com/s/adjustStock/xxxxxxxx?t=r&q=2&c=test#
const firefoxParser = port.pipe(new Delimiter({ delimiter: '#' }))
firefoxParser.on('data', async (data) => {
    if (!data.toString().includes("$")) {
        await open(data.toString(), {
            app: {
                name: open.apps.firefox
            }
        });
    } else {
        await ks.sendText(data.toString());
        await ks.sendKey("enter");
    }
});

// uncomment to debug
//port.on('data', async (data) => {
//    console.log(data.toString());
//});