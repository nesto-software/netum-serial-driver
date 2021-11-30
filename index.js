const SerialPort = require('serialport')
const Delimiter = require('@serialport/parser-delimiter')
const port = new SerialPort('/dev/ttyACM0')
const open = require('open');

// e.g. https://app.partbolt.com/s/adjustStock/xxxxxxxx?t=r&q=2&c=test#
const parser = port.pipe(new Delimiter({ delimiter: '#' }))
parser.on('data', async (data) => {
    await open(data.toString(), {
        app: {
            name: open.apps.firefox
        }
    });
});