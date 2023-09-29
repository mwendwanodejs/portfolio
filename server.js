const express = require('express')
const fs = require('fs')

fs.readFile('./src/class.html', (err,data)=>{
    if (err){
        console.log(err)
    }else {
        console.log(data.toString())
    }
})