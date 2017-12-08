var express = require('express');
var router = express.Router();

router.get("/", (req, res, next) => {
    res.send({ msg: "entro en GET" })

});

router.get('/:id', (req, res, next) => {
    res.send({ msg: "entro en GET", id: req.params.id })

});

router.post('/', (req, res, next) => {
    res.send({ msg: "entro en POST" })

});

router.put('/:ll', (req, res, next) => {
    res.send({ msg: "entro en PUT", ll: req.params.ll })
});

router.delete('/:id', (req, res, next) => {
    res.send({ msg: "entro en DELETE", id: req.params.id })
});

module.exports = router;