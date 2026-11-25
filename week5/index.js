const express = require('express'); 
const fs= require('fs') 
const app = express(); 
// Built-in middleware for parsing form data and JSON 
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 
// Home route 
app.get('/', (req, res) => { 
res.send('Hello! This is my first Express application.'); 
}); 
app.get('/users/:userId/books/:bookId', function (req, res) { 
res.send(req.params); 
});
// Start server 
const PORT = 5000; 
app.get('/GetStudents', (req, res) => { 
    fs.readFile('./Student.json', 'utf8', (err, data) => { 
 
        if (err) { 
            return res.status(500).json({ 
                status: false, 
                statusCode: 500, 
                message: 'Error reading Students.json' 
            }); 
        } 
 
        res.status(200).json({ 
            status: true, 
            statusCode: 200, 
            requestedAt: new Date().toISOString(), 
            requestUrl: req.originalUrl, 
            requestMethod: req.method, 
            studentData: JSON.parse(data) 
        }); 
    }); 
});
app.listen(PORT, () => { 
console.log(`Server is running on port ${PORT}`);
}); 
