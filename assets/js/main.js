// Load navbar into all pages
function loadComponent(id, file) {
    fetch(file)
        .then((res) => res.text())
        .then((data) => {
            document.getElementById(id).innerHTML = data;

            // After navbar is injected, attach JS for toggle
            const btn = document.getElementById("menu-btn");
            const menu = document.getElementById("menu");
            if (btn && menu) {
                btn.addEventListener("click", () => {
                    menu.classList.toggle("hidden");
                });
            }
        });
}

// Call it for navbar
loadComponent("navbar", "components/navbar.html");

// Load timeline with proper initialization
function loadTimeline(id, file) {
    fetch(file)
        .then((res) => res.text())
        .then((data) => {
            document.getElementById(id).innerHTML = data;
            
            // Wait for images and content to load
            setTimeout(() => {
                initTimeline();
            }, 500); // Increased delay to ensure full rendering
        });
}

function initTimeline() {
    const timelineContainer = document.getElementById("timeline-container");
    const timelineContent = document.getElementById("timeline-content");
    const timelineProgress = document.getElementById("timeline-progress");
    const timelineLine = document.getElementById("timeline-line");

    if (!timelineContainer || !timelineContent || !timelineProgress || !timelineLine) {
        return;
    }
    

    function updateTimeline() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        
        // Get the timeline container's position relative to the document
        const containerRect = timelineContainer.getBoundingClientRect();
        const containerTop = scrollTop + containerRect.top;
        const containerHeight = containerRect.height;
        
        // Calculate the actual timeline content height (this is key!)
        const actualTimelineHeight = timelineContent.offsetHeight;
        
        // Define when the animation should start and end
        const animationStart = containerTop - windowHeight * 0.8; // Start when container enters viewport
        const animationEnd = containerTop + actualTimelineHeight - windowHeight * 0.2; // End when reaching the end
        
        let progress = 0;
        
        if (scrollTop > animationStart) {
            if (scrollTop < animationEnd) {
                progress = (scrollTop - animationStart) / (animationEnd - animationStart);
            } else {
                progress = 1;
            }
        }
        
        // Clamp progress between 0 and 1
        progress = Math.max(0, Math.min(1, progress));
        
        // Use the actual timeline line height for the progress bar
        const progressBarMaxHeight = actualTimelineHeight;
        const currentHeight = progress * progressBarMaxHeight;
        
        // Apply the styles
        timelineProgress.style.height = `${currentHeight}px`;
        timelineProgress.style.opacity = progress > 0 ? 1 : 0;
        
        // Debug logging (remove in production)
        if (progress > 0 && progress < 1) {
        }
    }

    // Throttled scroll handler
    let scrollTimer = null;
    function handleScroll() {
        if (scrollTimer) clearTimeout(scrollTimer);
        
        scrollTimer = setTimeout(() => {
            updateTimeline();
        }, 10); // Small delay for smooth performance
    }

    // Event listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", () => {
        setTimeout(updateTimeline, 100);
    });

    // Initial update
    updateTimeline();
}

// Alternative simpler approach - scroll based on timeline items
function initTimelineSimple() {
    const timelineContainer = document.getElementById("timeline-container");
    const timelineProgress = document.getElementById("timeline-progress");
    const timelineItems = document.querySelectorAll('#timeline-content > div'); // All timeline items
    
    if (!timelineContainer || !timelineProgress || timelineItems.length === 0) {
        return;
    }

    function updateProgress() {
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        // Find how many timeline items are in view
        let visibleItems = 0;
        let totalProgress = 0;
        
        timelineItems.forEach((item, index) => {
            const itemRect = item.getBoundingClientRect();
            const itemCenter = scrollTop + itemRect.top + (itemRect.height / 2);
            const containerTop = timelineContainer.offsetTop;
            
            // Check if item center has passed the middle of the viewport
            if (scrollTop + (windowHeight / 2) >= itemCenter) {
                visibleItems = index + 1;
            }
        });
        
        // Calculate progress based on visible items
        const progress = visibleItems / timelineItems.length;
        const clampedProgress = Math.max(0, Math.min(1, progress));
        
        // Set the height based on the container height
        const maxHeight = timelineContainer.offsetHeight * 0.8; // 80% of container height
        const targetHeight = clampedProgress * maxHeight;
        
        timelineProgress.style.height = `${targetHeight}px`;
        timelineProgress.style.opacity = clampedProgress > 0 ? 1 : 0;
        
    }

    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateProgress();
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", requestTick);
    
    // Initial update
    setTimeout(updateProgress, 100);
}

// Load timeline - choose which initialization method to use
loadTimeline("timeline", "components/timeline.html");

// Uncomment the line below to use the simpler approach instead:
// setTimeout(() => initTimelineSimple(), 1000);