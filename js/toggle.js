
document.addEventListener("DOMContentLoaded", function () {

    const toggles = document.querySelectorAll(".timeline-toggle");

    toggles.forEach(function (toggle) {

        const targetId = toggle.getAttribute("data-target");
        const content = document.getElementById(targetId);

        // Ensure initial state height
        if (content.classList.contains("expanded")) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = "0px";
        }

        toggle.addEventListener("click", function () {

            const isCollapsed = content.classList.contains("collapsed");

            // OPTIONAL: Close other sections (clean UI)
            toggles.forEach(function (otherToggle) {
                const otherTarget = document.getElementById(
                    otherToggle.getAttribute("data-target")
                );

                if (otherToggle !== toggle) {
                    otherTarget.classList.remove("expanded");
                    otherTarget.classList.add("collapsed");
                    otherTarget.style.maxHeight = "0px";

                    otherToggle.classList.remove("expanded");
                    otherToggle.classList.add("collapsed");
                }
            });

            if (isCollapsed) {

                // Expand
                content.classList.remove("collapsed");
                content.classList.add("expanded");
                content.style.maxHeight = content.scrollHeight + "px";

                toggle.classList.remove("collapsed");
                toggle.classList.add("expanded");

            } else {

                // Collapse
                content.classList.remove("expanded");
                content.classList.add("collapsed");
                content.style.maxHeight = "0px";

                toggle.classList.remove("expanded");
                toggle.classList.add("collapsed");
            }
        });

    });

});
