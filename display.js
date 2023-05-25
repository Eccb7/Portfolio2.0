var projects = [
  {
    name: "Tonic",
    role: "CANOPY",
    platform: "Back-End Dev",
    year: "2015",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    descriptionlong:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    featuredImage: "images/Snapshoot-Portfolio.svg",
    technologies: ["HTML", "CSS", "Javascript"],
    liveLink: "https://eccb7.github.io/Portfolio2.0/",
    sourceLink: "https://github.com/Eccb7/Portfolio2.0",
  },
  {
    name: "Multi-Post Stories",
    role: "CANOPY",
    platform: "Back-End Dev",
    year: "2015",
    description:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    descriptionlong:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    featuredImage: "images/multi-post.svg",
    technologies: ["HTML", "CSS", "Javascript"],
    liveLink: "https://eccb7.github.io/Portfolio2.0/",
    sourceLink: "https://github.com/Eccb7/Portfolio2.0",
  },
  {
    name: "Facebook 360",
    role: "CANOPY",
    platform: "Back-End Dev",
    year: "2015",
    description:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    descriptionlong:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    featuredImage: "images/Snapshoot-Portfolio.svg",
    technologies: ["HTML", "CSS", "Javascript"],
    liveLink: "https://eccb7.github.io/Portfolio2.0/",
    sourceLink: "https://github.com/Eccb7/Portfolio2.0",
  },
  {
    name: "Uber Navigation",
    role: "CANOPY",
    platform: "Back-End Dev",
    year: "2015",
    description:
      "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    descriptionlong:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    featuredImage: "images/multi-post.svg",
    technologies: ["HTML", "CSS", "Javascript"],
    liveLink: "https://eccb7.github.io/Portfolio2.0/",
    sourceLink: "https://github.com/Eccb7/Portfolio2.0",
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

  var projectDetails = document.createElement("p");
  projectDetails.textContent = project.descriptionlong;
  popupContent.appendChild(projectDetails);

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
  popupContent.appendChild(borderLine);

  var seeLiveButton = document.createElement("button");
  seeLiveButton.className = "btn popup-see-live";
  seeLiveButton.innerHTML =
    'See Live <img src="images/live-icon.svg" alt="Icon" />';
  seeLiveButton.addEventListener("click", function () {
    window.open(project.liveLink, "_blank");
  });
  popupButtons.appendChild(seeLiveButton);

  var seeSourceButton = document.createElement("button");
  seeSourceButton.className = "btn popup-see-source";
  seeSourceButton.innerHTML =
    'See Source <img src="images/github-icon.svg" alt="github-Icon" />';
  seeSourceButton.addEventListener("click", function () {
    window.open(project.sourceLink, "_blank");
  });
  popupButtons.appendChild(seeSourceButton);

  popupContent.appendChild(popupButtons);

  popupContainer.style.display = "block";
}

function closePopup() {
  popupContainer.style.display = "none";
}

closeButton.addEventListener("click", closePopup);
