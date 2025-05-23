
let berita = [
  { title: "Teknologi AI Terbaru", category: "Teknologi", content: "Perkembangan AI kini semakin cepat dengan model baru yang lebih canggih." },
  { title: "Timnas Menang 3-0", category: "Olahraga", content: "Kemenangan telak membawa timnas ke final piala regional." },
  { title: "Film Lokal Raih Penghargaan", category: "Hiburan", content: "Film Indonesia kembali harumkan nama bangsa di festival internasional." },
  { title: "Startup Baru di Indonesia", category: "Teknologi", content: "Inovasi teknologi dari anak bangsa dapat pendanaan dari luar negeri." },
  { title: "Kompetisi Lari Jakarta", category: "Olahraga", content: "Ribuan peserta meramaikan event lari tahunan." }
];

function displayNews(newsList) {
  const container = document.getElementById("news-container");
  container.innerHTML = "";
  newsList.forEach(item => {
    const article = document.createElement("div");
    article.className = "article";
    article.innerHTML = `<h2>${item.title}</h2><p><strong>${item.category}</strong> - ${item.content}</p>`;
    container.appendChild(article);
  });
}

function filterCategory(category) {
  if (category === "Semua") {
    displayNews(berita);
  } else {
    const filtered = berita.filter(b => b.category === category);
    displayNews(filtered);
  }
}

function searchNews() {
  const keyword = document.getElementById("search").value.toLowerCase();
  const filtered = berita.filter(b => b.title.toLowerCase().includes(keyword) || b.content.toLowerCase().includes(keyword));
  displayNews(filtered);
}

window.onload = () => displayNews(berita);
