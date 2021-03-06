const express = require('express');
const expressHandlebars = require('express-handlebars'); //view 처리용
const app = express();
const port = process.env.PORT || 3000;
const fortunes = require('./lib/fortune');
const handlers = require('./lib/handlers');

// const fortunes = ['아는 것이 힘이다', '모르는게 약이다'];
//엔진 설정
// app.engine(
//     'handlebars',
//     expressHandlebars({
//         defaultLayout: 'main',
//     }),
// );
app.engine(
    '.hbs',
    expressHandlebars({
        extname: '.hbs', //hadlebars -> hbs
        defaultLayout: 'main', //맨처음 레이아웃
        helpers: {
            section: function (name, options) {
                if (!this._sections) this._sections = {};
                this._sections[name] = options.fn(this);
                return null;
            },
        },
    }),
);
// app.set('view engine', 'handlebars');
app.set('view engine', '.hbs');

app.use(express.static(__dirname + '/public'));

// app.get('/', (req, res) => {
//     res.render('home');
// });
app.get('/', handlers.home);

// app.get('/about', (req, res) => {
//     // const randomfortune = fortunes[Math.floor(Math.random() * fortunes.length)];
//     // res.render('about', { fortune: randomfortune });
//     res.render('about', { fortune: fortunes.getFortune() });
// });

app.get('/section-test', handlers.sectionTest);
app.get('/about', handlers.about);

// app.use((req, res) => {
//     res.status(404);
//     res.render('404');
// });

app.use(handlers.notFound);

// app.use((err, req, res, next) => {
//     console.log(err.message);
//     res.status(500);
//     res.render('500');
// });

app.use(handlers.serverError);

app.listen(port, () => {
    console.log(`포트 ${port}`);
});
