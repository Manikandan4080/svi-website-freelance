// Data for applications
const applications = [
    {
        icon: "ph ph-hand-soap", // phosphor icon class
        title: "Shampoos & Conditioners",
        desc: "Improves texture & spreadability, reduces frizz, and makes hair soft & manageable."
    },
    {
        icon: "ph ph-smiley",
        title: "Face Creams & Lotions",
        desc: "Adds body & creaminess, locks in moisture without greasiness."
    },
    {
        icon: "ph ph-drop",
        title: "Hair Styling Gels & Masks",
        desc: "Provides smooth gel consistency, protects hair from dryness & breakage."
    },
    {
        icon: "ph ph-drop",
        title: "Facial Masks & Serums",
        desc: "Suspends actives evenly, improves feel & spreadability."
    },
    {
        icon: "ph ph-hand-soap",
        title: "Liquid Soaps & Body Washes",
        desc: "Improves viscosity & flow, creates a silky feel, and stabilizes formula."
    },
];

function renderApplications() {
    const container = document.getElementById("page-content-section");
    if (!container) return;

    const cardsHTML = applications
        .map(
            (app) => `
            <div class="flex flex-col gap-[24px] border border-[#ECECEC] rounded-lg p-[24px] w-full duration-500"">
                <i class="${app.icon} text-[24px] transition-colors duration-500"></i>
                <h3 class="text-[20px] gilroy-regular font-bold transition-colors duration-500">${app.title}</h3>
                <p class="text-[16px] gilroy-regular text-[#6E6F70] transition-colors duration-500">${app.desc}</p>
            </div>
        `
        )
        .join("");

    // Wrap in a grid
    container.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${cardsHTML}
        </div>
    `;
}


// Run after DOM is ready
document.addEventListener("DOMContentLoaded", renderApplications);
