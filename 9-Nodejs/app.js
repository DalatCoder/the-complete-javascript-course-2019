const fs = require('fs');
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const laptopData = JSON.parse(json);

const server = http.createServer((req, res) => {
    const pathName = url.parse(req.url, true).pathname;
    const id = url.parse(req.url, true).query.id;

    // Products overview
    if (pathName === '/products' || pathName === '/') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });

        fs.readFile(`${__dirname}/templates/overview-template.html`, 'utf-8', (err, data) => {

            let overViewOutput = data;

            fs.readFile(`${__dirname}/templates/card-template.html`, 'utf-8', (err, data) => {
                const cards = laptopData.map(el => replaceTemplate(data, el)).join('');
                overViewOutput = overViewOutput.replace('{%CARDS%}', cards);
                res.end(overViewOutput);
            });

        });

    }

    // laptop overview
    else if (pathName === '/laptop' && id < laptopData.length) {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });

        // fs.readFile(`${__dirname}/templates/laptop-template.html`, 'utf-8', (err, data) => {
        //     const laptop = laptopData[id];
        //     const output = replaceTemplate(data, laptop);
        //     res.end(output);
        // });

        const readLaptopTemplate = () => {
            return new Promise((resolve, reject) => {
                fs.readFile(`${__dirname}/templates/laptop-template.html`, 'utf-8', (err, data) => {
                    resolve(data);
                });
            });
        };

        async function readDataAW() {
            const data = await readLaptopTemplate();
            const laptop = laptopData[id];
            const output = replaceTemplate(data, laptop);
            res.end(output);
        }
        readDataAW();
        // readData
        //     .then(data => {
        //         const laptop = laptopData[id];
        //         const output = replaceTemplate(data, laptop);
        //         res.end(output);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
    }

    // images
    else if ((/\.(png|jpg|jpeg|gif)$/i).test(pathName)) {
        res.writeHead(200, {
            'Content-type': 'image/jpg'
        });

        fs.readFile(`${__dirname}/data/img/${pathName}`, (err, data) => {
            res.end(data);
        });
    }

    // page not found
    else {
        res.writeHead(404, {
            'Content-type': 'text/html'
        });
        res.end('Page not found.');
    }
});

server.listen(1337, '127.0.0.1', () => {
    console.log('Listening for requests now.');
});

function replaceTemplate(originalHtml, laptop) {
    let output = originalHtml.replace(/{%PRODUCTNAME%}/g, laptop.productName);
    output = output.replace(/{%IMAGE%}/g, laptop.image);
    output = output.replace(/{%CPU%}/g, laptop.cpu);
    output = output.replace(/{%PRICE%}/g, laptop.price);
    output = output.replace(/{%SCREEN%}/g, laptop.screen);
    output = output.replace(/{%RAM%}/g, laptop.ram);
    output = output.replace(/{%DESCRIPTION%}/g, laptop.description);
    output = output.replace(/{%STORAGE%}/g, laptop.storage);
    output = output.replace(/{%ID%}/g, laptop.id);
    return output;
}
