const fs = require('fs');
const router = require('express').Router();
const uniqid = require('uniqid');
const qrcode = require('qrcode');
const run = require('../../helpers/run');

router.post('/generate', async (req, res) => {
    const id = uniqid();
    await run.createApp(req.body.name, id, req.body.location, req.body.basemap, req.body.color);
    const _code = await qrcode.toDataURL(`http://localhost:3000/${id}`);
    const newApp = {
        id: id,
        name: req.body.name,
        location: req.body.location,
        basemap: req.body.basemap,
        color: req.body.color,
        qr: _code.toString()
    };
    run.saveData(newApp);
    res.json({
        status: 200,
        message: 'Application created.',
        id: id,
        qr: _code
    });
});

module.exports = router;