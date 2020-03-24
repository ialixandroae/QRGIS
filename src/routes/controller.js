const router = require('express').Router();

router.use('/api/v1', require('./controllers/index'));
router.use('/api/v1', require('./controllers/generate'));
router.use('/api/v1', require('./controllers/data'));

module.exports = router;