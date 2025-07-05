// const skills = [
//   { emoji: "🎨", title: "Creativity", detail: "Expressing innovative ideas through design, art, and logical thinking." },
//   { emoji: "🗣️", title: "Soft Skills", detail: "Effective communication, teamwork, leadership, and emotional intelligence." },
//   { emoji: "💻", title: "Frontend Development", detail: "Building responsive UIs using HTML, CSS, JavaScript, and frameworks." },
//   { emoji: "🛠️", title: "Backend Development", detail: "Creating APIs and server-side logic using Node.js, Python, or PHP." },
//   { emoji: "☁️", title: "Cloud", detail: "Working with cloud platforms like AWS, Azure, and Google Cloud." },
//   { emoji: "🧠", title: "Problem Solving", detail: "Analytical thinking and algorithm design for real-world challenges." },
//   { emoji: "🤖", title: "AI / ML & Data Science", detail: "Exploring artificial intelligence, machine learning, and data insights." }
// ]

//   //   { emoji: "🧠", title: "Problem Solving", detail: "Strong problem-solving and logical reasoning." },
//   //   { emoji: "🎨", title: "Creativity", detail: "Mehndi, Rangoli, and traditional art enhance creativity and focus." },
//   //   { emoji: "⏰", title: "Punctuality", detail: "Always on time and highly disciplined." },
//   //   { emoji: "👑", title: "Leadership", detail: "Led teams in academic and creative projects." },
//   //   { emoji: "🎯", title: "Dedication", detail: "Persistent in achieving set goals." },
//   //   { emoji: "🕊️", title: "Spiritual", detail: "Driven by spiritual values and honesty." },
//   //   { emoji: "🗣️", title: "Communication", detail: "Good communicator with emotional intelligence." },
//   //   { emoji: "🤝", title: "Teamwork", detail: "Works well with and leads teams." },
//   //   { emoji: "🛠️", title: "C / C++ / Java/Python", detail: "Familiar with core languages used in development." },
//   //   { emoji: "🧱", title: "OOPs Concepts", detail: "Strong understanding of Object-Oriented Programming principles." },
//   //   { emoji: "🌐", title: "HTML/CSS/JS", detail: "Creates responsive and modern websites." },
//   //   { emoji: "📦", title: "Node & Express", detail: "Built backends using Node.js and Express.js." },
//   //   { emoji: "🛢️", title: "Databases", detail: "Experienced in MySQL, PostgreSQL, and MongoDB." },
//   //   { emoji: "🧰", title: "Git & Tools", detail: "Used Git, Postman, and VS Code regularly." },
//   //   { emoji: "🤖", title: "AI / ML", detail: "Learning AI/ML and Cloud technologies." },
//   //   { emoji: "🔗", title: "Blockchain", detail: "Exploring decentralized systems and smart contracts." },
//   //   { emoji: "👾", title: "Motoko & ICP", detail: "Building dApps on Internet Computer using Motoko and ICP." },
//   //   { emoji: "⚛️", title: "React JS", detail: "Creating dynamic frontends using React JS." }
//   // ];
  
//   function createSkillCards() {
//     const grid = document.getElementById("skillsGrid");
//     skills.forEach(skill => {
//       const card = document.createElement("div");
//       card.className = "skill-card";
//       card.innerHTML = `
//         <div class="emoji-circle">
//           <span class="emoji">${skill.emoji}</span>
//         </div>
//         <div class="title">${skill.title}</div>
//       `;
//       card.onclick = () => showModal(skill.title, skill.detail);
//       grid.appendChild(card);
//     });
//   }
  
//   function showModal(title, description) {
//     document.getElementById("modalTitle").textContent = title;
//     document.getElementById("modalDescription").textContent = description;
//     document.getElementById("skillModal").style.display = "block";
//   }
  
//   function closeModal() {
//     document.getElementById("skillModal").style.display = "none";
//   }
  
//   window.onclick = function (event) {
//     const modal = document.getElementById("skillModal");
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   };
  
//   window.onload = createSkillCards;
//   //------------------------------------------------------//


const skills = [
  {
    emoji: "🎨",
    title: "Creativity",
    detail: "Expressing innovative ideas through design, art, and logical thinking.",
    subpoints: [
      "Mehndi and Rangoli",
      "Arts and Crafts",
      "Flower Decorations"
    ]
  },
  {
    emoji: "🗣️",
    title: "Soft Skills",
    detail: "Effective communication, teamwork, leadership, and emotional intelligence.",
    subpoints: [
      "Communication & Emotional Intelligence",
      "Leadership & Teamwork",
      "Punctuality & Dedication"
    ]
  },
  {
    emoji: "💻",
    title: "Frontend Development",
    detail: "Building responsive UIs using HTML, CSS, JavaScript, and frameworks.",
    subpoints: [
      "HTML / CSS / JavaScript",
      "Responsive Design",
      "React.js"
    ]
  },
  {
    emoji: "🛠️",
    title: "Backend Development",
    detail: "Creating APIs and server-side logic using current Technology as below.",
    subpoints: [
      "Node.js & Express",
      "Databases, API",
    "Blockchain & ICP"
    ]
  },
  {
    emoji: "☁️",
    title: "Cloud",
    detail: "Working with cloud platforms ",
    subpoints: [
      "Learning AWS",
      "Basics of Cloud"
      
    ]
  },
  {
    emoji: "🧠",
    title: "Problem Solving",
    detail: "Analytical thinking and algorithm design for real-world challenges.",
    subpoints: [
     
      
   
      "5⭐ in Problem Solving on HackerRank",
      "Strong Logic & Debugging Skills"
    ]
  },
  {
    emoji: "💻",
    title: "Programming",
    detail: "Hands-on coding experience across multiple languages and tools.",
    subpoints: [
      "C/C++/Java/Python",
      "OOP",

   
     
    ]
  },
  {
    emoji: "🤖",
    title: "AI / ML & Data Science",
    detail: "Exploring artificial intelligence, machine learning, and data insights.",
    subpoints: [
      " Basic Libraries",
      " Learning Data Science Tools",
      "Learning AI/ML Tools"
    ]
  }
];

function createSkillCards() {
  const grid = document.getElementById("skillsGrid");
  skills.forEach(skill => {
    const card = document.createElement("div");
    card.className = "skill-card";

    let subList = "<ul class='subpoints'>";
    skill.subpoints.forEach(point => {
      subList += `<li>${point}</li>`;
    });
    subList += "</ul>";

    card.innerHTML = `
      <div class="emoji-circle">
        <span class="emoji">${skill.emoji}</span>
      </div>
      <div class="title">${skill.title}</div>
      ${subList}
    `;
    card.onclick = () => showModal(skill.title, skill.detail, skill.subpoints);
    grid.appendChild(card);
  });
}

function showModal(title, description, subpoints) {
  document.getElementById("modalTitle").textContent = title;

  const descriptionElem = document.getElementById("modalDescription");
  descriptionElem.innerHTML = `<p>${description}</p><ul>`;
  subpoints.forEach(point => {
    descriptionElem.innerHTML += `<li>${point}</li>`;
  });
  descriptionElem.innerHTML += `</ul>`;

  document.getElementById("skillModal").style.display = "block";
}

function closeModal() {
  document.getElementById("skillModal").style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("skillModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

window.onload = createSkillCards;
