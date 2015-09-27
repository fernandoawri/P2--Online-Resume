function inName(name_srt){
	var nameArray = name_srt.trim().split(' ');
	nameArray[0] = nameArray[0].charAt(0).toUpperCase() + nameArray[0].slice(1).toLowerCase();
	nameArray[1] = nameArray[1].toUpperCase();

	return nameArray[0] + ' ' + nameArray[1];
}

var bio = {
	'name' : 'Fernando Benavides',
	'role' : 'Software Engineer / Web Developer / Java Developer',
	'contacts' : {
		'mobile' : '717-364-5525',
		'email' : 'fernandoawri@gmail.com',
		'github' : 'fernandoawri',
		'twitter' : '@fernandoawri',
		'location' : 'Harrisburg, PA, USA'
	},
	'welcomeMessage' : 'Hi everyone I am a Software engineer, working with Java and J2EE mostly Back-End. And now I am doing this AWESOME Front-End Nanodegree with Udacity.',
	'skills' : [
		'JavaScript', 'Java', 'HTML', 'CSS', 'DB2', 'SQL', 'J2EE', 'XML', 'HIBERNATE', 'JPA', 'JSP', 'jQuery', 'WAS', 'PHP'
	],
	'bioPic' : 'images/pic-profile.jpg'
};

var education = {
	'schools' : [
		{
			'name' : 'Develop',
			'location' : 'Guadalajara, Jalisco, Mexico',
			'degree' : 'Java SE 6 Programmer Certified Professional',
			'majors' : ['Java Programmer'],
			'dates' : 2013,
			'url' : 'http://develop.com.mx'
		},
		{
			'name' : 'Instituto Tecnológico Superior de Zapopan',
			'location' : 'Guadalajara, Jalisco, Mexico',
			'degree' : 'Computer Systems Engineering',
			'majors' : ['Software Development'],
			'dates' : 2012,
			'url' : 'http://www.itszapopan.edu.mx'
		},
		{
			'name' : 'CBTis #38',
			'location' : 'Guadalajara, Jalisco, Mexico',
			'degree' : 'Electronics Technician',
			'majors' : ['Circuits Development'],
			'dates' : 2007,
			'url' : 'http://cbtis38.edu.mx'
		}

	],
	'onlineCourses' : [
		{
			'title' : 'Front-End Developer',
			'school' : 'Udacity',
			'date' : '2015',
			'url' : ['udacity.com']
		}
	]
};

var work = {
	'jobs' : [
		{
			'employer' : 'Deloitte by Technosoft Corporation',
			'title' : 'Computer System Analyst',
			'location' : 'Harrisburg, PA, USA',
			'dates' : 'August 2014 - CURRENT',
			'description' : 'As Java Developer into Deloitte company, I am working for the state of Illinois in IES & ABE applications.'
		},
		{
			'employer' : 'IBM',
			'title' : 'Java Application Developer',
			'location' : 'Guadalajara, Jalisco, Mexico',
			'dates' : 'August 2013 - July 2014',
			'description' : 'As Java developer: Attendance tickets from customers to solve application problems or new requirements. PRIMA generates reports by XML files with data from DB2 tables. Testing of DB2 through SQuirreL SQL Client and test in a local server WAS(WebSphere Applicatio Server).'
		},
		{
			'employer' : 'Gastronómica La Buena Mesa',
			'title' : 'IT, Web Developer',
			'location' : 'Guadalajara, Jalisco, Mexico',
			'dates' : 'August 2012 - July 2013',
			'description' : 'Web Developer, Support and maintenance of DEMINUS application. Development of website (CGI, HTML, CSS, PHP), Also technical support to computer equipment and helpdesk, Webmaster-Website (Hosting and Domain configurations).'
		},
		{
			'employer' : 'Auto Diagnosis Ochoa',
			'title' : 'IT, Web Developer',
			'location' : 'Guadalajara, Jalisco, Mexico',
			'dates' : 'August 2011 - July 2013',
			'description' : 'Web Developer, Development of SCO (Students Center Online) application to control customers and courses with CGI, HTML, CSS, PHP.Also technical support to computer equipment and helpdesk, hire and configuration of Hosting, e-mail accounts and domain. Webmaster-Website (Hosting and Domain configurations).'
		}
	]
}

var projects = {
	'projects' : [
		{
			'title' : 'ABE & IES',
			'dates' : '2015',
			'description' : 'Into The Obama Care Illinois State program, Is a web site where the people can request help from the state (ABE), IES application is for workers of the state to approve or denie programs for the people. I am working in back-end and Front-end side in IES and ABE applications with Java core, J2EE, Web-Services, SOAP, JSP, Business logic EJBs, Queries, XML, using MVC pattern, DAO pattern, CRUD pattern, Bridgets Framework, Java Beans and DB2. Also Web Technologies as HTML, JavaScript, CSS, RAD (Rational Application Developer), WAS (WebSphere Application Server), SOAP and MQs.',
			'images' : [
				'images/ABE.JPG',
				'images/IES.JPG'
			]
		},
		{
			'title' : 'Blue Harmony IOS OGS & ESH',
			'dates' : '2014',
			'description' : 'Internal IBM applications, to manage employer control, salaries, holidays, claims, etc. I was wornig in system migration to IBM tamplate version 17, CSS, JSP and JSF changes add some new modules; helping with the database maintenance. Although compliance errors into BHARMS for a blind people plugging (JSP, Tables, HTML). Transform .bat script to .sh script in AIX server.',
			'images' : [
				'images/ADO.JPG'
			]
		}
	]
}

bio.display = function displayBio(){
	var formattedName = HTMLheaderName.replace('%data%', inName('Fernando Benavides'));
	var formattedRole = HTMLheaderRole.replace('%data%', 'Software Engineer/Web Developer/Java Developer');
	var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
	var formattedwelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
	var formattedMobil = HTMLmobile.replace('%data%', bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
	var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

	$('#header').prepend(formattedRole);
	$('#header').prepend(formattedName);
	$('#header').append(formattedBioPic);
	$('#header').append(formattedwelcomeMsg);
	$('#topContacts').append(formattedMobil);
	$('#topContacts').append(formattedEmail);
	$('#topContacts').append(formattedTwitter);
	$('#topContacts').append(formattedGithub);
	$('#topContacts').append(formattedLocation);
	$('#footerContacts').append(formattedMobil);
	$('#footerContacts').append(formattedEmail);
	$('#footerContacts').append(formattedTwitter);
	$('#footerContacts').append(formattedGithub);
	$('#footerContacts').append(formattedLocation);

	if(bio.skills.length > 0){
		$('#header').append(HTMLskillsStart);
		for(skill in bio.skills){
			var formatedSkill = HTMLskills.replace('%data%', bio.skills[skill]);
			$('#skills').append(formatedSkill);
		}
	}
}

work.display = function displayWork(){
	for(job in work.jobs){
		$('#workExperience').append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
		$('.work-entry:last').append(formattedEmployerTitle);
		$('.work-entry:last').append(formattedDates);
		$('.work-entry:last').append(formattedWorkLocation);
		$('.work-entry:last').append(formattedDescription);
	}
}

projects.display = function displayProjects(){
	for(project in projects.projects){
		$('#projects').append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
		$('.project-entry:last').append(formattedTitle);
		$('.project-entry:last').append(formattedDates);
		$('.project-entry:last').append(formattedDescription);
		var imagesArray = projects.projects[project].images;
		for (image in imagesArray) {
			var formattedImage = HTMLprojectImage.replace('%data%', imagesArray[image]);
			$('.project-entry:last').append(formattedImage);
		}
	}
}

education.display = function displayEducation(){
	for(school in education.schools){
		$('#education').append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
		var formattedShoolDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
		$('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);
		$('.education-entry:last').append(formattedShoolDates);
		$('.education-entry:last').append(formattedSchoolLocation);
		var majorsArray = education.schools[school].majors;
		for (major in majorsArray) {
			var formattedMajor = HTMLschoolMajor.replace('%data%', majorsArray[major]);
			$('.education-entry:last').append(formattedMajor);
		}
	}

	for(online in education.onlineCourses){
		$('.education-entry:last').append(HTMLonlineClasses);
		var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[online].title);
		var formattedSchoolOnline = HTMLonlineSchool.replace('%data%', education.onlineCourses[online].school);
		var formattedShoolOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[online].date);
		$('.education-entry:last').append(formattedTitle + formattedSchoolOnline);
		$('.education-entry:last').append(formattedShoolOnlineDates);
		var urlArray = education.onlineCourses[online].url;
		for (url in urlArray) {
			var formattedSchoolOnlineUrl = HTMLonlineURL.replace('%data%', urlArray[url]);
			$('.education-entry:last').append(formattedSchoolOnlineUrl);
		}
	}
}

bio.display();
work.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);

if(document.getElementsByClassName('flex-item').length === 0) {
	document.getElementById('topContacts').style.background = 'BLACK';
}
if(document.getElementsByTagName('h1').length === 0) {
	document.getElementById('header').style.background = 'BLACK';
}
if(document.getElementsByClassName('work-entry').length === 0) {
	document.getElementById('workExperience').style.background = 'BLACK';
}
if(document.getElementsByClassName('project-entry').length === 0) {
	document.getElementById('projects').style.background = 'BLACK';
}
if(document.getElementsByClassName('education-entry').length === 0) {
	document.getElementById('education').style.background = 'BLACK';
}
if(document.getElementsByClassName('flex-item').length === 0) {
	document.getElementById('lets-connect').style.background = 'BLACK';
}
if(document.getElementById('map') === null) {
	document.getElementById('mapDiv').style.background = 'BLACK';
}