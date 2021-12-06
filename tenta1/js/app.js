let imageContainer = document.querySelector("#imagecontainer");

fetch("../images.json")
    .then((response) => response.json())
    .then((imageData) => {
        imageData.forEach((image) => {
            let img = document.createElement("img");
            let pTag = document.createElement("p");
            let pTagDesc = document.createElement("p");

            img.src = image.url;
            img.alt = image.alt;
            img.description = image.description;
            img.dataset.description = image.description;
            pTag.innerHTML = image.title;
            pTagDesc.innerHTML = image.description;
            img.classList = "targetImage";

            imageContainer.appendChild(img);
            imageContainer.appendChild(pTag);
            imageContainer.appendChild(pTagDesc);
        });
    });


document.addEventListener('click', function(e) {
    if (e.target.classList.contains("targetImage")) {
        let source = e.target.getAttribute("src");
        let imgPopup = document.querySelector("#divpopup");
        imgPopup.style.display = "block";
        console.log(source);
        document.querySelector("#image-popup").src = source;
        let select = document.getElementById("imagedesc");
        let getData = e.target.dataset.description;
        select.innerText = getData;
    }
});

let imagePopup = document.querySelector("#divpopup");

btn.onclick = function () {
    imagePopup.style.display = "none";
};