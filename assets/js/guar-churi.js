const specsData = [
    { label: "MOISTURE", value: "6 - 8%" },
    { label: "ASH", value: "4 - 5%" },
    { label: "PROTEIN", value: "43 - 45%" },
    { label: "OIL", value: "4 - 6%" },
    { label: "FIBER", value: "3 - 5%" },
];

// Render specifications table
function renderSpecificationsTable() {
    const container = document.getElementById("specifications-table");
    if (!container) return;

    container.innerHTML = `
    <div class="bg-gradient-to-r from-[#203B14] to-[#16a34a] text-white px-8 py-6">
      <div class="grid grid-cols-2 gap-8">
        <div class="text-center">
          <h3 class="text-xl font-bold tracking-wide">PARTICULARS</h3>
        </div>
        <div class="text-center">
          <h3 class="text-xl font-bold tracking-wide">SPECIFICATIONS</h3>
        </div>
      </div>
    </div>
    <div class="bg-white">
      ${specsData
          .map(
              (row, i) => `
        <div class="grid grid-cols-2 gap-8 px-4 py-3 border-b border-gray-100 row-hover animate-fade-in animate-delay-${
            i + 2
        }">
          <div class="flex items-center justify-center">
            <span class="spec-badge">${row.label}</span>
          </div>
          <div class="flex items-center justify-center">
            <div class="value-highlight">${row.value}</div>
          </div>
        </div>
      `,
          )
          .join("")}
    </div>
  `;
}

// ============================
// Applications List Data
// ============================
const applicationsData = [
    "High Protein Content – Boosts growth & health in livestock.",
    "Natural & Preservative-Free – 100% safe & wholesome.",
    "Versatile Usage – Can be used standalone or in blends.",
    "Enhanced Nutrition – Improves feed efficiency & balance.",
    "Cost-Effective – Economical replacement for other protein sources.",
];

const applicationsData2 = [
    "Enhanced Digestibility → Aids better nutrient absorption.",
    "Sustainable → Efficient use of guar seeds, reducing waste.",
    "Improved Livestock Performance → Supports growth rates & milk yield.",
];

// Render applications list
function renderApplicationsList(target, data) {
    const container = document.getElementById(target);
    if (!container) return;

    container.innerHTML = `
    <ul class="list-disc leading-[36px] text-[14px] ml-10 md:ml-0">
      ${data.map((item) => `<li>${item}</li>`).join("")}
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
