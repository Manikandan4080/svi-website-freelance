const images = [
    {
        title: "Food Grade Guar Gum",
        image: "assets/images/food-guar-carousel.svg",
        alt: "Food Grade Guar Gum",
        link: "food-grade-guar-gum.html",
    },
    {
        title: "Cationic Guar",
        image: "assets/images/cationic-guar-carousel.svg",
        alt: "Cationic Guar",
        link: "cationic-guar.html",
    },
    {
        title: "Guar Split",
        image: "assets/images/guar-split-carousel.svg",
        alt: "Guar Split",
        link: "guar-split.html",
    },
    {
        title: "Animal Feed (Guar Korma)",
        image: "assets/images/animal-feed-carousel.svg",
        alt: "Animal Feed (Guar Korma)",
        link: "guar-kroma.html",
    },
    {
        title: "Animal feed (Guar Churi)",
        image: "assets/images/guar-churi-carousel.svg",
        alt: "Animal feed (Guar Churi)",
        link: "guar-churi.html",
    },
    {
        title: "Oil & Gas Industry",
        image: "assets/images/oil-and-gas-carousel.svg",
        alt: "Oil & Gas Industry",
        link: "oil-gas-industry.html",
    },
    {
        title: "Equipments & Machineries",
        image: "assets/images/guar-gum-equipment-carousel.svg",
        alt: "Equipments & Machineries",
        link: "equipments-and-machineries.html",
    },
];

const marqueeTrack = document.getElementById("marquee-track");

function renderImages() {
    images.forEach((item) => {
        const link = document.createElement("a");
        link.href = item.link;
        link.className =
            "relative group w-[250px] md:w-[350px] h-[350px] md:h-[450px] flex-shrink-0 block overflow-hidden rounded-[4px]";

        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.alt;
        img.className = "w-full h-full object-cover object-center";

        const fadeTop = document.createElement("div");
        fadeTop.className =
            "pointer-events-none absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/40 to-transparent z-10";

        const fadeBottom = document.createElement("div");
        fadeBottom.className =
            "pointer-events-none absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent z-10";

        const overlay = document.createElement("div");
        overlay.className =
            "absolute bottom-[20px] left-[20px] text-white text-[16px] font-semibold z-20 flex items-center gap-1";

        const titleSpan = document.createElement("span");
        titleSpan.textContent = item.title;
        overlay.appendChild(titleSpan);

        const icon = document.createElement("i");
        icon.className = "ph ph-arrow-up-right text-[18px]";
        overlay.appendChild(icon);

        link.appendChild(img);
        link.appendChild(fadeTop);
        link.appendChild(fadeBottom);
        link.appendChild(overlay);
        marqueeTrack.appendChild(link);
    });
}

renderImages();

function createImageCard(item) {
    const link = document.createElement("a");
    link.href = item.link;
    link.className =
        "relative group w-[250px] md:w-[350px] h-[350px] md:h-[450px] flex-shrink-0 block overflow-hidden rounded-[4px]";

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.alt;
    img.className = "w-full h-full object-cover object-center";

    const fadeTop = document.createElement("div");
    fadeTop.className =
        "pointer-events-none absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/40 to-transparent z-10";

    const fadeBottom = document.createElement("div");
    fadeBottom.className =
        "pointer-events-none absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent z-10";

    const overlay = document.createElement("div");
    overlay.className =
        "absolute bottom-[20px] left-[20px] text-white text-[16px] font-semibold z-20 flex items-center gap-1";

    const titleSpan = document.createElement("span");
    titleSpan.textContent = item.title;
    overlay.appendChild(titleSpan);

    const icon = document.createElement("i");
    icon.className = "ph ph-arrow-up-right text-[18px]";
    overlay.appendChild(icon);

    link.appendChild(img);
    link.appendChild(fadeTop);
    link.appendChild(fadeBottom);
    link.appendChild(overlay);

    return link;
}

function initializeCarousel() {
    const track = document.getElementById("carousel-track");

    // Create first group
    const group1 = document.createElement("div");
    group1.className = "carousel-group";

    // Create second group (duplicate for seamless loop)
    const group2 = document.createElement("div");
    group2.className = "carousel-group";
    group2.setAttribute("aria-hidden", "true");

    // Add all images to both groups
    images.forEach((item) => {
        group1.appendChild(createImageCard(item));
        group2.appendChild(createImageCard(item));
    });

    // Add groups to track
    track.appendChild(group1);
    track.appendChild(group2);
}

// Initialize the carousel when the page loads
document.addEventListener("DOMContentLoaded", initializeCarousel);
