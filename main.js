// ===== Data (edit these) =====
const competitions = [
  { title: "AMC 10", org: "MAA", year: "2023, 2024", role: "Contestant", details: "Awarded Honor Roll distinction.", tags: ["Math"], link: "" },
  { title: "AIME", org: "MAA", year: "2024, 2025", role: "Qualifier", details: "Invitation based on AMC score.", tags: ["Math"], link: "" },
  { title: "USACO", org: "USACO", year: 2025, role: "Silver", details: "Competitive algorithmic programming", tags: ["Programming"], link: "https://usaco.guide/" },
  { title: "HMMT", org: "Harvard–MIT", year: 2025, role: "Participant", details: "Team round + guts round.", tags: ["Math"], link: "https://www.hmmt.org/" },
  { title: "CMIMC", org: "Carnegie Mellon", year: 2025, role: "Participant", details: "Proof-based problems.", tags: ["Math"], link: "https://pumac.princeton.edu/" },
  { title: "Speech & Debate", org: "NSDA / OHSSL", year: 2025, role: "Competitor", details: "Multiple varsity tournaments.", tags: ["Speech"], link: "" },
];

const projects = [
  { name: "DFS Visualizer", desc: "Interactive graph traversal visualizer with step-by-step states.", tech: ["Python", "NetworkX", "Flask"], link: "#" },
  { name: "Contest Toolkit", desc: "Utility scripts for input parsing, testing, and timing in USACO-style problems.", tech: ["C++", "Python"], link: "#" },
  { name: "Right-Triangle Embeddings", desc: "Mini write-up + demo showing cosine similarity with triangles.", tech: ["HTML", "JS"], link: "#" },
];

const posts = [
  { title: "How cosine similarity feels like a right triangle", date: "2025-04-14", tags: ["ML", "Geometry"], blurb: "A visual way to remember dot products and angles.", link: "#" },
  { title: "Why DFS order matters in contest problems", date: "2025-06-10", tags: ["Algorithms"], blurb: "Tricks for trees vs general graphs.", link: "#" }
];

// ===== Helpers =====
function chip(text){
  return `<span class="inline-flex items-center rounded-full border border-neutral-300 bg-white px-2.5 py-0.5 text-[11px]">${text}</span>`
}

function toggleRaw(id){
  const el = document.getElementById(id);
  if(!el) return;
  el.classList.toggle('hidden');
}

// ===== Renderers =====
function renderCompetitions(){
  const container = document.getElementById('comps');
  if(!container) return;
  container.innerHTML = competitions.map(c => `
    <article class="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div class="flex items-center justify-between gap-3">
        <h3 class="font-semibold">${c.title}</h3>
        <span class="text-xs text-neutral-600">${c.year}</span>
      </div>
      <p class="mt-1 text-sm text-neutral-700">${c.org} — ${c.role}</p>
      <p class="mt-2 text-sm text-neutral-700">${c.details}</p>
      <div class="mt-3 flex flex-wrap gap-1.5">${(c.tags||[]).map(chip).join('')}</div>
      ${c.link ? `<a class="mt-3 inline-block text-sm text-blue-700 hover:underline" href="${c.link}" target="_blank" rel="noopener">Learn more</a>` : ''}
    </article>
  `).join('');
  const raw = document.getElementById('compsRaw');
  if(raw) raw.textContent = JSON.stringify(competitions, null, 2);
}

function renderProjects(){
  const grid = document.getElementById('projectsGrid');
  if(!grid) return;
  grid.innerHTML = projects.map(p => `
    <article class="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <h3 class="font-semibold">${p.name}</h3>
      <p class="mt-2 text-sm text-neutral-700">${p.desc}</p>
      <div class="mt-3 flex flex-wrap gap-1.5">${(p.tech||[]).map(chip).join('')}</div>
      ${p.link ? `<a class="mt-3 inline-block text-sm text-blue-700 hover:underline" href="${p.link}" target="_blank" rel="noopener">View</a>` : ''}
    </article>
  `).join('');
  const raw = document.getElementById('projectsRaw');
  if(raw) raw.textContent = JSON.stringify(projects, null, 2);
}

function renderResume(){
  const eduList = document.getElementById('eduList');
  const expList = document.getElementById('expList');
  const skillsList = document.getElementById('skillsList');
  const awardsList = document.getElementById('awardsList');

  if(eduList) eduList.innerHTML = resume.education.map(e => `
    <li>
      <div class="flex items-center justify-between"><span class="font-medium">${e.school}</span><span class="text-xs text-neutral-600">${e.span}</span></div>
      <p class="mt-1 text-sm text-neutral-700">${e.details}</p>
    </li>`).join('');

  if(expList) expList.innerHTML = resume.experience.map(x => `
    <li>
      <div class="flex items-center justify-between"><span class="font-medium">${x.title} — ${x.org}</span><span class="text-xs text-neutral-600">${x.span}</span></div>
      <ul class="mt-1 list-disc list-inside text-sm text-neutral-700">${x.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
    </li>`).join('');

  if(skillsList) skillsList.innerHTML = resume.skills.map(chip).join('');
  if(awardsList) awardsList.innerHTML = resume.awards.map(a => `<li class="text-sm text-neutral-700">${a}</li>`).join('');

  const raw = document.getElementById('resumeRaw');
  if(raw) raw.textContent = JSON.stringify(resume, null, 2);
}

function renderPosts(){
  const grid = document.getElementById('postsGrid');
  if(!grid) return;
  grid.innerHTML = posts.map(p => `
    <article class="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div class="flex items-center justify-between gap-3">
        <h3 class="font-semibold">${p.title}</h3>
        <span class="text-xs text-neutral-600">${new Date(p.date).toLocaleDateString()}</span>
      </div>
      <p class="mt-2 text-sm text-neutral-700">${p.blurb}</p>
      <div class="mt-3 flex flex-wrap gap-1.5">${(p.tags||[]).map(chip).join('')}</div>
      ${p.link ? `<a class="mt-3 inline-block text-sm text-blue-700 hover:underline" href="${p.link}" target="_blank" rel="noopener">Read</a>` : ''}
    </article>
  `).join('');
  const raw = document.getElementById('postsRaw');
  if(raw) raw.textContent = JSON.stringify(posts, null, 2);
}

// ===== Init =====
(function init(){
  renderCompetitions();
  renderProjects();
  renderResume();
  renderPosts();
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
})();
