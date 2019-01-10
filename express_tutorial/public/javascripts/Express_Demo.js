const Express = require('express');
const App = Express();
const Joi = require('joi');
const Path = require('path');
App.use(Express.json());
console.log(__dirname);

App.use('/cssFiles',Express.static('../SampleFiles'));
App.get('/filesFolder', function (req, res) {
    res.sendFile('home.html', { root: Path.join('../SampleFiles/') })
})
const courses = [
    { id: 1, name: "Commerce" },
    { id: 2, name: "Science" },
    { id: 3, name: "Medical" }
];


// App.get('/', (req, res) => {
//     res.send('Hello world');
// });

// App.get('/api/courses', (req, res) => {
//     res.send(courses);
// });
// App.get('/api/courses/:id', (req, res) => {
//     const course = courses.find(c => c.id === parseInt((req.params.id)));
//     if (!course)
//         res.status(404).send('The course not found');

//     res.send(course);
// });
// App.post('/api/courses', (req, res) => {

//     const schema = {
//         name: Joi.string().min(3).required()
//     };
//     const result = Joi.validate(req.body, schema);
//     if (result.error) {
//         res.status(400).send(result.error.details[0].message);
//         return;
//     }
//     const course = {
//         id: courses.length + 1,
//         name: req.body.name
//     }
//     courses.push(course);
//     res.send(course);
// });

const Port = process.env.PORT || 3000;
App.listen(Port, () => console.log(`Listening on port ${Port}`));