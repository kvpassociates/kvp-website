// =========================
// MOBILE MENU
// =========================

function toggleMenu() {
    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");
}


// =========================
// PRODUCT SEARCH
// =========================

function searchProducts() {

    const searchInput =
        document.getElementById("productSearch");

    const searchValue =
        searchInput.value.toLowerCase().trim();

    const products =
        document.querySelectorAll(".product-card");

    products.forEach(function(product) {

        const productName =
            product.querySelector("h3")
            .textContent
            .toLowerCase();

        const productDescription =
            product.querySelector("p")
            .textContent
            .toLowerCase();

        if (
            productName.includes(searchValue) ||
            productDescription.includes(searchValue)
        ) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }

    });
}


// =========================
// WHATSAPP ENQUIRY
// =========================

function sendEnquiry(productName) {

    const phoneNumber = "917510933313";

    const message =
        `Hello KVP ASSOCIATES, I am interested in the product: ${productName}. Please provide more details.`;

    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
}


// =========================
// CLOSE MOBILE MENU
// =========================

document.querySelectorAll("#navMenu a").forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .getElementById("navMenu")
            .classList.remove("active");

    });

});
