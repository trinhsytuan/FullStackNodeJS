const express = require('express')
const router = express.Router();

router.get('/daica', (req,res) => {
    res.render('sample.ejs')
})
module.exports = router;