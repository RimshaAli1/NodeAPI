const country_link = "https://potential-waffle-7vw655gwxw5jhw5qj-6006.app.github.dev/country";

fetch(country_link).then(respone=>{ 
    if(!respone.ok)
        throw new Error("Failed to fetch data from given URL");
    return respone.json();
}).then(data=>{
    const tbody = document.querySelector("#countrytable tbody");

    data.forEach(c=>{
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${c.country_id}</td>
        <td>${c.country_name}</td>
        <td>${c.region_id}</td>
        `; 

        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});