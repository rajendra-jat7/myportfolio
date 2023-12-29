// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Rajendra",
  middleName: "",
  lastName: "Jat",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/rajendra-jat7",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/profile.php?id=100004558367666",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/rj7_18mahi/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/rajendra-jat/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/shahid.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/Rajendra.jpg"),
  imageSize: 375,
  message:
    "My name is Rajendra Jat, a Full Stack Java Developer. I completed my B.Tech in Computer Science from Rajasthan Technical University Kota with a 77% score. Currently in a Full Stack Training Fellowship at Crio.do, specializing in HTML, CSS, JavaScript, and React. I bring experience as a Product Engineer at IBS Software Services, contributing to the iCargo-CRA team. My expertise includes a range of programming languages, web development tools, and databases. Passionate about open source projects and committed to excellence. Eager to contribute my skills to your team",
  resume:
    "https://drive.google.com/file/d/19_PyZ8I2o9GdAPaLvVxU5_4F5a1G7iXa/view?usp=drive_link",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "rajendra-jat7", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    "As a React developer with a leadership background, I bring a blend of technical prowess, project management expertise, and strong communication skills. My track record includes successfully building large-scale applications, optimizing code for performance, and implementing best practices. Leading teams and projects, I've excelled in creating and maintaining project plans, managing timelines and budgets, and ensuring the prompt delivery of high-quality work. My effective communication extends to team members, stakeholders, and clients, demonstrating both verbal and written proficiency. A dedicated listener, I provide clear and constructive feedback. I'm passionate about mentoring and training fellow developers to help them achieve their goals. Keeping abreast of the latest in React and related technologies, I contribute to a positive, collaborative work environment through creative problem-solving and innovation.",
  images: [
    {
      img: require("../editable-stuff/1.png"),
      label: "QKart Frontend",
    },
    {
      img: require("../editable-stuff/2.png"),
      label: "QTripDynamic",
    },
    {
      img: require("../editable-stuff/3.png"),
      label: "QTripStatic",
    },
    {
      img: require("../editable-stuff/4.png"),
      label: "XBoard",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "React", value: 90 },
    { name: "JavaScript", value: 90 },
    { name: "HTML/CSS", value: 90 },
    { name: "TypeScript", value: 80 },
    { name: "Data Structures", value: 70 },
    { name: "Java", value: 70 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time React Developer/Frontend Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "jatrj18@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "Full Stack Fellowship Trainee", // Here Add Company Name
      companylogo: require("../assets/img/crio.png"),
      date: "Feb 2023 – Present",
    },
    {
      role: "Product Engineer", // Here Add Company Name
      companylogo: require("../assets/img/ibs2.png"),
      date: "Jun 2022 – Oct 2022",
    },
    {
      role: "Engineer L1",
      companylogo: require("../assets/img/ibs2.png"),
      date: "Feb 2022 – Jun 2022",
      style: { width: "424", height: "119" },
    },
    {
      role: "Full Stack Java Developer Trainee",
      companylogo: require("../assets/img/simplilearn.png"),
      date: "Feb 2021 – Feb 2022",
      style: { width: "424", height: "119" },
    },
  ],
};

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
