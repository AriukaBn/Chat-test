const express = require('express')
const router = express.Router()

router.get('/users', (req, res) => {
    const userData = [
        {
            "user": 'Ariuka',
            "pass": "Ariuka0708",
            "gmail": 'ariukats9@gmail.com'
        },{
            "user": 'test',
            "pass": "test",
            "gmail": 'ariukats9@gmail.com'
        }
    ]
    
    res.send(userData)
})
module.exports = router