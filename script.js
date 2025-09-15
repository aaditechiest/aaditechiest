const comparisons = [
  {
    img: 'images/asusA15.jpg',
    title: 'best laptop deals',
    link: 'laptops_to _buy _in_april_2025_under_60000_with 3050_graphiccard.html'
  },
  {
    img: 'images/oneplusnordce4.jpg',
    title: 'mobile under 20000',
    link: 'mobile_under_20000.html'
  },
  {
    img: 'images/frontech.jpg',
    title: 'best keyboards',
    link: 'affordable_rbg_branded_keyboards.html'
  },
  {
    img: 'images/speaker.png',
    title: 'White Portable New',
    link: '#'
  }
];

const latestPosts = [
  { title: 'Best Gaming Laptops 2025', link: 'laptops_to _buy _in_april_2025_under_60000_with 3050_graphiccard.html' },
  { title: 'mobile under 20000', link: 'mobile_under_20000.html' },
  { title: 'affordabble keyboards', link: 'affordable_rbg_branded_keyboards.html' }
];

function renderComparisons() {
  const container = document.getElementById('comparisonGrid');
  container.innerHTML = '';
  comparisons.forEach(card => {
    const div = document.createElement('div');
    div.className = 'comparison-card';
    div.onclick = () => { window.open(card.link, '_blank'); };
    div.innerHTML = `
      <img src="${card.img}" alt="${card.title}" class="card-img" />
      <div class="card-title">${card.title}</div>
    `;
    container.appendChild(div);
  });
}
function renderLatest() {
  const ul = document.getElementById('latestList');
  ul.innerHTML = '';
  latestPosts.forEach(post => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${post.link}" target="_blank">${post.title}</a>`;
    ul.appendChild(li);
  });
}
document.addEventListener('DOMContentLoaded',()=>{
  renderComparisons();
  renderLatest();
});
