const projects = [
    {
        title: "Urban Bridge Renovation",
        description: "Led the structural analysis and renovation of a century-old bridge, implementing modern safety standards while preserving historical elements.",
        image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80",
        category: "Infrastructure"
    },
    {
        title: "Eco-Friendly Office Complex",
        description: "Designed sustainable foundation and structural systems for a LEED-certified commercial building complex.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
        category: "Commercial"
    },
    {
        title: "Coastal Protection System",
        description: "Developed innovative coastal defense structures to protect shoreline communities from erosion and flooding.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80",
        category: "Environmental"
    }
];

function createProjectCard(project) {
    return `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <div class="project-category">${project.category}</div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
            </div>
        </div>
    `;
}

const projectsGrid = document.getElementById('projects-grid');
projectsGrid.innerHTML = projects.map(createProjectCard).join('');