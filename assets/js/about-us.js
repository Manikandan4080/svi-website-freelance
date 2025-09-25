const applicationsData = [
    "Food & Beverages",
    "Pharmaceuticals",
    "Cosmetics & Personal Care",
    "Oil & Gas (drilling & fracturing)",
    "Animal Nutrition",
    "Textiles, Paper, Mining & Construction",
];

const applicationsData2 = [
    "Cassia Tora Seed to Cassia Split processing",
    "Equipment for blending, drying, flaking, mixing, and processing other agricultural products",
];

const applicationsData3 = [
    "Industry Leadership - Recognized as India’s top and largest manufacturer of Guar Gum Equipment.",
    "Proven Expertise - Decades of experience in designing and delivering high-performance machinery.",
    "Global Reach - Over 300 installations in India and abroad, serving a growing international market.",
    "Trusted Relationships - Strong partnerships with suppliers, customers, and service providers.",
    "Skilled Team - Backed by an experienced and passionate team dedicated to innovation.",
    "Quality Commitment - Adherence to the highest standards of quality and customer satisfaction.",
    "Cutting-Edge Technology - Use of advanced technologies to ensure globally competitive equipment.",
    "Customization - Tailor-made solutions to meet client-specific requirements.",
    "Sustainability - Eco-friendly manufacturing practices supporting sustainable development.",
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
