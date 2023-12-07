const bodyParser = require("body-parser")
const express = require ("express")
// const bodyParser = require("body-parser")
const app =express()
const https = require("https")

app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.sendFile(__dirname +"/index.html")
})
app.post("/",function(req,res){
  
    const query= req.body.cityinput
    const apikey  ="b2d186eccc523901b18b24e1a4c792ff"
    const unit = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&units=" + unit + "&appid="+apikey
    https.get(url,function(response){
        response.on("data",function(data){
        const weatherdata = JSON.parse(data)
     
        const temp = weatherdata.main.temp;
        const temp2 = weatherdata.weather[0].description
        res.write("<h1>  The temprature in " + query + " is "  + temp + " degree celcius.</h1>" )
        res.write("<h3> The weather is currently" + temp2 + "</h3>" )
       

    })

    })
    
})
    
    


app.get("/", function(req, res){
    res.sendFile(__dirname+"/style.css");
    });





   













app.listen(3000,function(){
console.log("your server is running at port 3000")
})