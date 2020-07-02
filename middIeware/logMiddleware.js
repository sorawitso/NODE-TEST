module.exports.intercepter = function (req, res, next) {
    console.log(`
       URL : ${req.url}
       Method : ${req.method}`);
    next();
}