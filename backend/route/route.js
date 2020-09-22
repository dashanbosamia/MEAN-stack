module.exports = function (express) {
    const router =express.Router()
    console.log("11")
    require('../controller/bookroute')(router);  //child route call controller
    
    return router;
}