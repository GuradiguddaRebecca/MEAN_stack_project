const express = require('express');


const app = express();



app.use('/api/posts',(req,res,next)=>{
    const posts = [
        {
        id:'fadf122513', 
        title:'first server-side post', 
        content:'from server'
        },
        {
            id:'kwe213451', 
            title:'second server-side post', 
            content:'from server second'
        },
    ];
    res.status(200).json({
        message:"posts fetched",
        posts:posts
    })
});

module.exports = app;