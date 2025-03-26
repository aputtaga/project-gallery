document.addEventListener('DOMContentLoaded', () => {
    fetch('projects.json')
      .then(response => response.json())
      .then(data => {
        const taskNav = document.getElementById('taskMenu');
        data.forEach(project => {
          const li = document.createElement('li');
          li.textContent = project.title;
          li.onclick = () => {
            fetch(project.file)
              .then(res => res.text())
              .then(html => {
                document.getElementById('displayArea').innerHTML = html;
              });
          };
          taskNav.appendChild(li);
        });
      })
      .catch(error => {
        console.error('Error loading projects:', error);
      });
  });