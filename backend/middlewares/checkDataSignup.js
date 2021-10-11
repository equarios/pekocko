//middleware for checking and matching user input with requirements of email and password and used regex for validating email and password

module.exports = (req,res,next) => {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

    if(regexEmail.test(req.body.email)) {
        if(regexPassword.test(req.body.password)) {
            next();
        } else {
            res.status(400).json({ message: "please enter 8 to 16 digits including one upper case later, and "
            +"with any one special character: @$!%*?&."});
        }
    } else {
        res.status(400).json({ message: "must be valid email addresss"});
    }
}