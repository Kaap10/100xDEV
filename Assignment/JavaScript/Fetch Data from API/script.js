document.getElementById("fetchData").addEventListener("click", fetchData);

async function fetchData() {
    try {
        // Fetch data from API
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        // Check if the response is okay
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Convert response to JSON
        const data = await response.json();

        // Display data in table
        displayData(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayData(posts) {
    const tableBody = document.querySelector("#dataTable tbody");
    tableBody.innerHTML = ""; // Clear existing data

    posts.slice(0, 10).forEach(post => { // Show only first 10 posts
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.body}</td>
        `;

        tableBody.appendChild(row);
    });
}
