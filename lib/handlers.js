const fortune = require('./fortune');

exports.home = (req, res) => {
    res.render('home');
};
exports.about = (req, res) => {
    res.render('about', { fortune: fortune.getFortune() });
    // error res.render('about', 123);
};

exports.notFound = (req, res) => {
    res.render('404');
};

exports.serverError = (err, req, res, next) => {
    console.log(err);
    res.render('500');
};

exports.sectionTest = (req, res) => {
    res.render('section-test');
};
// function double(number) {
//     return number * 2;
// }

// module.exports = double;
