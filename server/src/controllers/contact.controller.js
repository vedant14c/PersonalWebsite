const messageModel = require("../models/message.model");

const createMessage = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "Name, email and message are required"
            });
        }

        const messageId = await messageModel.createMessage({
            name,
            email,
            subject,
            message
        });

        res.status(201).json({
            success: true,
            message: "Message sent successfully",
            data: {
                id: messageId
            }
        });
    } catch (error) {
        console.error("Error creating message:", error);

        res.status(500).json({
            success: false,
            message: "Failed to send message"
        });
    }
};

module.exports = {
    createMessage
};