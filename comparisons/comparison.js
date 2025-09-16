// Sample comparison data
const comparisons = [
  {
    title: "Smartphones: Brand A vs Brand B",
    description: "A detailed comparison of features, battery life, camera quality, and price.",
    link: "#"
  },
  {
    title: "Laptops: Gaming vs Productivity",
    description: "Compare the best gaming and productivity laptops to suit your needs.",
    link: "#"
  },
  {
    title: "Wireless Headphones: Noise Cancelling Showdown",
    description: "Explore top noise cancelling headphones and which one is better for you.",
    link: "#"
  }
];

function renderComparisonList() {
  const container = document.getElementById('comparisonList');
  container.innerHTML = '';

  comparisons.forEach(item => {
    const div = document.createElement('div');
    div.className = 'comparison-item';

    div.innerHTML = `
      <h2>${item.title}</h2>
      <p>${item.description}</p>
      <a href="${item.link}" target="_blank" rel="noopener noreferrer">Read More</a>
    `;

    container.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', () => renderComparisonList());

