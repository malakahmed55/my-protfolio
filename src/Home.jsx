import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const skills = [
    { name: "HTML", desc: "Building structured and semantic web pages.", image: "/images/html.png" },
    { name: "CSS", desc: "Styling and designing responsive, modern websites.", image: "/images/css.jpeg" },
    { name: "JavaScript", desc: "Creating interactive and dynamic web features.", image: "/images/js.png" },
    { name: "React", desc: "Building reusable UI components and SPAs.", image: "/images/react.png" },
    { name: "Node.js", desc: "Developing scalable server-side applications.", image: "/images/node.png" },
    { name: "PHP", desc: "Creating back-end logic and database connections.", image: "/images/php.png" },
    { name: "Python", desc: "Scripting, automation, and backend development.", image: "/images/python.png" },
    { name: "Laravel", desc: "Experienced in building secure and scalable web applications using Laravel.", image: "/images/laravel.png" },
  ];

  const achievements = [
    { year: "2023", image: "/images/2023.jpeg", link: "/achievements/2023" },
    { year: "2024", image: "/images/2024.jpeg", link: "/achievements/2024" },
    { year: "2025", image: "/images/2025.jpeg", link: "/achievements/2025" },
  ];

  const projects = [
    { image: "/images/1.jpeg", link: "https://utopiaworld.site/", title: "Utopia World  موقع شامل لاصحاب متلازمة داون" },
    { image: "/images/2.jpeg", link: "https://down-up.utopiaworld.site/", title: "Down Up  موقع تعليمي لاطفال الاعاقات" },
    { image: "/images/3.PNG", link: "http://localhost/full%20stack/", title: "dern support   موقع لشركة تصليح اجهزة الحاسوب" },
    { image: "/images/4.PNG", link: "http://localhost/malak%20ahmed2-4/test1.php", title: " موقع بسيط لاهم العادات الدينية" },
    { image: "/images/5.PNG", link: "http://localhost/malak%20ahmed%20task2/home.php", title: "موقع مسابقات في مواد علمية" },
    { image: "/images/6.PNG", link: "http://localhost/PHP1/index.php", title: " موقع تسجيل بيانات العمال " },
    { image: "/images/7.PNG", link: "http://localhost:3001/", title: "fake store   موقع لعرض منتجات مزيفه" },
  ];

  return (
    <div className="home-container">
      <img src="/images/myimage.jpeg" alt="Profile" className="home-image" />
      <h1 className="home-title">Malak Ahmed</h1>
      <h3 className="home-subtitle">Full-Stack Developer</h3>
      <p className="home-description">
        Graduate of the WE School of Technology with three years of experience as a Full Stack Developer.
        I am passionate about building modern, user-friendly web applications and constantly improving my skills
        in both front-end and back-end development.
      </p>

      <div className="two-columns">
        {/* Skills */}
        <div className="skills-section">
          <h2 className="skills-title">Skills</h2>
          {skills.map((skill, i) => (
            <div className="skill-item" key={i}>
              <div
                className="skill-circle"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundImage = `url('${skill.image}')`;
                  e.currentTarget.style.color = "transparent";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundImage = "none";
                  e.currentTarget.style.color = "inherit";
                }}
              >
                {skill.name}
              </div>
              <p className="skill-description">{skill.desc}</p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="achievements-section">
          <h2 className="skills-title">Achievements</h2>
          {achievements.map((achieve, i) => (
            <div className="achievement-item" key={i}>
              <Link to={achieve.link} className="achievement-link">
                <div
                  className="achievement-circle"
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundImage = `url('${achieve.image}')`)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundImage = "none")}
                >
                  {achieve.year}
                </div>
              </Link>
              <p className="achievement-description">Achievements in {achieve.year}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Projects: hover يخفي الصورة ويظهر النص */}
      <div className="projects-section">
        <h2 className="skills-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <a key={i} href={p.link} className="project-card" target="_blank" rel="noopener noreferrer">
              <img src={p.image} alt={p.title} />
              <div className="project-overlay">
                <span>{p.title}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
