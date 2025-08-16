// Example tech news data (replace with your actual or fetched data)
const newsItems = [
  {
    title: "Apple announces new M4 processors at WWDC 2025",
    image: "https://via.placeholder.com/150?text=News1",
    date: "August 5, 2025",
    description: "Apple unveiled its next-generation silicon, bringing big performance jumps and efficiency to its upcoming devices."
  },
  {
    title: "Samsung unveils next-gen folding phone",
    image: "https://via.placeholder.com/150?text=News2",
    date: "August 4, 2025",
    description: "Samsung reveals its new flagship foldable, featuring an improved hinge, brighter display, and longer battery life."
  },
  {
    title: "Pixel 10 leaks hint at major camera upgrade",
    image: "https://via.placeholder.com/150?text=News3",
    date: "August 3, 2025",
    description: "Leaked renders and reports suggest that Google’s Pixel 10 Pro could feature a revolutionary 150MP sensor."
  }
];

function createNewsCard(item) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${item.image}" alt="${item.title}" />
    <span>
      <strong>${item.title}</strong><br>
      <small>${item.date}</small><br>
      <span>${item.description}</span>
    </span>
  `;
  return card;
}

function renderNews() {
  const newsList = document.getElementById('news-list');
  newsItems.forEach(item => {
    newsList.appendChild(createNewsCard(item));
  });
}

document.addEventListener('DOMContentLoaded', renderNews);
