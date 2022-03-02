const toggleButton = document.querySelector('.toggle-button');
const menuButton = document.querySelector('.x-button');
const navbarLinks = document.querySelector('.nav-ul');
const bodyElement = document.querySelector('body');
const workSection = document.querySelector('#work-section');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('display-none-sm');
  toggleButton.classList.add('display-none-sm');
  menuButton.classList.toggle('display-none-sm');
  bodyElement.style.overflow = 'hidden';
});

menuButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('display-none-sm');
  toggleButton.classList.toggle('display-none-sm');
  menuButton.classList.toggle('display-none-sm');
  bodyElement.style.overflow = 'auto';
});

navbarLinks.addEventListener('click', () => {
  navbarLinks.classList.toggle('display-none-sm');
  toggleButton.classList.toggle('display-none-sm');
  menuButton.classList.toggle('display-none-sm');
  bodyElement.style.overflow = 'auto';
});

// work section

const projectData = [
  {
    id: '1001',
    sectionName: 'MY RECENT WORK',
    projectName: 'MULTIPLE - POST STORIES',
    projectImage: '../images/Snapshoot-portfolio.png',
    projectPosition: 'Front End Dev',
    projectDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectFullDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy textever since the 1500s, when an unknown printer took a galley of type',
    projectTechnologies: ['html', 'css', 'JavaScript'],
  },

  {
    id: '1002',
    sectionName: 'MY RECENT WORK',
    projectName: 'MULTIPLE - POST STORIES',
    projectImage: '../images/Snapshoot-portfolio.png',
    projectPosition: 'Front End Dev',
    projectDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectFullDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy textever since the 1500s, when an unknown printer took a galley of type',
    projectTechnologies: ['html', 'css', 'JavaScript', 'boostrap'],
  },

  {
    id: '1003',
    sectionName: 'MY RECENT WORK',
    projectName: 'MULTIPLE - POST STORIES',
    projectImage: '../images/Snapshoot-portfolio.png',
    projectPosition: 'Front End Dev',
    projectDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectFullDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy textever since the 1500s, when an unknown printer took a galley of type',
    projectTechnologies: ['html', 'css', 'JavaScript', 'boostrap'],
  },
  {
    id: '1004',
    sectionName: 'MY RECENT WORK',
    projectName: 'MULTIPLE - POST STORIES',
    projectImage: './images/Snapshoot-portfolio.png',
    projectPosition: 'Front End Dev',
    projectDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectFullDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy textever since the 1500s, when an unknown printer took a galley of type',
    projectTechnologies: ['html', 'css', 'JavaScript', 'ruby'],
  },
];

function callTechList(technames) {
  let content = '';
  for (let i = 0; i < technames.length; i += 1) {
    content += `<li class="recent-work-ul-li">${technames[i]}</li>`;
  }
  return content;
}

function implementProject() {
  const addWillReverseClass = (index) => ((index % 2 === 0) ? '' : 'will-reverse');
  let innerHTML = '';
  for (let i = 0; i < projectData.length; i += 1) {
    const project = projectData[i];
    innerHTML += `<div class="recent-work-div flex-d-col display-flex flex-d-row ${addWillReverseClass(i)}">
    <div class="recent-work-demo-wrapper">
      <img
        src='${project.projectImage}'
        class="recent-work-demo"
        alt=/>
    </div>
    <article class="recent-work-article">
      <h3 class="recent-work-article-header">${project.projectName}</h3>
      <p class="recent-work-paragraph">
      ${project.projectDescription}
      </p>
      <ul
        class="recent-work-ul display-flex justify-content-space-between"
      >
      ${callTechList(project.projectTechnologies)}      
      </ul>
      <button
       projectData-key="${project.key}"
       id="${project.id}"
        type="button"
        aria-label="see project"
        class="see-project-button border-none see-project-modal"
      >
        see projects
      </button>
    </article>
   </div>`;
  }
  return innerHTML;
}

const projectSkeleton = implementProject();
workSection.innerHTML = projectSkeleton;
