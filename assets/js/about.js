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
    let hasAnimated = false;

    // Prepare the counter elements but don't animate yet
    const numberElements = [];
    aboutCounters.forEach((item) => {
        const wrapper = document.createElement("div");
        wrapper.className = "text-left border-b-2 pb-[24px] border-[#0000001A] w-full ";

        const number = document.createElement("h2");
        number.className = "text-[36px] md:text-[54px] font-bold font-[700] text-nowrap";
        number.textContent = "0";

        const subtitle = document.createElement("p");
        subtitle.className = "text-[14px] uppercase tracking-wide font-[700]";
        subtitle.textContent = item.subtitle;

        wrapper.appendChild(number);
        wrapper.appendChild(subtitle);
        container.appendChild(wrapper);

        numberElements.push({ number, item });
    });

    // Intersection Observer to trigger animation
    const aboutSection = document.getElementById("about-id");
    if (aboutSection) {
        const observer = new window.IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        hasAnimated = true;
                        numberElements.forEach(({ number, item }) => {
                            animateCounter(number, item.count, item.countText || "");
                        });
                        obs.disconnect();
                    }
                });
            },
            {
                threshold: 0.3, // Adjust as needed
            }
        );
        observer.observe(aboutSection);
    }
});
