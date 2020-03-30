const express = require("express");
const app = express();
const shuffle = require('shuffle-array');
app.set("view engine", "ejs");
app.use(express.static("public")); //access images, css, js


//routes
app.get("/", function(req, res){
    let q3Choices = ["Maine", "Nevada", "Rhode Island", "Florida"];
    q3Choices = shuffle(q3Choices); //shuffled array here.
    res.render("index", {"q3Choices":q3Choices});
    
} );


app.get("/gradeQuiz", function(req,res){
    
    //console.log(req.query.q1);
    let score = 0;
    let f1, f2, f3, f4, f5, f6, f7, f8;
    f1 = f2 = f3 = f4 = f5 = f6 = f7 = f8 = "Incorrect.";
    
    if (req.query.q1.toLowerCase() == "sacramento") {
        score += 12.5;
        f1 = "Correct!";
    }
    if (req.query.q2 == "mo") {
        score += 12.5;
        f2 = "Correct!";
    }
    if (req.query.q3a=="false" && req.query.q3b=="false"
     && req.query.q3c=="true" && req.query.q3d=="true" ) {
        score += 12.5;
        f3 = "Correct!";
    }
    if (req.query.q4 == "Rhode Island") {
        score += 12.5;
        f4 = "Correct!";
    }
   if (req.query.q5 == "seal2") {
        score += 12.5;
        f5 = "Correct!";
    }
	if(req.query.q6 == 1990) {
    	score += 12.5;
    	f6 = "Correct!";
    }
    //Question 7
    if(req.query.q7 == "berners-lee" || req.query.q7 == "berners lee"){
    	score += 12.5;
    	f7 = "Correct!";
    }
    //Question 8
    if(req.query.q8 == "#ff0000"){
    	score += 12.5;
    	f8 = "Correct!";
    }
    res.send( {"score": score, "feedback":[{"fback":f1}, {"fback":f2}, {"fback":f3}, {"fback":f4}, {"fback":f5}, {"fback":f6}, {"fback":f7}, {"fback":f8}]});
    
    
});


//running server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
})