const refs = {
  gallery: document.querySelector(".js-gallery"),
};

const pictures = [
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/0/700/460",
    alt: "laptop",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/1/700/460",
    alt: "developer",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/10/700/460",
    alt: "forest",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/100/700/460",
    alt: "beach",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/1000/700/460",
    alt: "mountain",
  },
];

const createGalleryCard = (item) => {
  return `<li class="gallery-item">
  <a href="#">
    <img src="${item.url}" alt="${item.alt}" width="${item.with}" height="${item.height}">
  </a>
</li>`;
};

const createGallery = pictures.map((item) => createGalleryCard(item)).join("");

refs.gallery.innerHTML = createGallery;
