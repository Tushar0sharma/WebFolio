const express=require("express")
const dotenv=require("dotenv")
const axios = require('axios');
const cors = require('cors');
dotenv.config();

const router=express.Router();


router.post("/",async(req,res)=>{
    const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Please fill all the fields.' });
  }

  try {
    console.log("Sending request to Web3Forms...");
    const response = await axios.post("https://api.web3forms.com/submit", {
        access_key: process.env.WEB3FORMS_API_KEY, // API key stored in .env
        name,
        email,
        subject,
        message,
      });
      
      // console.log(response.data);  // Log response to check for errors
      

    if (response.data.success) {
      return res.json({ success: true });
    } else {
      return res.json({ success: false, error: response.data.error });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Something went wrong.' });
  }
})

module.exports=router
