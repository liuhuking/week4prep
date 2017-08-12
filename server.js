var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var cors = require('cors');

var fs = require('fs');

// var movie = {
//     title: "People Places Things",
//     releaseDate: "14/08/2015",
//     duration: "85 minutes",
//     genre: "Comedy",
//     synopsis: "Will Henry is a newly single graphic novelist balancing parenting his young twin daughters "+
//         "and a classroom full of students while exploring and navigating the rich complexities of new love and "+
//         "letting go of the woman who left him."
// };

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

router.use(function(req, res, next){
    console.log("Something is happening.");
    next();
});

router.get('/movie', function(req, res){
    var filename = "movie-list.txt";
    var lineReader = require('readline').createInterface({
        input: require('fs').createReadStream(filename)
	});
	
	var lineNo = 0;
    //var movies = [];
    var splited;

	lineReader.on('line', function (line) {
	  //console.log('Record No.: ' + lineNo, line);
	  
	  splited = line.split('~');
	  
	  //movies.push(splited);
	  
	  lineNo++;
	});
	
	lineReader.on('close', function () {
		//for (index in movies) {
			console.log("Title: " + splited[0] + "\nRelease Date: " + splited[1] + "\nDuration: " + splited[2] + "\nGenre: " + splited[3] + "\nSynopsis: " + splited[4]);
        //}
        res.json({
            title: splited[0],
            "release date": splited[1],
            duration: splited[2],
            genre: splited[3],
            synopsis: splited[4]

            // title: movie.title,
            // "release date": movie.releaseDate,
            // duration: movie.duration,
            // genre: movie.genre,
            // synopsis: movie.synopsis
        });
    });
    
    
});

router.post('/movie', function(req, res){
    var filename = "movie-list.txt";
	var stream = fs.createWriteStream(filename);
	stream.once('open', function(fd) {
		//for(var i = 0; i < 3; i++){
			stream.write(req.body["title"] + "~" + req.body["release date"] + "~" + req.body["duration"] + "~" + req.body["genre"] + "~" + req.body["synopsis"] + "\r\n");
		//}
	  stream.end();
    });
});

app.use('/api', router);

app.listen(3000, function(){
    console.log('Server is running');
});