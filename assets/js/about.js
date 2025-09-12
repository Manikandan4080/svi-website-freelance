const aboutCounters = [
    {
        count: 23,
        subtitle: "Years of Legacy",
    },
    {
        count: 45,
        subtitle: "Global Markets Served",
    },
    {
        count: 15000,
        countText: " MT",
        subtitle: "Annual Production Capacity",
    },
];

function animateCounter(element, target, suffix = "", duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16); // ~60fps
    const counter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start).toLocaleString() + suffix;
            requestAnimationFrame(counter);
        } else {
            element.textContent = target.toLocaleString() + "+" + suffix;
        }
    };
    counter();
}

window.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("about-left-section");

    aboutCounters.forEach((item) => {
        const wrapper = document.createElement("div");
        wrapper.className = "text-left";

        const number = document.createElement("h2");
        number.className = "text-4xl font-bold text-black";
        number.textContent = "0";

        const subtitle = document.createElement("p");
        subtitle.className = "text-sm uppercase tracking-wide text-gray-700 mt-2";
        subtitle.textContent = item.subtitle;

        wrapper.appendChild(number);
        wrapper.appendChild(subtitle);
        container.appendChild(wrapper);

        animateCounter(number, item.count, item.countText || "");
    });
});
