document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "http://localhost:3007/items";

    fetch(apiUrl)
        .then(response => response.json()) //extract the json 
        .then(data => {
            console.log("Fetched Data:", data);
            
            const container = document.getElementById("hero-container");

            // Generate HTML string with inline styles
            let youNew = data.map(item => `
                <p style="background: lightblue; padding: 10px; margin: 5px; border-radius: 5px;">
                    <strong>Title:</strong> ${item.name} | <strong>ID:</strong> ${item.id}
                </p>
            `).join('')


            // join removes commas  , using map allow you to get the data easily you can place html in the the map




            container.innerHTML = youNew
        })
        .catch(error => console.error("Error fetching data:", error));
});


/* 
fetch(apiUrl)
Sends a request to the API . Returns a Promise that resolves to a Response object.
    

.then(response => response.json())
    
    Extracts the JSON body content from the response.
   
    .json() is also a Promise, so we need another .then() to handle the actual data.
    
    
    .then(data => {...})
    
    data now holds the parsed JSON from the API response.
    In this case, the API returns an array of todo objects.

    */ 



















// document.addEventListener("DOMContentLoaded", function () {
//     const apiUrl = "https://jsonplaceholder.typicode.com/todos"; // URL for multiple data entries

//     // Fetch data from API
//     fetch(apiUrl)
//         .then(response => response.json()) 
//         .then(data => {
//             console.log("Fetched Data:", data)
//             data.forEach(item => {
             
//                 document.getElementById("hero-title").innerHTML = `Title: ${item.title}`;
//                 document.getElementById("hero-status").innerHTML = `Title: ${item.id}`;
         
//             });
//         })
//         .catch(error => console.error("Error fetching data:", error));
// });

