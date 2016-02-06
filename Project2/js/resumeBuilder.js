var work = {
 "jobs": [
			{
				"employer": "Charles Schwab",
				"title": "Database Developer",
				"location": "San Francisco, CA",
				"datesWorked": 2011,
				"description": "Performed physical and logical data modeling," + 
				                "provide support, analysis, changes and " +
				                "occasional production support"
			},

			{
				"employer": "Wells Fargo",
				"title": "Database Engineer",
				"location": "San Francisco, CA",
				"datesWorked": "2010-2011",
				"description": "Worked on a Conversion project to reformat data from a \
				                newly acquired bank to comply with current business \
				                rules and display correctly in applications for \
				                business analysis"
			},

			{
				"employer": "Gracenote",
				"title": "Database Engineer",
				"location": "Emeryville, CA",
				"datesWorked": 2009,
				"description": "Created code as part of a project to properly receive \
				                classical works information from user submissions"
			},

			{
				"employer": "RealNetworks",
				"title": "Database Developer",
				"location": "San Francisco, CA",
				"datesWorked":2009,
				"description": "Worked on a project to internationalize the music " +
				               "ingestion/encoding/catalog process"
			}
	    ]
    };

work.display = function() {
	     for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer); 
			var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
			var formattedEmployerTitle = formattedWorkEmployer.concat(formattedWorkTitle);
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
			var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].datesWorked);
			var formattedWorkDesc = HTMLworkDescription.replace("%data%",work.jobs[job].description);
			$(".work-entry:last").append(formattedWorkLocation.concat(formattedWorkDates).concat(formattedWorkDesc));
		}

    }
work.display();
var project = {
	"projects": [
			{
				"title": "GetThere App" ,
				"dates": 2015,
				"description": "Display current and/or ongoing events in preferred categories (i.e. conventions, fitness) that are occurring in the city and state of the user's choice, and during a particular calendar date or between a set of dates.  "
				//"images":
			},	
						{
				"title": "Food-Shelter App" ,
				"dates": 2015,
				"description": "provide someone with locations of establishments that are currently open and provide a low-to-no-barrier entry in acquiring nourishment and/or shelter, based on either their current location or their district. These locations will immediately include the name, address, walking distance, approximate time left before closing and phone number"
				//"images": ,
			},
						{
				"title": "Google Map Vine Integration Project",
				"dates": 2015,
				"description": "Find a way to integrate Vine routes into Google Map calculations"//,
				//"images": ,
			}
		]
	};

project.display = function() {
		for (proj in project.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedPojectTitle = HTMLprojectTitle.replace(
				"%data%",project.projects[proj].title);
			$(".project-entry:last").append(formattedPojectTitle);
			var formattedProjectDates = HTMLprojectDates.replace(
				"%data%",project.projects[proj].dates);
			$(".project-entry:last").append(formattedProjectDates);
			var formattedProjectDesc = HTMLprojectDescription.replace(
				"%data%",project.projects[proj].description);
			$(".project-entry:last").append(formattedProjectDesc);

		}
		//HTMLprojectStart
	}

project.display();


var bio = {
	"name": "Dana Bienenfeld",
	"role": "Web Developer, INFJ",
	"welcomeMessage1": "With every step / I chart out the starry path / of my destiny",
	"contacts": {
					"mobile": "987-654-3210",
					"email": "dana.bfeld@gmail.com",
					"github": "danabase",
					"twitter": "@_DanaBase_",
					"location": "San Francisco"
				},	
	"skills": ["HTML","CSS","JavaScript","jQuery","JSON","Node","grunt",
	           "Ruby","Rails","Google Maps API", "Github"
			]
}

bio.display = function() {
     //  $("#topContacts").append(topContactsHTMLcontactGeneric);
$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));

$("#topContacts").prepend(HTMLlocation.replace("%data%",bio.contacts.location));

$("#topContacts").prepend(HTMLtwitter.replace("%data%",bio.contacts.twitter));
$("#topContacts").prepend(HTMLgithub.replace("%data%",bio.contacts.github));
$("#topContacts").prepend(HTMLemail.replace("%data%",bio.contacts.email));
$("#topContacts").prepend(HTMLmobile.replace("%data%",bio.contacts.mobile));

$(".flex-item:last").append(HTMLwelcomeMsgL1.replace("%data%",bio.welcomeMessage1));
$("#header").append(HTMLskillsStart);
var i = 0;
for (skill in bio.skills) {
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
	if ((Math.abs(i % 2) == 1)) {
		formattedSkill = formattedSkill.replace("white-text","green-text");
	}
	$("#skills").append(formattedSkill);
	i++;
}

}

bio.display();

// if (bio.skills.length > 0) {
// 	$("#header").append(HTMLskillsStart);
// 	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
// 	$("#skills").append(formattedSkill);
// 	formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
// 	$("#skills").append(formattedSkill);
// 		formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
// 	$("#skills").append(formattedSkill);
// 	formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
// 	$("#skills").append(formattedSkill);
// 		formattedSkill = HTMLskills.replace("%data%",bio.skills[4]);
// 	$("#skills").append(formattedSkill);
// 		formattedSkill = HTMLskills.replace("%data%",bio.skills[5]);
// 	$("#skills").append(formattedSkill);
// }





var education = {
	"schools": [
			{
				"name": "AcademyX",
				"location": "San Francisco, CA",
				"degree": "Rails Developer",
				"major": "Rails",
				"dates": 2015,
				"URL": "http://www.academyx.com/"
			},
			{
				"name": "College of Creative Studies, University of California, Santa Barbara",
				"location": "Santa Barbara, California",
				"degree": "Bachelors of Arts",
				"major": "Music Composition",
				"dates": 2007,
				"URL": "https://www.ccs.ucsb.edu/"
			}
	],

	"onlineCourse": [
			{
				"title": "Front-End Web Developer Nanodegree",
				"school": "Udacity",
				"dates": "2015 - 2016",
				"url": "https://www.udacity.com"
			}
	]

};

education.display = function(){
	for (ed in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[ed].name);
		$(".education-entry:last").append(formattedSchoolName);
		var formattedSchoolLoc = HTMLschoolLocation.replace("%data%",education.schools[ed].location);
		$(".education-entry:last").append(formattedSchoolLoc);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[ed].degree);
		$(".education-entry:last").append(formattedSchoolDegree);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[ed].major);
		$(".education-entry:last").append(formattedSchoolMajor);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[ed].dates);
		$(".education-entry:last").append(formattedSchoolDates);
 	}
        $("#education").append(HTMLonlineClasses);
 	for (online in education.onlineCourse) {
 		$("#education").append(HTMLonlineStart);
 		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourse[online].title);
 		$(".online-entry:last").append(formattedOnlineTitle);
 		var formattedOnlineSchool =HTMLonlineSchool.replace("%data%",education.onlineCourse[online].school);
        $(".online-entry:last").append(formattedOnlineSchool);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourse[online].dates);
        $(".online-entry:last").append(formattedOnlineDates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourse[online].url);
        $(".online-entry:last").append(formattedOnlineURL);
 	}
}

education.display();


 







function inName() {
	var name = window.name;
	name = name.trim().split(" ");
	 name[1] = name[1].toUpperCase();
	 name[0] = name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
      
	return name[0]+' '+name[1];
}

var name = $("#name").text();
$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);


