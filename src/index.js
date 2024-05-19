import './style.scss';

const aboutElement = document.getElementById('about');
const aboutBtn = document.getElementById('aboutBtn');
aboutBtn.onclick = () => { scrollTo(aboutElement); }

const techElement = document.getElementById('technologies');
const techBtn = document.getElementById('techBtn');
techBtn.onclick = () => { scrollTo(techElement); }

const projectsElement = document.getElementById('projects');
const projectsBtn = document.getElementById('projectsBtn');
projectsBtn.onclick = () => { scrollTo(projectsElement); }

function scrollTo(element) {
    window.scrollTo({
        top: element.offsetTop,
        left: 0,
        behavior: 'smooth'
      });
}

const toTopBtn = document.getElementById('toTop');

toTopBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}

window.onscroll = () => {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
}