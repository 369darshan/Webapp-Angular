var path = require("path");
module.exports={
    PORT:4201,
    hostname:'localhost',
	// mysqldb_config:{
	// 	host:'localhost',
	// 	user:'root',
	// 	password:'root',
	// 	database:'leadcapture'
	// },

	mysqldb_config:{
		host:'localhost',
		user:'root',
		password:'root',
		database:'test_schema'
	},

	mediaFolder:path.join(__dirname,'public/media'),
	// pdfFolder:path.join(__dirname,'public/resume/'),
	resumeFolder:path.join(__dirname,'public','resume'),
	sampleproductFolder:path.join(__dirname,'public','sample_product'),
	basePath:__dirname,
	// mediaFolder:path.join(__dirname,'public'),
	logsFolder:path.join(__dirname,'logs/'),
	// logsFolder:path.join(__dirname,'logs/'),
	// mediaPath:'/media',
	// default_404:'/default-image/404.jpg',
	// default_500:'/default-image/500.jpg',
	// imageDtl:{
	// 	folder:'/new-media',
	// 	folderimg:'/default-image/folder.png'
	// },
}