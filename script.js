const avatar = document.querySelector(".avatar");
const welcomeMessage = document.querySelector("#welcomeMessage");

welcomeMessage.textContent = portfolioData.profile.welcomeMessage;

function toggleWelcomeMessage() {
    welcomeMessage.hidden = !welcomeMessage.hidden;
}

avatar.addEventListener("click", toggleWelcomeMessage);

avatar.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleWelcomeMessage();
    }
});

document.querySelector("#playerLevel").textContent =
    portfolioData.profile.level;

document.querySelector("#playerName").textContent =
    `Hi, I'm ${portfolioData.profile.name}.`;

document.querySelector("#playerIntroduction").textContent =
    portfolioData.profile.introduction;

const playerStats = document.querySelector("#playerStats");

portfolioData.stats.forEach((stat) => {
    const statCard = document.createElement("div");
    statCard.className = "stat";

    const value = document.createElement("span");
    value.className = "stat-value";
    value.textContent = stat.value;

    const label = document.createElement("span");
    label.className = "stat-label";
    label.textContent = stat.label;

    statCard.append(value, label);
    playerStats.appendChild(statCard);
});

document.querySelector("#aboutTitle").textContent =
    portfolioData.about.title;

const aboutContent = document.querySelector("#aboutContent");

portfolioData.about.paragraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;

    aboutContent.appendChild(p);
});

const skillList = document.querySelector("#skillList");

portfolioData.skills.forEach((skill) => {
    const skillItem = document.createElement("span");
    skillItem.textContent = skill;

    skillList.appendChild(skillItem);
});

const projectGrid = document.querySelector("#projectGrid");

portfolioData.projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";

    const number = document.createElement("span");
    number.className = "project-number";
    number.textContent = project.number;

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const tags = document.createElement("div");
    tags.className = "tags";

    project.technologies.forEach((technology) => {
        const tag = document.createElement("span");
        tag.textContent = technology;

        tags.appendChild(tag);
    });

    const link = document.createElement("a");
    link.href = project.github;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "View on GitHub ↗";

    card.append(number, title, description, tags, link);
    projectGrid.appendChild(card);
});

const contactActions = document.querySelector("#contactActions");

// Resume
const resumeLink = document.createElement("a");
resumeLink.className = "button";
resumeLink.href = portfolioData.contact.resume;
resumeLink.target = "_blank";
resumeLink.rel = "noopener noreferrer";
resumeLink.textContent = "View My Resume ↗";

contactActions.appendChild(resumeLink);

const linkedinLink = document.createElement("a");
linkedinLink.className = "contact-link";
linkedinLink.href = portfolioData.contact.linkedin;
linkedinLink.target = "_blank";
linkedinLink.rel = "noopener noreferrer";
linkedinLink.textContent = "LinkedIn ↗";

contactActions.appendChild(linkedinLink);

const githubLink = document.createElement("a");
githubLink.className = "contact-link";
githubLink.href = portfolioData.contact.github;
githubLink.target = "_blank";
githubLink.rel = "noopener noreferrer";
githubLink.textContent = "GitHub ↗";

contactActions.appendChild(githubLink);

const emailLink = document.createElement("a");
emailLink.className = "contact-link";
emailLink.href = `mailto:${portfolioData.contact.email}`;
emailLink.textContent = "Email Me ↗";

contactActions.appendChild(emailLink);

const questList = document.querySelector("#questList");

portfolioData.quests.forEach((quest) => {
    const card = document.createElement("div");
    card.className = "quest-card";

    const details = document.createElement("div");

    const title = document.createElement("h3");
    title.textContent = quest.title;

    const description = document.createElement("p");
    description.textContent = quest.description;

    details.append(title, description);

    const status = document.createElement("span");
    status.className = "quest-status";
    status.textContent = quest.status;

    card.append(details, status);
    questList.appendChild(card);
});

document.title = portfolioData.siteTitle;

document.querySelector("#footerCopyright").textContent =
    portfolioData.footer.copyright;

document.querySelector("#footerNote").textContent =
    portfolioData.footer.note;