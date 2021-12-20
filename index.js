const SerialPort = require('serialport')
const Delimiter = require('@serialport/parser-delimiter')
const port = new SerialPort('/dev/ttyACM0')
const open = require('open');
var ks = require('node-key-sender');

// e.g. https://app.partbolt.com/s/adjustStock/xxxxxxxx?t=r&q=2&c=test#
const firefoxParser = port.pipe(new Delimiter({ delimiter: '#' }))
firefoxParser.on('data', async (data) => {
    await open(data.toString(), {
        app: {
            name: open.apps.firefox
        }
    });
});

const keyboardParser = port.pipe(new Delimiter({ delimiter: '$' }))
keyboardParser.on('data', async (data) => {
    ks.sendText(data.toString());
    ks.sendKey("enter");
});

port.on('data', async (data) => {
    console.log(data.toString());
});