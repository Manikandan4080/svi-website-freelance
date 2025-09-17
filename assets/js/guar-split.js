// Data for applications
const applications = [
    {
        icon: "ph ph-drop", // phosphor icon class
        title: "Excellent Water-Binding Capacity",
        desc: "Enhances moisture retention & long-term stability"
    },
    {
        icon: "ph ph-sparkle",
        title: "High Viscosity & Gel Strength",
        desc: "Ensures superior thickening & binding"
    },
    {
        icon: "ph ph-fire",
        title: "Thermal Stability & pH Resilience",
        desc: "Reliable under varying conditions"
    },
    {
        icon: "ph ph-leaf",
        title: "Non-Ionic & Natural",
        desc: "Integrates seamlessly into formulations"
    },
    {
        icon: "ph ph-drop",
        title: "Film-Forming & Suspension",
        desc: "Improves texture, dispersion & uniformity"
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


const specsData = [
  { label: "GUM CONTENTS", value: "80-85%" },
  { label: "SPLITS", value: "95-98%" },
  { label: "MINERAL MATTER (ASH)", value: "1.5% MAX" },
  { label: "FIBER", value: "1.5 - 2.0% MAX" },
  { label: "PROTEIN", value: "5% MAX" }
];

// Render specifications table
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
  "Food Processing (thickener, stabilizer, binder)",
  "Pharmaceuticals (tablet binder, controlled release)",
  "Oil & Gas (drilling & fracturing fluids)",
  "Textiles & Paper (sizing, finishing agent)",
  "Cosmetics & Personal Care (viscosity enhancer)"
];

// Render applications list
function renderApplicationsList() {
  const container = document.getElementById("applications-list");
  if (!container) return;

  container.innerHTML = `
    <ul class="list-disc leading-[36px]  text-[14px] ml-10 md:ml-0">
      ${applicationsData.map(item => `<li class="gilroy-regular">${item}</li>`).join("")}
    </ul>
  `;
}

// ============================
// Auto-render when DOM loads
// ============================
document.addEventListener("DOMContentLoaded", () => {
  renderSpecificationsTable();
  renderApplicationsList();
});

// Expose utils if needed
window.GuarSplitUtils = {
  renderSpecificationsTable,
  renderApplicationsList
};
