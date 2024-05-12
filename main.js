const API ='https://clubwebdev-backend.vercel.app/api/news'
const display = document.getElementById('displayfetch');
const inputLimit = document.getElementById('limit');
const inputTotalPages = document.getElementById('totalPages');
const inputTitle = document.getElementById('title');

async function fetchData() {
    try {
        let url = API;
        const limit = inputLimit.value;
        const totalPages = inputTotalPages.value;
        const title = inputTitle.value;
    
        if (limit) { url += `?limit=${limit}`; }
        if (totalPages) { url += `?totalPages=${totalPages}`; }
        if (title) { url += `?title=${title}`; }

        const response = await fetch(url);
        const data = await response.json();
        const results = data.data;

        display.innerHTML = results.map((result) => {
            return (
            `
                <div class="style1">
                    <img src="${result.imageURL}"></img>
                    <b>${result.title}</b>
                    <p>${result.content}</p>
                    <p>By: ${result.author}</p>
                </div>
                <br/>
            `
            )
        }).join('');
        console.log(url);
    }
    catch (error) { console.log(error); }
}

inputLimit.addEventListener('input', fetchData);
inputTotalPages.addEventListener('input', fetchData);
inputTitle.addEventListener('input', fetchData);

fetchData();