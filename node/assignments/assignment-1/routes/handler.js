import fs from 'fs';
import url from 'url';

export const getHome = (res) => {
    fs.readFile('view/index.html', (err, data) => {  
        if (err) {
            res.statusCode = 500;
            res.end('Error loading page');
        } else {
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
    });
};

export const getUrl = (req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const query = Object.fromEntries(parsedUrl.searchParams.entries());

    const response = { 
        status: 'success',
        name: query.name || 'Unknown',
        role: query.role || 'Unknown',
    };

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
};

export const error = (res) => {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 error-page not found');
};
