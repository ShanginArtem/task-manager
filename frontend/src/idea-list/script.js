const projects = [
    {
      title: 'Ruality - игра для помощи иностранным студентам',
      status: 'опубликована',
      dates: ['01.01.2025', '01.01.2025'],
      ratings: [5.0, 5.0]
    },
    {
      title: 'AR-Mysей',
      status: 'на согласовании',
      dates: ['01.01.2025', '01.01.2025'],
      ratings: [3.5]
    }
  ];
  
  function render() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <h1>СПИСОК ИДЕЙ : ${projects.length}</h1>
      <input type="text" id="search" placeholder="Поиск...">
      <select id="filter">
        <option value="все">все</option>
        <option value="опубликована">опубликована</option>
      </select>
      ${projects.map(project => `
        <div class="project">
          <h3>${project.title}</h3>
          <div>Статус: ${project.status}</div>
          ${project.dates.map(date => `<div>Дата: ${date}</div>`).join('')}
        </div>
      `).join('')}
    `;
  }
  
  render();