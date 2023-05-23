var projects = [
    {
        name: "tonic",
        role: 'CANOPY',
        platform: 'Back-End Dev',
        year: '2015',
        description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        featuredImage: "images/Snapshoot-Portfolio.svg",
        technologies: ["HTML", "CSS", "Javascript"],
        liveLink: "https://example.com/live",
        sourceLink: "https://example.com/source"
    },
    {
        name: "Multi-Post Stories",
        role: 'CANOPY',
        platform: 'Back-End Dev',
        year: '2015',
        description: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
        featuredImage: "images/multi-post.svg",
        technologies: ["HTML", "CSS", "Javascript"],
        liveLink: "https://example.com/live",
        sourceLink: "https://example.com/source"
    },
    {
        name: "Facebook 360",
        role: 'CANOPY',
        platform: 'Back-End Dev',
        year: '2015',
        description: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
        featuredImage: "images/Snapshoot Portfolio2.svg",
        technologies: ["HTML", "CSS", "Javascript"],
        liveLink: "https://example.com/live",
        sourceLink: "https://example.com/source"
    },
    {
        name: "Uber Navigation",
        role: 'CANOPY',
        platform: 'Back-End Dev',
        year: '2015',
        description: "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
        featuredImage: "images/multi-post.svg",
        technologies: ["HTML", "CSS", "Javascript"],
        liveLink: "https://example.com/live",
        sourceLink: "https://example.com/source"
    }
];

var projectsContainerMobile = document.getElementById("projects-container-mobile");
var projectsContainerDesktop = document.getElementById("projects-container-desktop");
var popupContainer = document.getElementById("popup-container");
var popupContent = document.getElementById("popup-content");
var closeButton = document.getElementById("close-button1");

for (var i = 0; i < projects.length; i++) {
    var project = projects[i];
    var projectElement = createProjectElement(project);
    projectsContainerMobile.appendChild(projectElement);
    projectsContainerDesktop.appendChild(projectElement.cloneNode(true));
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

    var workDetails = document.createElement("p");
    workDetails.className = "work-details";
    workDetails.textContent = project.description;
    workDescription.appendChild(workDetails);

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
    popupContent.innerHTML = "";
  
    var projectTitle = document.createElement("h2");
    projectTitle.textContent = project.name;
    popupContent.appendChild(projectTitle);
  
    var projectImage = document.createElement("img");
    projectImage.src = project.featuredImage;
    projectImage.alt = project.name + " image";
    popupContent.appendChild(projectImage);
  
    var projectDetails = document.createElement("p");
    projectDetails.textContent = project.description;
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
  
    var seeLiveButton = document.createElement("button");
    seeLiveButton.className = "btn popup-see-live";
    seeLiveButton.innerHTML = 'See Live <img src="images/live-icon.svg" alt="Icon" />';
    seeLiveButton.addEventListener("click", function () {
      window.open(project.liveLink, "_blank");
    });
    popupButtons.appendChild(seeLiveButton);
  
    var seeSourceButton = document.createElement("button");
    seeSourceButton.className = "btn popup-see-source";
    seeSourceButton.innerHTML = 'See Source <img src="images/github-icon.svg" alt="github-Icon" />';
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
  