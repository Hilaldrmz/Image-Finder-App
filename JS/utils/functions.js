function runEventListeners() {
    form.addEventListener("submit", search);
    form.addEventListener("submit", clearInput);
}

function search(e) {
    for(i = 0; ImageColumns.length > i; i++)
    {
        clearColumn(ImageColumns[i]);
    }
    
    const value = searchInput.value.trim();
    fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
        method: "GET",
        headers: {
            Authorization: "Client-ID 4hvGhFG6UpzlYvtXWC2x6CKVcoaBful46EY2o2h1-n4"
        }
    })
    .then((res) => res.json())
    .then((data) => {
        // (data.results).forEach((image, index) => {
        //     console.log(image.urls.small);
        //     addImageToUl(image.urls.small, index);
        // });

        for(i =0; data.results.length > i; i++){
            console.log(data.results[i].urls.small);
            addImageToUl(data.results[i].urls.small, i);
        }
    })
    .catch((err) => console.log(err));

    e.preventDefault();
}

function addImageToUl(url, key) {
    let columnKey = (key % 4)+1;
    div = document.getElementById('column' + columnKey);
    // $('#column' + key);

    const img = document.createElement("img");
    img.setAttribute("src", url);

    div.appendChild(img);

}

function clearColumn(column)
{
    column.innerHTML = '';
}

function clearInput(e) {
    searchInput.value="";
}




