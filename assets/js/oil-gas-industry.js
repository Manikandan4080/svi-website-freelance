const applicationsData = [
    "Oil Well Fracturing and Stimulation – Used to create high-viscosity gels in fracturing fluids that help fracture rock formations and release trapped oil and gas.",
"Drilling Fluids – Stabilizes, thickens, and suspends drilling muds, aiding in efficient removal of drill cuttings.",
"Cooling & Lubrication of Drill Bits – Provides viscosity that reduces friction, cools drill bits, and prevents wear and tear.",
"Cementing Slurries – Enhances cement bonding and ensures well integrity during cementing operations."
];

const applicationsData2 = [
    "Drilling Fluids – Maintains viscosity, controls water loss, and improves drilling efficiency.",
"Lubrication – Acts as a lubricant, minimizing equipment friction and extending machinery life.",
"Stabilization & Thickening – Ensures uniform consistency in various mining operations and processes.",
];

const applicationsData3 = [
    "Rapid Hydration – Achieves high viscosity within minutes, crucial for time-sensitive operations.",
"High Viscosity Control – Ensures stability and performance in drilling fluids and fracturing gels.",
"Cost-Effective – Reduces operational costs by minimizing the need for additional additives.",
"Environmentally Friendly – 100% natural and biodegradable, making it a sustainable industrial solution.",
"Enhanced Performance – Improves process efficiency, productivity, and operational reliability.",
];

// Render applications list
function renderApplicationsList(target, data) {
    const container = document.getElementById(target);
    if (!container) return;

    container.innerHTML = `
    <ul class="list-disc leading-[36px] text-[14px] ml-5 md:ml-0">
      ${data.map((item) => `<li class="gilroy-regular">${item}</li>`).join("")}
    </ul>
  `;
}

// ============================
// Auto-render when DOM loads
// ============================
document.addEventListener("DOMContentLoaded", () => {
    renderApplicationsList("applications-list", applicationsData);
    renderApplicationsList("applications-list-2", applicationsData2);
    renderApplicationsList("applications-list-3", applicationsData3);
});

// Expose utils if needed
window.GuarSplitUtils = {
    renderApplicationsList,
};
