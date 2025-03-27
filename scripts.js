function filterProjects(category) {
    let projects = document.querySelectorAll(".project");
    projects.forEach((project) => {
        if (category === "all" || project.classList.contains(category)) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}
function filterCreations(category) {
    let creations = document.querySelectorAll(".creation");
    creations.forEach((creation) => {
        if (category === "all" || creation.classList.contains(category)) {
            creation.style.display = "block";
        } else {
            creation.style.display = "none";
        }
    });
}
