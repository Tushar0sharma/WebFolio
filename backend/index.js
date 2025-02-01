// const express = require('express');
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();
const contactroute = require("./routes/contact");
const chatroute = require("./routes/chat");

const app = express();
const PORT = process.env.PORT || 3000;

// Allow requests only from the frontend URL
const corsOptions = {
    origin: process.env.FRONTEND_URL || "*",  // Replace with your frontend URL in .env
    methods: "GET,POST",
    allowedHeaders: "Content-Type",
};
app.use(cors(corsOptions));
app.use(express.json());

app.get('/',(req,res,next)=>{
    res.send({
        active:true
    })
})

// Contact route
app.use('/contact', contactroute);

// Chat API route
app.use('/chat', chatroute);

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
