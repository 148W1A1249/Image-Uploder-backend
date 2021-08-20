require('dotenv').config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    // cloud_name: process.env.CLOUDINARY_NAME,
    // api_key: process.env.CLOUDINARY_API_KEY,
    // api_secret: process.env.CLOUDINARY_API_SECRET,
    // secure:true,
    cloud_name: 'dhaagktav',
    api_key: 179926686585115,
    api_secret: 'hPc1L7Eqv6JjfHrUcoRbZO6iSw0',
    secure:true,
});

module.exports = { cloudinary };