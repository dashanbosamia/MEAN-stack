module.exports = function (router) {
    console.log("23")
    const controller = require('./book')

router.post('/add',controller.add)
router.get('/get',controller.get)
router.delete('/delete/:id',controller.delete)
router.get('/getid/:id',controller.get_id)
router.put('/updateid/:id',controller.update)

    return router;
}