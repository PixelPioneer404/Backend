const userModel = require('../models/user.model')
const express = require('express')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

const authRouter = express.Router()

authRouter.post('/register', async (req, res) => {
    const { name, email, password } = req.body

    const isEmailExists = await userModel.findOne({ email })

    if (isEmailExists) {
        res.status(400).json({
            'message': 'User already exists with this email'
        })
        return
    }

    const hash = crypto.createHash('md5').update(password).digest('hex')

    const user = await userModel.create({
        name, email, password: hash
    })

    const token = jwt.sign(
        {
            id: user._id,
            email: user.email
        },
        process.env.JWT_SECRET
    )

    res.cookie("jwt_token", token)

    res.status(201).json({
        "message": "User Registered Succesfully",
        user
    })
})

authRouter.post('/login', async (req, res) => {
    const { email, password } = req.body

    const user = await userModel.findOne({ email })

    if (!user) {
        res.status(404).json({
            message: "No User Found With This Email"
        })
        return
    }

    const isPassMatched = user.password === crypto.createHash('md5').update(password).digest('hex')

    if (!isPassMatched) {
        res.status(401).json({
            message: "Invalid Password"
        })
        return
    }

    const token = jwt.sign(
        {
            id: user._id,
            email: user.email
        },
        process.env.JWT_SECRET
    )

    res.cookie('jwt_token', token)

    res.status(201).json({
        message: "Login Succesfull"
    })
})

module.exports = authRouter