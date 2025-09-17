// Data for applications
const applications = [
    {
        icon: "ph ph-drop", // phosphor icon class
        title: "Excellent Water-Binding Capacity",
        desc: "Enhances moisture retention & long-term stability",
    },
    {
        icon: "ph ph-sparkle",
        title: "High Viscosity & Gel Strength",
        desc: "Ensures superior thickening & binding",
    },
    {
        icon: "ph ph-fire",
        title: "Thermal Stability & pH Resilience",
        desc: "Reliable under varying conditions",
    },
    {
        icon: "ph ph-leaf",
        title: "Non-Ionic & Natural",
        desc: "Integrates seamlessly into formulations",
    },
    {
        icon: "ph ph-drop",
        title: "Film-Forming & Suspension",
        desc: "Improves texture, dispersion & uniformity",
    },
];

// Function to render cards
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

const specsData = [
    { label: "MOISTURE", value: "6-8%" },
    { label: "ASH", value: "4-5%" },
    { label: "PROTEIN", value: "50%" },
    { label: "FAT", value: "6 - 7%" },
    { label: "FIBER", value: "6 - 8%" },
    { label: "SILICA", value: "0.0 - 0.1%" },
];

function renderSpecificationsTable() {
  const container = document.getElementById("specifications-table");
  if (!container) return;

  container.innerHTML = `
    <div class="bg-gradient-to-r from-[#203B14] to-[#16a34a] text-white p-[16px] rounded-t-[8px]">
      <div class="grid grid-cols-2 gap-8">
        <div class="text-center">
          <h3 class="text-[12px] font-bold tracking-wide text-center">PARTICULARS</h3>
        </div>
        <div class="text-center">
          <h3 class="text-[12px] font-bold tracking-wide text-center">SPECIFICATIONS</h3>
        </div>
      </div>
    </div>
    <div class="bg-white">
      ${specsData
        .map(
          (row, i) => `
        <div class="grid grid-cols-2 gap-8 px-4 py-3 border-b border-gray-100 row-hover animate-fade-in animate-delay-${i + 2}">
          <div class="flex text-[12px] items-center justify-center text-center">
            <span class="spec-badge">${row.label}</span>
          </div>
          <div class="flex text-[12px] items-center justify-center text-center">
            <div class="value-highlight">${row.value}</div>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
}

// ============================
// Applications List Data
// ============================
const applicationsData = [
    "Enhanced Digestibility – Roasting improves absorption of nutrients.",
    "Superior Nutritional Value – Rich in amino acids & minerals.",
    "Economical – A cost-effective alternative to soybean or fishmeal.",
    "Sustainable – Utilizes the whole guar plant, reducing waste.",
    "Performance Booster – Supports growth, productivity & feed efficiency.",
];

const applicationsData2 = [
    "High Digestibility: Up to 82% nutrient uptake",
    "Protein Content: Valuable for poultry, broilers & laying hens",
    "Economical Alternative: Reduces feed costs by replacing soybean meal",
    "Enhanced Milk Production: Improves yield & fat content in cattle",
    "Sustainability: Supports eco-friendly farming practices",
];

// Render applications list
function renderApplicationsList(target, data) {
    const container = document.getElementById(target);
    if (!container) return;

    container.innerHTML = `
    <ul class="list-disc leading-[36px] text-[14px] ml-10 md:ml-0">
      ${data.map((item) => `<li class="gilroy-regular">${item}</li>`).join("")}
    </ul>
  `;
}

// ============================
// Auto-render when DOM loads
// ============================
document.addEventListener("DOMContentLoaded", () => {
    renderSpecificationsTable();
    renderApplicationsList("applications-list", applicationsData);
    renderApplicationsList("applications-list-2", applicationsData2);
});

// Expose utils if needed
window.GuarSplitUtils = {
    renderSpecificationsTable,
    renderApplicationsList,
};
