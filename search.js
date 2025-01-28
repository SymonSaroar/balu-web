document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("search");

    const resultsContainer = document.getElementById("results");
    function sanitizeInput(input) {
        return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    if (query) {
        // Simple search algorithm
        const sanitizedQuery = sanitizeInput(query);
        console.log(sanitizedQuery);
        const pages = [
            {
                title: "Home",
                url: "/index.html",
                content: "Welcome to BALU Technology",
            },
            {
                title: "Design For Testability",
                url: "/design-for-testability.html",
                content: "Design For Testability services",
            },
            {
                title: "Test Engineering",
                url: "/test-engineering.html",
                content: "Test Engineering services",
            },
            {
                title: "Modeling & Simulation",
                url: "/modeling-and-simulation.html",
                content: "Modeling & Simulation services",
            },
            {
                title: "Embedded Solutions",
                url: "/embedded-systems.html",
                content: "Embedded Solutions services",
            },
            {
                title: "Firmware Development",
                url: "/firmware-development.html",
                content: "Firmware Development services",
            },
            {
                title: "CFD as a Service",
                url: "/cfd-service.html",
                content: "CFD as a Service",
            },
        ];

        const results = pages.filter((page) =>
            page.content.toLowerCase().includes(sanitizedQuery.toLowerCase())
        );

        if (results.length > 0) {
            results.forEach((result) => {
                const resultItem = document.createElement("div");
                resultItem.classList.add("result-item");
                resultItem.innerHTML = `<h2><a href="${result.url}">${result.title}</a></h2><p>${result.content}</p>`;
                resultsContainer.appendChild(resultItem);
            });
        } else {
            resultsContainer.innerHTML = "<p>No results found.</p>";
        }
    } else {
        resultsContainer.innerHTML = "<p>Please enter a search term.</p>";
    }
});
