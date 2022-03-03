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
    projectName: 'MULTI - POST STORIES',
    projectImage: '../images/Snapshoot-portfolio.png',
    projectPosition: 'Front End Dev',
    projectDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectFullDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy textever since the 1500s, when an unknown printer took a galley of type',
    projectTechnologies: ['html', 'css', 'JavaScript', 'Rails'],
  },

  {
    id: '1002',
    sectionName: 'MY RECENT WORK',
    projectName: 'MULTI- POST STORIES',
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
    projectName: 'MULTI- POST STORIES',
    projectImage: '../images/Snapshoot-portfolio.png',
    projectPosition: 'Front End Dev',
    projectDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectFullDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy textever since the 1500s, when an unknown printer took a galley of type',
    projectTechnologies: ['html', 'css', 'JavaScript', 'react'],
  },
  {
    id: '1004',
    sectionName: 'MY RECENT WORK',
    projectName: 'MULTI- POST STORIES',
    projectImage: './images/Snapshoot-portfolio.png',
    projectPosition: 'Front End Dev',
    projectDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectFullDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy textever since the 1500s, when an unknown printer took a galley of type',
    projectTechnologies: ['html', 'css', 'JavaScript', 'laravel'],
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
  const addWillReverseClass = (index) => (index % 2 === 0 ? '' : 'will-reverse');
  let innerHTML = '';
  for (let i = 0; i < projectData.length; i += 1) {
    const project = projectData[i];
    innerHTML += `<div class="recent-work-div flex-d-col display-flex flex-d-row ${addWillReverseClass(
      i,
    )}">
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
function seeProectModal(projects) {
  const populateProjectModal = (project) => `
    <ul class="display-flex justify-content-space-between align-items">
      <li><h3>${project.projectName}</h3></li>
      <li>
         <span class="close-modal-button"> &times;</span> 
      </li>
    </ul>
    <div class="modal-name">
      <img
        src=${project.projectImage}
        alt="Modal image"
        class="recent-work-demo-modal"
      />
    </div>
    <p class="about-project-paragraph text-align margin-0-auto">
    ${project.projectFullDescription}
    </p>

    <ul class="recent-work-ul modal-ul display-flex justify-content-center">
     ${callTechList(project.projectTechnologies)}
    </ul>

    <div
      class="display-flex flex-d-col flex-d-row-lg margin-0-auto modal-button-div"
    >
      <button
        type="submit"
        aria-label="see project"
        class="see-project-button border-none display-flex modal-container-button align-items justify-content-space-between"
      >
        <span> See Live </span>
        <span>
          <img src="./images/see-live-icon.png" alt="see live link image"
        /></span>
      </button>

      <button
        type="submit"
        aria-label="see project"
        class="see-project-button border-none display-flex modal-container-button align-items justify-content-space-between"
      >
        <span> See Source </span>
        <span>
          <img src="./images/github-icon.png" alt="github link image"
        /></span>
      </button>
    </div>
    `;
  const handleSeeModal = (event) => {
    const currentId = event.target.id;
    const currentProject = projects.find((project) => project.id === currentId);
    const modalElement = document.querySelector('.modal-container');
    const modalBackground = document.querySelector('.modal-background');
    modalElement.innerHTML = populateProjectModal(currentProject);
    modalElement.classList.remove('display-none-sm');
    modalBackground.classList.remove('display-none-sm');
    const closeModal = modalElement.querySelector('.close-modal-button');

    closeModal.addEventListener('click', () => {
      modalElement.classList.add('display-none-sm');
      modalBackground.classList.add('display-none-sm');
    });
  };

  const allSeeProectButtons = document.querySelectorAll('.see-project-modal');
  allSeeProectButtons.forEach((button) => {
    button.addEventListener('click', handleSeeModal);
  });
}
seeProectModal(projectData);

// form validation
function validateEmailInput() {
  const emailInputField = document.querySelector('#email');

  const handleEmailValidation = () => {
    const errorMessage = document.querySelector('.error-message');
    if (emailInputField.validity.valid) {
      errorMessage.classList.add('display-none-sm');
    } else {
      errorMessage.classList.remove('display-none-sm');
    }
  };
  emailInputField.addEventListener('input', handleEmailValidation);
  document
    .querySelector('#contact-section button')
    .addEventListener('click', handleEmailValidation);
}

validateEmailInput();
