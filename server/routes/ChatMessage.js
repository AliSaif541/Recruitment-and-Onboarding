const router = require('express').Router();
const { ChatMessageSchema, ChatMessage } = require('../models/ChatMessage')

router.get('/', async (req, res) => {
    try {
        const messages = await ChatMessage.find();
        res.json(messages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    } 
});

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        let user = req.body.userName;
        message = req.body.message;
        console.log("user: ", user);
 
        if (!user || !message) {
            return res
                .status(400)
                .json({ error: "User and message are required" });
        }
 
        const chatMessage = new ChatMessage({
            user,
            message,
        });
 
        await chatMessage.save();
 
        res.status(201).json(chatMessage);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
