const express = require('express');
const axios = require('axios');  // ✅ Use axios instead of fetch
const router = express.Router();
require('dotenv').config();

const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${process.env.API_KEY}`;


router.post("/", async (req, res) => {
    if (!process.env.API_KEY) {
        return res.status(500).json({ error: "API Key is missing. Please check your .env file." });
    }

    try {

        const response = await axios.post(API_URL, req.body, {
            headers: { "Content-Type": "application/json" }
        });

        // ✅ Handle API response correctly
        const botResponse = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't process that.";

        res.json({
            success: true,
            response: botResponse
        });

    } catch (error) {
        console.error("Chat API Error:", error.response?.data || error.message);

        res.status(500).json({
            error: error.response?.data?.error?.message || "API request failed"
        });
    }
});

module.exports = router;
