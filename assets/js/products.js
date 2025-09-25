const applications = [
    {
        icon: "ph ph-drop",
        title: "Food Grade Guar Gum",
        image:"./assets/images/beverage.svg",
        link: "./food-grade-guar-gum.html",
        desc: "A multifunctional hydrocolloid that improves texture, stability, shelf life, and quality in food products.",
    },
    {
        icon: "ph ph-sparkle",
        title: "Cationic Guar",
        image:"./assets/images/brioche-and-bread.svg",
        link: "./cationic-guar.html",
        desc: "Premium conditioning and moisture retention for personal care and cosmetic products.",
    },
    {
        icon: "ph ph-fire",
        title: "Guar Split",
        image:"./assets/images/icecream.svg",
        link: "./guar-split.html",
        desc: "Refined guar split for industrial and food applications, rich in viscosity and binding properties.",
    },
    {
        icon: "ph ph-leaf",
        title: "Animal Feed (Guar Korma)",
        image:"./assets/images/timeline-img-1.svg",
        link: "./animal-feed.html",
        desc: "High-protein, sustainable feed ingredient for livestock and poultry.",
    },
    {
        icon: "ph ph-cookie",
        title: "Guar Churi",
        image:"./assets/images/beverage.svg",
        link: "./guar-churi.html",
        desc: "Nutritious by-product of guar gum processing, used as animal feed supplement.",
    },
    {
        icon: "ph ph-flame",
        title: "Oil & Gas Industry",
        image:"./assets/images/timeline-img-1.svg",
        link: "./oil-gas-industry.html",
        desc: "Guar gum derivatives for enhanced oil recovery, fracturing, and drilling fluids.",
    },
    {
        icon: "ph ph-gear",
        title: "Equipments & Machineries",
        image:"./assets/images/confectionary.svg",
        link: "./equipments-and-machineries.html",
        desc: "Advanced processing equipment and machinery for guar gum production and related industries.",
    },
];

// Function to render cards
function renderApplications() {
    const container = document.getElementById("products");
    if (!container) return;

    const cardsHTML = applications
        .map(
            (app) => `
            <a href="${app.link}" class="flex flex-col gap-[26px] border border-[#ECECEC] rounded-lg p-[24px] w-full relative overflow-hidden group bg-white text-black hover:text-white transition-all duration-500">
                <div class="absolute inset-0 z-0 transition-all duration-500 opacity-0 group-hover:opacity-100" style="background-image: url('${app.image}'); background-size: cover; background-position: center;"></div>
                <div class="absolute inset-0 z-10 transition-all duration-500 opacity-0 group-hover:opacity-100 bg-black/65"></div>
                <div class="relative z-20 flex flex-col gap-[16px] transition-colors duration-500">
                    <i class="${app.icon} text-[24px]"></i>
                    <h3 class="text-[20px] gilroy-regular font-normal">${app.title}</h3>
                    <p class="text-[16px] gilroy-regular">${app.desc}</p>
                </div>
            </a>
        `
        )
        .join("");

    // Wrap in a grid
    container.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${cardsHTML}
        </div>
    `;
}


document.addEventListener("DOMContentLoaded", () => {
    renderApplications();
});


