// Data for applications
const applications = [
    {
        icon: "ph ph-ice-cream", // phosphor icon class
        title: "Ice Cream & Frozen Desserts",
        desc: "Prevents ice crystals, enhances creaminess & stability."
    },
    {
        icon: "ph ph-brandy",
        title: "Soft Drinks & Beverages",
        desc: "Ensures consistent viscosity & suspension."
    },
    {
        icon: "ph ph-beer-bottle",
        title: "Chocolate & Flavored Milk",
        desc: "Prevents separation, improves shelf life."
    },
    {
        icon: "ph ph-cookie",
        title: "Baked Goods (Bread, Biscuits, Cakes)",
        desc: "Improves softness, moisture retention & shelf life."
    },
    {
        icon: "ph ph-bowl-steam",
        title: "Ham, Sausages & Processed Meat",
        desc: "Acts as binder, improves juiciness & firmness."
    },
    {
        icon: "ph ph-cheese",
        title: "Cheese & Spreads",
        desc: "Provides smooth, spreadable consistency."
    },
    {
        icon: "ph ph-fish",
        title: "Canned / Retorted Foods",
        desc: "Maintains texture & stability in processed foods."
    },
    {
        icon: "ph ph-beer-bottle",
        title: "Mayonnaise, Ketchup & Sauces",
        desc: "Stabilizes emulsions, improves consistency."
    },
    {
        icon: "ph ph-bowl-steam",
        title: "Noodles & Pasta",
        desc: "Improves elasticity, firmness & cooking tolerance."
    }
    ,
    {
        icon: "ph ph-thermometer-cold",
        title: "Frozen Food Products",
        desc: "Enhances shelf life & texture stability."
    },
    {
        icon: "ph ph-cow",
        title: "Dairy Products",
        desc: "Improves creaminess & consistency."
    },
    {
        icon: "ph ph-bowl-food",
        title: "Sauces & Salad Dressings",
        desc: "Ensures emulsion stability & texture."
    },
    {
        icon: "ph ph-cookie",
        title: "Confectionery",
        desc: "Controls viscosity, enhances glazing & moisture retention."
    },
    {
        icon: "ph ph-paw-print",
        title: "Pet Food Applications",
        desc: "Adds texture, digestibility & shelf stability."
    }
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
