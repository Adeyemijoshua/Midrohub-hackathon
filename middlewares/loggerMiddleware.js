
const LoggerMiddleware = (req,res,next) =>{
    let logMessage = (`Logged  ${req.url}  ${req.method} -- ${new Date()}`)
    console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`)
    // fs.appendFile(path.join(__dirname, 'logs.txt'), logMessage, (err) => {
    //     if (err) {
    //         console.error('Error writing to log file:', err);
    //     }
    // });
    next();
}

module.exports = LoggerMiddleware