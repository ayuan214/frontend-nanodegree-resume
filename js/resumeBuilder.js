/*$("#main").append("Alvin Yuan");
var name = "Alvin Yuan";
var role = "Front-End Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
*/


var bio = {
	"name" : "Alvin Yuan",
	"role" : "Front-End Developer",
	"contacts" : {
		"mobile" : "925-818-7858",
		"email" : "alvinyuan@gmail.com",
		"github" : "ayuan214",
		"twitter" : "@ayuan214",
		"location" : "Torrance, CA"
	},

	"welcomeMessage" : "lorem ipsum dolor sit amet etc etc etc",
	"skills" : [
		"awesomeness", "delivering things", "cryogenic sleep", "saving the universe"
	],
	"bioPic": "images/fry.jpg"
}


var education = {
	"schools" : {
		"name" : "University of California, Davis",
		"location" : "Davis, CA,",
		"degree" : "Bachelor of Science",
		"majors" : ["Mechanical Engineering", "Aerospace Science Engineering"],
		"dates" : 2012,
		"url" : "https://google.com"
	},

	"onlineCourses" : {
		"title": "Front-End Nanodegree",
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "www.udacity.com"
	}
}

var work = {
	"jobs" : [
		{
			"employer" : "Honda R&D Americas Inc",
			"title" : "Large Project Lead, UX Engineer",
			"location" : "Torrance, CA",
			"dates" : "Nov 2012 - Current",
			"description" : "Developed new HMI systems to put into future Honda and Acura vehicles"
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
			"title" : "Sample Project 1",
			"dates" : "2014",
			"description" : "Created portfolio",
			"images" : [
				"images/197x148.gif", "images/197x148.gif"
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
	$("#header").append(formattedContact);
	$("#header").append(formattedPic);
	$("#header").append(formattedMessage);
	


	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for (i in bio.skills){
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	} 
/*
	$("#header").append(formattedMobile);
	$("#header").append(formattedEmail);
	$("#header").append(formattedGithub);
	$("#header").append(formattedTwitter);
	$("#header").append(formattedLocation);
	*/

	/*
	for (project in projects.projects) {
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
	} */
}
bio.display(); 



function displayWork() {
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

displayWork();

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

$("#mapDiv").append(googleMap);