const _apiUrl = "https://thatcopy.pw/catapi/rest/";

async function btn_fetch_api_Click() {
    const img = document.getElementById("img");
    img.src = await fetchNewCat();
}

async function fetchNewCat() {
    btn.setAttribute("disabled", "disabled");
    return await fetch(_apiUrl)
        .then(async response => {
            let data = await response.json();
            return data.webpurl;
        })
        .catch(error => {
            console.error(error.message);
            return null;
        })
        .then(result => {
            btn.removeAttribute("disabled");
            return result;
        });
}

const btn = document.getElementById("btn_fetch_api");
btn.addEventListener("click", btn_fetch_api_Click);

btn_fetch_api_Click();