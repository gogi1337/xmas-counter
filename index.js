const express = require('express')
const app = express()
const exec = require('child_process').exec;

function getCommandLine() {
    switch (process.platform) {
        case 'darwin': return 'open';
        case 'win32': return 'start';
        case 'win64': return 'start';
        default: return 'xdg-open';
    }
}

app.get('/', (req, res) => res.sendFile(__dirname + '/assets/index.html'))

app.get('/assets/:name', (req, res) => { res.sendFile(__dirname + `/assets/${req.params.name}`) })

app.use(function (err, req, res, next) {
    console.error(err)
    if (err.name == 'Error' && err.message.split(':')[0] == 'ENOENT') res.status(404).send('Error 404: Page not found!')
    res.status(500).send('Error 500: Somthing internally went wrong!')
})
app.get('/*', (req, res) => res.status(404).send('Error 404: Page not found!'))
app.listen(3000, () => {
    console.log(`Server listening at port 3000!`)
    exec(getCommandLine() + ' ' + 'http://localhost:3000');
})