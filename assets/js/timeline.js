//  // Timeline scroll animation (unchanged)
//     const timelineContainer = document.getElementById("timeline-container");
//     const timelineContent = document.getElementById("timeline-content");
//     const timelineProgress = document.getElementById("timeline-progress");

//     console.log(timelineContainer)

//     function updateTimeline() {
//         const containerHeight = timelineContainer.offsetHeight;
//         const contentHeight = timelineContent.offsetHeight;

//         // Calculate scroll progress
//         const scrollTop =
//             window.pageYOffset || document.documentElement.scrollTop;
//         const containerTop = timelineContainer.offsetTop;

//         // Calculate progress based on scroll position
//         const startOffset = containerTop + containerHeight * 0.1;
//         const endOffset = containerTop + containerHeight * 0.5;

//         let progress = 0;
//         let opacity = 0;

//         if (scrollTop >= startOffset) {
//             if (scrollTop <= endOffset) {
//                 progress =
//                     (scrollTop - startOffset) / (endOffset - startOffset);
//                 opacity = Math.min(progress * 10, 1);
//             } else {
//                 progress = 1;
//                 opacity = 1;
//             }
//         }

//         // Apply the animation
//         const maxHeight = contentHeight * 0.8;
//         timelineProgress.style.height = progress * maxHeight + "px";
//         timelineProgress.style.opacity = opacity;
//         console.log(maxHeight);
//     }

//     // Throttle scroll events for better performance
//     // Throttle scroll events with requestAnimationFrame
//     let ticking = false;

//     function requestTick() {
//         if (!ticking) {
//             requestAnimationFrame(() => {
//                 updateTimeline();
//                 ticking = false; // reset after update
//             });
//             ticking = true;
//         }
//     }

//     window.addEventListener("scroll", requestTick);
//     window.addEventListener("resize", requestTick);

//     // Initial call
//     updateTimeline();

//     // Smooth scrolling for better effect
//     document.addEventListener("DOMContentLoaded", () => {
//         updateTimeline();
//     });




    