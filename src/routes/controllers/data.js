const router = require('express').Router();
const run = require('../../helpers/run');

router.get('/data', async (req, res) => {
    const dataBuffer = await run.getData();
    const data = Buffer.from(dataBuffer).toString();
    res.json({
        status: 200,
        data: JSON.parse(data)
    });
});

module.exports = router;