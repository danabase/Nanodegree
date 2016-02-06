// // $("#main").append(["dana"]);
// /*
// This is empty on purpose! Your code to build the resume will go here.
//  */
//  // var awesomeThoughts = "I am Dana and I am AWESOME";

//  // var email = "dana.bfeld@udacity.com";
//  // var newEmail = email.replace("udacity","gmail");
//  // var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

//  var name = "Dana Bienenfeld";
//  var formattedName = HTMLheaderName.replace("%data%",name);
//  var role = "Web Developer";
//  // var formattedRole = HTMLheaderRole.replace("%data%",role);


//  var skills = ["HTML","CSS","JavaScript","Ruby","Rails","Node.js","Grunt"];
//  var bio = {
//  	"name":"Dana Bienefeld",
//  	"role":"Web Developer Warrior Monk",
//  	"contacts" : {
// 	 	"mobile": "987-654-3210",
// 	 	"email":"dana.bfeld@gmail.com",
// 	 	"github": "danabase",
// 	 	"twitter": "@_DanaBase_",
// 	 	"location": "San Francisco Bay Area"
//  		},
//  	"pictureURL": "images/profilePic.png",
//  	"welcomeMessage": "With Every Step, I chart out the starry path of my destiny",
//  	"skills": skills	
//  };

//  var work = {};
//  	work.position ="Database Engineer";
//  	work.employer = "Wells Fargo";
//  	work.yearsWorked = "2010-2011";
//  	work.city = "San Francisco";


//  var edu = {};
// 	 edu.schoolName = "AcademyX";
// 	 edu.yearsAttended = "2015";
// 	 edu.city = "San Francisco";

// var education {
// 	"schools": [
// 		{
// 			"name": "University of California, Santa Barbara",
// 			"location": "Santa Barbara",
// 			"degree": "Bachelors of Arts",
// 			"major": "Music Composition",
// 			"gradYear": 2007,
// 			"url": "http://www.ucsb.edu/"
// 		},
// 		{
// 			"name": "AcademyX",
// 			"location": "San Francisco",
// 			"major": "Rails Developer",
// 			"gradYear": 2015,
// 			"url": "http://www.academyx.com/"
// 		}
// 	],
// 	"onlineCourses": [
// 		{
// 			"title": "Front-End Web Developer Nanodegree",
// 			"school": "Udacity",
// 			"dates": "2015-2016",
// 			"url": "https://www.udacity.com"
// 		}
// 	]
// };	 

//  var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
//  var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
//  var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
//  var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
//  var formattedPicture = HTMLbioPic.replace("%data%",bio.pictureURL);
//  var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
//  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
//  var formattedSkills = HTMLskills.replace("%data%",bio.skills.join(" * "));
//  var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

//  var formattedEmployer = HTMLworkEmployer.replace("%data%",work.employer);
//  var formattedYearsWorked = HTMLworkDates.replace("%data%",work.yearsWorked);
//  var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.city);

//  var formattedSchoolYears = HTMLschoolDates.replace("%data%",edu.yearsAttended);
//  var formattedSchoolCity = HTMLschoolLocation.replace("%data%",edu.city); 
//  work["position"] = "Database Engineer";
//  // var formattedWorkPosition = 
//   $("#topContacts").prepend(formattedLocation);
//   $("#topContacts").prepend(formattedTwitter);
//   $("#topContacts").prepend(formattedGithub);
//   $("#topContacts").prepend(formattedEmail);
//   $("#topContacts").prepend(formattedMobile);
//   $("#header").prepend(formattedSkills);
//   $("#header").prepend(formattedRole);
//   $("#header").prepend(formattedName);
//   $("#header").append(formattedPicture);
//   $("#header").append(formattedWelcomeMessage);
//   $("#main").append(work["position"]);
//   $("#workExperience").append(formattedYearsWorked);
//   $("#workExperience").append(formattedWorkLocation);
//   $("#main").append(edu.schoolName);
//   $("#education").append(formattedSchoolYears);
//   $("#education").append(formattedSchoolCity);