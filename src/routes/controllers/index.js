const router = require('express').Router();

router.get('/index',(req, res) => {
    res.sendFile('/index.html');
});

module.exports = router;