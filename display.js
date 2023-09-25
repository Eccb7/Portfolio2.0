var projects = [
  {
    name: "Math Symposium",
    role: "Developer",
    platform: "Front-end",
    year: "2023",
    description:
      "THE MATHEMATICS ANNUAL GLOBAL SYMPOSIUM.",
    descriptionlong:
      "The Mathematics Annual Global Symposium is a prestigious event organized with a motivation to provide an excellent international platform for the academicians, researchers, engineers, industrial participants and budding students around the world to SHARE their research findings with the global experts.",
    featuredImage: "images/qwerty.png",
    technologies: ["HTML", "CSS", "Javascript"],
    liveLink: "https://eccb7.github.io/Capstone_Project-1/",
    sourceLink: "https://github.com/Eccb7/Capstone_Project-1",
  },
  {
    name: "Space travellers",
    role: "Developer",
    platform: "Front-end",
    year: "2023",
    description:
    "Space Travellers: Explore Rockets and Missions is a Redux-powered web app that enables users to discover SpaceX Rockets.",
    descriptionlong:
    "Space Travellers: Explore Rockets and Missions is a Redux-powered web app that enables users to discover SpaceX rockets, join missions, and manage their selections in a personalized profile section. Built with React, it offers an immersive space exploration journey.",
    featuredImage: "images/space.png",
    technologies: ["React", "redux", "Javascript"],
    liveLink: "https://space-travellers-wheat.vercel.app/",
    sourceLink: "https://github.com/Eccb7/space-travellers",
  },
  {
    name: "Games Metrics app",
    role: "Developer",
    platform: "Front-end",
    year: "2023",
    description:
      "This is a web application that allows users to discover and explore a collection of online games from various genres.",
    descriptionlong:
    "This is a Gaming Catalog App that is dynamic and has a user-friendly platform designed to cater for gamers and gaming enthusiasts. Whether you're a casual gamer or a dedicated enthusiast, my app provides a seamless experience for exploring and discovering a diverse range of video games.",
    featuredImage: "images/games.png",
    technologies: ["React", "redux", "Javascript"],
    liveLink: "https://eccb7.github.io/metrix-app/",
    sourceLink: "https://github.com/Eccb7/metrix-app",
  },
  {
    name: "Math magicians",
    role: "Developer",
    platform: "front-end",
    year: "2023",
    description:
    "Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.",
    descriptionlong:
    "Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.",
    featuredImage: "images/math.png",
    technologies: ["React", "redux", "Javascript"],
    liveLink: "https://math-magicians-gray.vercel.app/",
    sourceLink: "https://github.com/Eccb7/Math-Magicians",
  },
];

var projectsContainerMobile = document.getElementById(
  "projects-container-mobile"
);
var projectsContainerDesktop = document.getElementById(
  "projects-container-desktop"
);
var popupContainer = document.getElementById("popupContainer");
var popupContentMobile = document.getElementById("popupContentMobile");
var popupContentDesktop = document.getElementById("popupContentDesktop");
var closeButton = document.getElementById("closeButton");

for (var i = 0; i < projects.length; i++) {
  (function (project) { // Wrap the code inside an IIFE
    var projectElementMobile = createProjectElement(project);
    var projectElementDesktop = projectElementMobile.cloneNode(true);

    projectElementMobile.addEventListener("click", function () {
      showPopup(project);
    });
    projectElementDesktop.addEventListener("click", function () {
      showPopup(project);
    });

    projectsContainerMobile.appendChild(projectElementMobile);
    projectsContainerDesktop.appendChild(projectElementDesktop);
  })(projects[i]); // Pass the current project as an argument to the IIFE
}

function createProjectElement(project) {
  var projectElement = document.createElement("div");
  projectElement.className = "project";

  var workImg = document.createElement("div");
  workImg.className = "work-img";
  var img = document.createElement("img");
  img.src = project.featuredImage;
  img.alt = project.name + " image";
  workImg.appendChild(img);
  projectElement.appendChild(workImg);

  var workDescription = document.createElement("div");
  workDescription.className = "work-description";

  var workTitle = document.createElement("h2");
  workTitle.className = "work-title";
  workTitle.textContent = project.name;
  workDescription.appendChild(workTitle);

  var rolePlatformYearList = document.createElement("ul");
  rolePlatformYearList.className = "role-platform-year-list";
  var roleItem = document.createElement("li");
  roleItem.className = "role-item";
  roleItem.textContent = project.role;
  rolePlatformYearList.appendChild(roleItem);
  var platformItem = document.createElement("li");
  platformItem.className = "platform-item";
  platformItem.textContent = project.platform;
  rolePlatformYearList.appendChild(platformItem);
  var yearItem = document.createElement("li");
  yearItem.className = "year-item";
  yearItem.textContent = project.year;
  rolePlatformYearList.appendChild(yearItem);
  workDescription.appendChild(rolePlatformYearList);

  var workDetails = document.createElement("p");
  workDetails.className = "work-details";
  workDetails.textContent = project.description;
  workDescription.appendChild(workDetails);

  var technologiesList = document.createElement("ul");
  technologiesList.className = "technologies-list";
  for (var i = 0; i < project.technologies.length; i++) {
    var technology = project.technologies[i];
    var technologyItem = document.createElement("li");
    technologyItem.textContent = technology;
    technologiesList.appendChild(technologyItem);
  }
  workDescription.appendChild(technologiesList);

  var seeProjectButton = document.createElement("button");
  seeProjectButton.type = "button";
  seeProjectButton.className = "btn see-project-button";
  seeProjectButton.textContent = "See Project";
  seeProjectButton.addEventListener("click", function () {
    showPopup(project);
  });
  workDescription.appendChild(seeProjectButton);

  projectElement.appendChild(workDescription);

  return projectElement;
}

function showPopup(project) {
  var popupContent;

  if (window.innerWidth > 768) {
    popupContentDesktop.innerHTML = "";
    popupContent = popupContentDesktop;
  } else {
    popupContentMobile.innerHTML = "";
    popupContent = popupContentMobile;
  }

  popupContent.innerHTML = "";

  var projectTitle = document.createElement("h2");
  projectTitle.textContent = project.name;
  popupContent.appendChild(projectTitle);

  var rolePlatformYearList = document.createElement("ul");
  rolePlatformYearList.className = "role-platform-year-list";
  var roleItem = document.createElement("li");
  roleItem.className = "role-item";
  roleItem.textContent = project.role;
  rolePlatformYearList.appendChild(roleItem);
  var platformItem = document.createElement("li");
  platformItem.className = "platform-item";
  platformItem.textContent = project.platform;
  rolePlatformYearList.appendChild(platformItem);
  var yearItem = document.createElement("li");
  yearItem.className = "year-item";
  yearItem.textContent = project.year;
  rolePlatformYearList.appendChild(yearItem);
  popupContent.appendChild(rolePlatformYearList);

  var projectImage = document.createElement("img");
  projectImage.src = project.featuredImage;
  projectImage.alt = project.name + " image";
  projectImage.classList.add("popup-image");
  popupContent.appendChild(projectImage);

  const projectDetailWrapper = document.createElement('div');
  projectDetailWrapper.classList.add('project-detail-wrapper');

  var projectDetails = document.createElement("p");
  projectDetails.classList.add('project-detail-content');
  projectDetails.textContent = project.descriptionlong;
  projectDetailWrapper.appendChild(projectDetails);

  var popupButtons = document.createElement("div");
  popupButtons.className = "popup-buttons";

  var technologiesList = document.createElement("ul");
  for (var i = 0; i < project.technologies.length; i++) {
    var technology = project.technologies[i];
    var technologyItem = document.createElement("li");
    technologyItem.textContent = technology;
    technologiesList.appendChild(technologyItem);
  }
  popupButtons.appendChild(technologiesList);

  var borderLine = document.createElement("div");
  borderLine.className = "popup-border-line";
  projectDetailWrapper.appendChild(borderLine);

  const popupButtonWrapper = document.createElement('div');
  popupButtonWrapper.classList.add('popup-button-wrapper');

  var seeLiveButton = document.createElement("button");
  seeLiveButton.className = "btn popup-see-live";
  seeLiveButton.innerHTML =
    'See Live <img src="images/live-icon.svg" alt="Icon" />';
  seeLiveButton.addEventListener("click", function () {
    window.open(project.liveLink, "_blank");
  });
  popupButtonWrapper.appendChild(seeLiveButton);

  var seeSourceButton = document.createElement("button");
  seeSourceButton.className = "btn popup-see-source";
  seeSourceButton.innerHTML =
    'See Source <img src="images/github-icon.svg" alt="github-Icon" />';
  seeSourceButton.addEventListener("click", function () {
    window.open(project.sourceLink, "_blank");
  });
  popupButtonWrapper.appendChild(seeSourceButton);

  popupButtons.appendChild(popupButtonWrapper);
  
  projectDetailWrapper.appendChild(popupButtons);
  
  popupContent.appendChild(projectDetailWrapper);

  popupContainer.style.display = "block";
}

function closePopup() {
  popupContainer.style.display = "none";
}

closeButton.addEventListener("click", closePopup);
