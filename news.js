const newsItems = [
  {
    title: "Apple launches iPhone 17 series globally",
    image: "https://via.placeholder.com/150?text=iPhone17",
    date: "September 9, 2025",
    description: "Apple unveiled the iPhone 17 lineup including the Air, Pro, and Pro Max—each featuring A19 chip, improved cameras, and enhanced battery life.",
    url: "iphone17.html"  // Link to news detail page
  },
  {
    title: "Apple announces new M4 processors at WWDC 2025",
    image: "https://via.placeholder.com/150?text=News1",
    date: "August 5, 2025",
    description: "Apple unveiled its next-generation silicon, bringing big performance jumps and efficiency to its upcoming devices.",
    url: "news/m4-processors.html"
  },
  {
    title: "Samsung unveils next-gen folding phone",
    image: "https://via.placeholder.com/150?text=News2",
    date: "August 4, 2025",
    description: "Samsung reveals its new flagship foldable, featuring an improved hinge, brighter display, and longer battery life.",
    url: "news/samsung-fold.html"
  },
  {
    title: "Pixel 10 leaks hint at major camera upgrade",
    image: "https://via.placeholder.com/150?text=News3",
    date: "August 3, 2025",
    description: "Leaked renders and reports suggest that Google’s Pixel 10 Pro could feature a revolutionary 150MP sensor.",
    url: "news/pixel10-leaks.html"
  }
];

function createNewsCard(item) {
  // Wrap entire card inside an anchor tag that redirects on click
  const card = document.createElement('a');
  card.className = 'card';
  card.href = item.url;
  card.target = '_blank'; // optional: open in new tab
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
