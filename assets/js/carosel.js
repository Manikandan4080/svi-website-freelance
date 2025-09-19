const images = [
  {
    title: "Food Grade Guar Gum",
    image: "assets/images/icecream.svg",
    alt: "Food Grade Guar Gum",
    link: "food-grade-guar-gum.html",
  },
  {
    title: "Cationic Guar",
    image: "assets/images/beverage.svg",
    alt: "Cationic Guar",
    link: "cationic-guar.html",
  },
  {
    title: "Guar Split",
    image: "assets/images/brioche-and-bread.svg",
    alt: "Guar Split",
    link: "guar-split.html",
  },
  {
    title: "Animal Feed",
    image: "assets/images/confectionary.svg",
    alt: "Animal Feed",
    link: "animal-feed.html",
  },
  {
    title: "Guar Churi",
    image: "assets/images/icecream.svg",
    alt: "Guar Churi",
    link: "guar-churi.html",
  },
  {
    title: "Oil & Gas Industry",
    image: "assets/images/beverage.svg",
    alt: "Oil & Gas Industry",
    link: "oil-gas-industry.html",
  },
  {
    title: "Equipments & Machineries",
    image: "assets/images/brioche-and-bread.svg",
    alt: "Equipments & Machineries",
    link: "equipments-and-machineries.html",
  },
];

const marqueeTrack = document.getElementById("marquee-track");

function renderImages() {
  const allImages = [...images, ...images, ...images, ...images]; // only 2 sets

  allImages.forEach((item) => {
    const link = document.createElement("a");
    link.href = item.link;
    link.className = "relative group w-[250px] md:w-[350px] h-[350px] md:h-[450px] flex-shrink-0 block overflow-hidden rounded-[4px]";

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.alt;
    img.className = "w-full h-full object-cover object-center";

    const fadeTop = document.createElement("div");
    fadeTop.className = "pointer-events-none absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/40 to-transparent z-10";

    const fadeBottom = document.createElement("div");
    fadeBottom.className = "pointer-events-none absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent z-10";

    const overlay = document.createElement("div");
    overlay.className = "absolute bottom-[20px] left-[20px] text-white text-[16px] font-semibold z-20 flex items-center gap-2";

    // Title span
    const titleSpan = document.createElement("span");
    titleSpan.textContent = item.title;
    overlay.appendChild(titleSpan);

    // Icon
    const icon = document.createElement("i");
    icon.className = "ph ph-arrow-up-right text-[18px] ml-1";
    overlay.appendChild(icon);

    link.appendChild(img);
    link.appendChild(fadeTop);
    link.appendChild(fadeBottom);
    link.appendChild(overlay);
    marqueeTrack.appendChild(link);
  });
}


renderImages();



renderImages();
