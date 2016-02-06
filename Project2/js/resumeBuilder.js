var work_obj = {
    'jobs': [{
            'employer': 'Charles Schwab',
            'title': 'Database Developer',
            'location': 'San Francisco, CA',
            'datesWorked': 2011,
            'description': 'Performed physical and logical data modeling,' +
                'provide support, analysis, changes and'  +
                'occasional production support'
        },

        {
            'employer':'Wells Fargo',
            'title': "Database Engineer",
            'location': 'San Francisco, CA',
            'datesWorked': '2010-2011',
            'description': 'Worked on a Conversion project to reformat data from a ' +
                'newly acquired bank to comply with current business' +
                'rules and display correctly in applications for' +
                'business analysis'
        },

        {
            'employer': 'Gracenote',
            'title': 'Database Engineer',
            'location': 'Emeryville, CA',
            'datesWorked': 2009,
            'description': 'Created code as part of a project to properly receive' +
                'classical works information from user submissions'
        },

        {
            'employer': 'RealNetworks',
            'title': 'Database Developer',
            'location': 'San Francisco, CA',
            'datesWorked': 2009,
            'description': 'Worked on a project to internationalize the music ' +
                'ingestion/encoding/catalog process'
        }
    ]
};

work_obj.display = function() {

    var job;

    for (job in work_obj.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work_obj.jobs[job].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work_obj.jobs[job].title);
        var formattedEmployerTitle = formattedWorkEmployer.concat(formattedWorkTitle);
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work_obj.jobs[job].location);
        var formattedWorkDates = HTMLworkDates.replace("%data%", work_obj.jobs[job].datesWorked);
        var formattedWorkDesc = HTMLworkDescription.replace("%data%", work_obj.jobs[job].description);
        $(".work-entry:last").append(formattedWorkLocation.concat(formattedWorkDates).concat(formattedWorkDesc));
    }

};
work_obj.display();

var project_obj = {
    'projects': [{
        'title': 'GetThere App',
        'dates': 2015,
        'description': 'Display current and/or ongoing events in preferred categories '+
        				'(i.e. conventions, fitness) that are occurring in the city and '+
        				'state of the user\'s choice, and during a particular calendar date '+
        				'or between a set of dates.',
            'images': 'images/map.png'
    }, {
        'title': 'Food-Shelter App',
        'dates': 2015,
        'description': 'provide someone with locations of establishments that are currently '+
        			  'open and provide a low-to-no-barrier entry in acquiring nourishment '+
        			   'and/or shelter, based on either their current location or their '+
        			   'district. These locations will immediately include the name, address, '+
        			    'walking distance, approximate time left before closing and phone number',
            'images': 'images/foodShelterApp.png'
    }, {
        'title': 'Google Map Vine Integration Project',
        'dates': 2015,
        'description': 'Find a way to integrate Vine routes into Google Map calculations',
            'images': 'images/vine.png'
    }]
};

project_obj.display = function() {
    var proj;

    for (proj in project_obj.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedPojectTitle = HTMLprojectTitle.replace(
            "%data%", project_obj.projects[proj].title);
        $(".project-entry:last").append(formattedPojectTitle);
                var formattedProjectImage = HTMLprojectImage.replace(
        	"%data%",project_obj.projects[proj].images);
        $(".project-entry:last").prepend(formattedProjectImage);
        
        var formattedProjectDates = HTMLprojectDates.replace(
            "%data%", project_obj.projects[proj].dates);
        $(".project-entry:last").append(formattedProjectDates);
        var formattedProjectDesc = HTMLprojectDescription.replace(
            "%data%", project_obj.projects[proj].description);
        $(".project-entry:last").append(formattedProjectDesc);

    }
};

project_obj.display();


var bio_obj = {
    'name': 'Dana Bienenfeld',
    'role': 'Web Developer, INFJ',
    'welcomeMessage': 'With every step / I chart out the starry path / of my destiny',
    'contacts': {
        'mobile': '987-654-3210',
        'email': 'example@gmail.com',
        'github': 'danabase',
        'twitter': '@_DanaBase_',
        'location': 'SF'
    },
    'skills': ['HTML', 'CSS', 'JavaScript', 'jQuery', 'JSON', 'Node', 'grunt',
        'Ruby', 'Rails', 'Google Maps API', 'Github'
    ],
    'biopic': 'images/korra.png'
};

bio_obj.display = function() {
    //  $("#topContacts").append(topContactsHTMLcontactGeneric);
    var formattedBioName = HTMLheaderName.replace("%data%", bio_obj.name)
    var formattedBioRole = HTMLheaderRole.replace("%data%", bio_obj.role)
    var formattedBiolocation = HTMLlocation.replace("%data%", bio_obj.contacts.location)
    var formattedBioTwitter = HTMLtwitter.replace("%data%", bio_obj.contacts.twitter)
    var formattedBioGithub = HTMLgithub.replace("%data%", bio_obj.contacts.github)
    var formattedBioEmail = HTMLemail.replace("%data%", bio_obj.contacts.email)
    var formattedBioMobile = HTMLmobile.replace("%data%", bio_obj.contacts.mobile)
    var formattedBioMessage =  HTMLwelcomeMsg.replace("%data%", bio_obj.welcomeMessage)
    var formattedBioPic = HTMLbioPic.replace("%data%",bio_obj.biopic);
    $("#header").prepend(formattedBioRole);
    $("#header").prepend(formattedBioName);
    $("#topContacts").prepend(formattedBiolocation);

    $("#topContacts").prepend(formattedBioTwitter);
    $("#topContacts").prepend(formattedBioGithub);
    $("#topContacts").prepend(formattedBioEmail);
    $("#topContacts").prepend(formattedBioMobile);

    $(".flex-item:last").append(formattedBioMessage);
    $("#header").append(HTMLskillsStart);
    $("#header").append(formattedBioPic);

    var i = 0;
    var skill;
    for (skill in bio_obj.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio_obj.skills[skill]);
        if ((Math.abs(i % 2) == 1)) {
            formattedSkill = formattedSkill.replace("white-text", "green-text");
        }
        $("#skills").append(formattedSkill);
        i++;
    }

};

bio_obj.display();

var edu_obj = {
    'schools': [{
        'name': 'AcademyX',
        'location': 'San Francisco, CA',
        'degree': 'Rails Developer',
        'major': 'Rails',
        'dates': '2015',
        'url': 'http://www.academyx.com/'
    }, {
        'name': 'College of Creative Studies, University of California, Santa Barbara',
        'location': 'Santa Barbara, California',
        'degree': 'Bachelors of Arts',
        'major': 'Music Composition',
        'dates': '2002 - 2007',
        'url': 'https://www.ccs.ucsb.edu/'
    }],

    'onlineCourse': [{
       'title': 'Front-End Web Developer Nanodegree',
       'school': 'Udacity',
       'dates': '2015 - 2016',
       'url': 'https://www.udacity.com'
    }]

};

edu_obj.display = function() {
    var ed;
    for (ed in edu_obj.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", edu_obj.schools[ed].name);
        $(".education-entry:last").append(formattedSchoolName);
        var formattedSchoolLoc = HTMLschoolLocation.replace("%data%", edu_obj.schools[ed].location);
        $(".education-entry:last").append(formattedSchoolLoc);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", edu_obj.schools[ed].degree);
        $(".education-entry:last").append(formattedSchoolDegree);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", edu_obj.schools[ed].major);
        $(".education-entry:last").append(formattedSchoolMajor);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", edu_obj.schools[ed].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedSchoolURL = HTMLschoolURL.replace("%data%", edu_obj.schools[ed].url);
        $(".education-entry:last").append(formattedSchoolURL);
    }
    $("#education").append(HTMLonlineClasses);
    var online;
    for (online in edu_obj.onlineCourse) {
        $("#education").append(HTMLonlineStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", edu_obj.onlineCourse[online].title);
        $(".online-entry:last").append(formattedOnlineTitle);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", edu_obj.onlineCourse[online].school);
        $(".online-entry:last").append(formattedOnlineSchool);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", edu_obj.onlineCourse[online].dates);
        $(".online-entry:last").append(formattedOnlineDates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", edu_obj.onlineCourse[online].url);
        $(".online-entry:last").append(formattedOnlineURL);
    }
};

edu_obj.display();
$("#mapDiv").append(googleMap);

// var len = bio_obj.contacts.length;
// for (var i = 0; i < len; i++) {
// 	$("#footerContacts").append(bio_obj.contacts[i]);
// }
var formattedFooterMobile = HTMLfooterMobile.replace("%data%", bio_obj.contacts.mobile);
var formattedFooterEmail = HTMLfooterEmail.replace("%data%", bio_obj.contacts.email);
var formattedFooterGithub = HTMLfooterGithub.replace("%data%", bio_obj.contacts.github);
var formattedFooterTwitter = HTMLfooterTwitter.replace("%data%", bio_obj.contacts.twitter);
var formattedFooterLocation = HTMLfooterLocation.replace("%data%", bio_obj.contacts.location);
$("#footerContacts").append(formattedFooterMobile);
$("#footerContacts").append(formattedFooterEmail);
$("#footerContacts").append(formattedFooterGithub);
$("#footerContacts").append(formattedFooterTwitter);
$("#footerContacts").append(formattedFooterLocation);