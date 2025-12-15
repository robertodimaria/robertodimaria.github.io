---
layout: article
title: Project Details
key: page-project-detail
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

<div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">

<div id="project-content">
  <p>Loading project details...</p>
</div>

<div style="text-align: center; margin: 3rem 0;">
  <a href="/portfolio.html" class="view-all-button">← Back to Portfolio</a>
</div>

</div>

<script src="{{ '/projectsData.js' | relative_url }}"></script>
<script>
  // Get project ID from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id');
  
  // Find the project in projectsData
  const project = projectsData.find(p => p.id === projectId);
  
  // Display project content
  const contentDiv = document.getElementById('project-content');
  
  if (project) {
    document.title = project.title + ' - Roberto Di Maria';
    contentDiv.innerHTML = `
      <h1 style="color: #e0e0e0; margin-bottom: 2rem;">${project.title}</h1>
      <div class="project-full-content">
        ${project.fullContent}
      </div>
    `;
  } else {
    contentDiv.innerHTML = `
      <h1 style="color: #e0e0e0;">Project Not Found</h1>
      <p>Sorry, the requested project could not be found.</p>
      <p><a href="/portfolio.html" style="color: #e0e0e0;">Return to Portfolio</a></p>
    `;
  }
</script>

<style>
.project-full-content {
  color: #e0e0e0;
}

.project-full-content h2 {
  color: #ffffff;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  border-bottom: 2px solid #3a3a3a;
  padding-bottom: 0.5rem;
}

.project-full-content h3 {
  color: #e0e0e0;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  font-size: 1.4rem;
}

.project-full-content h4 {
  color: #e0e0e0;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.project-full-content p {
  color: #b0b0b0;
  line-height: 1.7;
  margin-bottom: 1rem;
}

.project-full-content ul,
.project-full-content ol {
  color: #b0b0b0;
  line-height: 1.7;
  margin-bottom: 1rem;
  padding-left: 2rem;
}

.project-full-content li {
  margin-bottom: 0.5rem;
}

.project-full-content figure {
  margin: 2rem auto;
  text-align: center;
  max-width: 100%;
}

.project-full-content figure img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: 8px;
  border: 1px solid #3a3a3a;
}

.project-full-content figcaption {
  margin-top: 0.75rem;
  font-size: 0.9rem;
  color: #888;
  font-style: italic;
}

.project-full-content strong {
  color: #e0e0e0;
}

.project-full-content code {
  background-color: #2a2a2a;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  color: #e0e0e0;
}

.project-full-content table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  color: #b0b0b0;
}

.project-full-content table th,
.project-full-content table td {
  border: 1px solid #3a3a3a;
  padding: 0.75rem;
  text-align: left;
}

.project-full-content table th {
  background-color: #2a2a2a;
  color: #e0e0e0;
  font-weight: bold;
}

.project-full-content table tr:nth-child(even) {
  background-color: #252525;
}
</style>
