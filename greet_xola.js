import chalk from 'chalk';
import greet from './greet.js';

const styleMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styleMessage);

import figlet from 'figlet';
const figlMsg = greet('Xola');
figlet(figlMsg, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});