var bio = {
	"name" : "Alvin Yuan",
	"role" : "Front-End Developer",
	"contacts" : {
		"mobile" : "310-270-0336",
		"email" : "alvinyuan@gmail.com",
		"github" : "www.github.com/ayuan214",
		"twitter" : "@ayuan214",
		"location" : "Torrance, CA"
	},

	"welcomeMessage" : "Check out my projects below!",
	"skills" : [
		"jQuery", "AngularJS", "HTML/CSS", "PHP", "mySQL"
	],
	"bioPic": "images/profile.jpg"
}


var education = {
	"schools" : [
		{
			"name" : "University of California, Davis",
			"location" : "Davis, CA",
			"degree" : "Bachelor of Science",
			"majors" : ["Mechanical Engineering", "Aerospace Science Engineering"],
			"dates" : 2012,
			"url" : "https://google.com"
		}
		
	],

	"onlineCourses" : [
		{
			"title": "Front-End Nanodegree",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "www.udacity.com"
		}
	]
}

var work = {
	"jobs" : [
		{
			"employer" : "Honda R&D Americas Inc",
			"title" : "Large Project Lead, UX Engineer",
			"location" : "Torrance, CA",
			"dates" : "Nov 2012 - Current",
			"description" : "Project lead for new UX for Acura and Honda infotainment units"
		},
		{
			"employer" : "Newnex Technologies Corp",
			"title" : "Mechanical Engineer Intern",
			"location" : "Santa Clara, CA", 
			"dates" : "Aug 2012 - Nov 2012",
			"description" : "Developed and troubleshooted USB 3.0 and Firewire products"	
		}	
	]
}

var projects = {
	"projects" : [
		{
			"title" : "Project-1: Portfolio",
			"dates" : "2015",
			"description" : "Developed a mobile responsive portfolio using Boostrap",
			"images" : [
				"images/project1_pic1.png", "images/project1_pic2.png"
			]		
		}	

	]
}

bio.display = function() {
	$("#projects").append(HTMLprojectStart);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	var formattedContact = formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation;
	$("#topContacts").append(formattedContact);
	$("#header").append(formattedPic);
	$("#header").append(formattedMessage);
	$("#footerContacts").append(formattedContact);
	


	/*if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for (i in bio.skills){
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	} */

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function (skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $('#skills').append(formattedSkill);
        });
    }

}
bio.display(); 

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		var formattedEmployerTitleDatesDescription = formattedEmployer + formattedTitle + formattedDates + formattedDescription;

		$(".work-entry:last").append(formattedEmployerTitleDatesDescription);

	}
}

work.display();

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage); 				
			}
		}
	}
}

projects.display(); 

education.display = function() {
	for (uni in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[uni].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[uni].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[uni].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[uni].location);

		$(".education-entry:last").append(formattedName);
		$(".education-entry:last").append(formattedDates)
		$(".education-entry:last").append(formattedDegree);
		$(".education-entry:last").append(formattedLocation);

		for (major in education.schools[uni].majors) {
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[uni].majors[major]);
			$(".education-entry:last").append(formattedMajor);
		}

	}

	for (uni in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[uni].title);
		$(".education-entry:last").append(formattedTitle);

		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[uni].school);
		$(".education-entry:last").append(formattedSchool);

		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[uni].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[uni].url);
		$(".education-entry:last").append(formattedURL);
	}
	
}

education.display(); 

$("#mapDiv").append(googleMap);