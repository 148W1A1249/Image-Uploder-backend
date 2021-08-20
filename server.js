const express = require('express');
const app = express();
var cors = require('cors');
const { cloudinary } = require('./utils/cloudinary');

app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({linit: '50mb', extended:true}));

app.get('/api/images',async (req,res)=>{
    const { resources } = await cloudinary.search
        .expression('folder:Free_Cloud')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute();

    const publicIds = resources.map((file) => [file.url,file.format]);
    res.send(publicIds);
});

app.post('/api/upload',async (req,res)=>{
    try {
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr,{
            resource_type: "auto",
            upload_preset: 'Free_Cloud',
        });
        res.json({msg: "Success khasim"})
    } catch (error) {
        console.error(error)
        res.status(500).json({err: "Somthing went Wrong khasim"})
    }
})
const port = process.env.PORT || 8000;
app.listen(port,()=>{console.log(`:::Server running On Port: ${port}`)});