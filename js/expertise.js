const expertiseAreas = [
    {
        title: "Structural Engineering",
        description: "Specialized in designing and analyzing complex structural systems for commercial and residential buildings.",
        icon: "./src/images/image1.png" // Replace with the actual image path
    },
    {
        title: "Infrastructure Design",
        description: "Expert in bridge design, highway systems, and urban infrastructure development.",
        icon: "./src/images/image2.png" // Replace with the actual image path
    },
    {
        title: "Safety Compliance",
        description: "Ensuring all projects meet or exceed safety standards and building codes.",
        icon: "./src/images/image3.png" // Replace with the actual image path
    },
    {
        title: "Sustainable Design",
        description: "Implementing eco-friendly solutions and sustainable engineering practices.",
        icon: "./src/images/image4.png" // Replace with the actual image path
    }
];

function createExpertiseCard(expertise) {
    return `
        <div class="expertise-card">
            <img src="${expertise.icon}" alt="${expertise.title}" class="expertise-icon" />
            <h3 class="expertise-title">${expertise.title}</h3>
            <p class="expertise-description">${expertise.description}</p>
        </div>
    `;
}

const expertiseGrid = document.getElementById('expertise-grid');
expertiseGrid.innerHTML = expertiseAreas.map(createExpertiseCard).join('');
