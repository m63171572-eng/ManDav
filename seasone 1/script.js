function submit() {
    let searchInput = document.getElementById("search").value.trim().toLowerCase();
    let products = document.querySelectorAll(".products > div");
    let found = false;

    if (searchInput === "") {
        showAlert("Please enter something to search!");
        return;
    }

    products.forEach(product => {
        let text = product.innerText.toLowerCase();

        if (text.includes(searchInput)) {
            product.style.display = "block";
            found = true;
        } else {
            product.style.display = "none";
        }
    });

    if (!found) {
        showAlert("No results found!");
    }
}

function showAlert(message) {
    Swal.fire({
        title: message,
        confirmButtonText: "OK",
        confirmButtonColor: "#6366f1",
        background: "#111827",
        color: "#ffffff",
        backdrop: "rgba(0,0,0,0.7)"
    });
}

function buy(item, price) {
    showAlert("You have bought " + item + " for $" + price);
}

function buy1(item, price) {
    buy(item, price);
}

function buy2(item, price) {
    buy(item, price);
}

function buy3(item, price) {
    buy(item, price);
}

function buy4(item, price) {
    buy(item, price);
}

function buy5(item, price) {
    buy(item, price);
}

function buy6(item, price) {
    buy(item, price);
}

function manDavBook() {
    showAlert("You have selected the ManDav book. Price: $5");
}

function nike() {
    showAlert("You have selected Nike Shoes. Price: $150");
}

function perfume() {
    showAlert("You have selected Perfume. Price: $50");
}

function adidaslook() {
    showAlert("You have selected Adidas look. Price: $300");
}

function Iphone18() {
    showAlert("You have selected Iphone18. Price: $1300");
}

function laptop() {
    showAlert("You have selected Laptop. Price: $830");
}

function backpack() {
    showAlert("You have selected Backpack. Price: $30");
}

function viewDetails(item) {

    let details = {
        "ManDav book": "Product: ManDav Book | Price: $5 | Category: Education | Type: English Workbook",
        "Nike Shoes": "Product: Nike Shoes | Price: $150 | Category: Footwear | Brand: Nike",
        "Perfume": "Product: Perfume | Price: $50 | Category: Beauty | Type: Fragrance",
        "Adidas look": "Product: Adidas Look | Price: $300 | Category: Clothing | Brand: Adidas",
        "Iphone18": "Product: Iphone 18 | Price: $1300 | Category: Electronics | Type: Smartphone",
        "Laptop": "Product: Laptop | Price: $830 | Category: Electronics | Type: Portable Computer",
        "Backpack": "Product: Backpack | Price: $30 | Category: Accessories | Type: School Backpack"
    };

    if (details[item]) {
        showAlert(details[item]);
    } else {
        showAlert("Product details not found!");
    }
}

function question() {
    Swal.fire({
        title: "For Questions",
        text: "Contact us for more information.",
        confirmButtonText: "OK",
        confirmButtonColor: "#6366f1",
        background: "#111827",
        color: "white"
    });
}

function darkMode() {
    document.body.style.backgroundColor = "#111";
    document.body.style.color = "white";
}

function lightMode() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}

function login() {
    Swal.fire({
        title: "Log In",
        html: `
            <input id="username" class="swal2-input" placeholder="Username">

            <div style="position:relative; width:100%;">
                <input id="password"
                    type="password"
                    class="swal2-input"
                    placeholder="Password"
                    style="padding-right:45px;">

                <span id="eye"
                    onclick="togglePassword()"
                    style="
                        position:absolute;
                        right:35px;
                        top:50%;
                        transform:translateY(-50%);
                        cursor:pointer;
                        font-size:20px;
                        color:inherit;
                    ">🙈</span>
            </div>
        `,
        confirmButtonText: "Log In",
        confirmButtonColor: "#6366f1",
        background: "#111827",
        color: "white",
        showCancelButton: true,

        preConfirm: () => {
            let username = document.getElementById("username").value.trim();
            let password = document.getElementById("password").value;

            if (!username || !password) {
                Swal.showValidationMessage("Please fill in all fields!");
                return false;
            }

            return { username: username };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Welcome!",
                text: "Hello, " + result.value.username,
                icon: "success",
                background: "#111827",
                color: "white"
            });
        }
    });
}

function togglePassword() {
    let password = document.getElementById("password");
    let eye = document.getElementById("eye");

    if (password.type === "password") {
        password.type = "text";
        eye.textContent = "👁️";
    } else {
        password.type = "password";
        eye.textContent = "🙈";
    }
}

let savedProducts = JSON.parse(localStorage.getItem("savedProducts")) || [];

function saveProduct(product) {

    if (savedProducts.includes(product)) {

        savedProducts = savedProducts.filter(item => item !== product);

        Swal.fire({
            title: "Removed!",
            text: product + " removed from Saved Products.",
            icon: "info",
            confirmButtonColor: "#6366f1"
        });

    } else {

        savedProducts.push(product);

        Swal.fire({
            title: "Saved!",
            text: product + " added to Saved Products.",
            icon: "success",
            confirmButtonColor: "#6366f1"
        });
    }

    localStorage.setItem("savedProducts", JSON.stringify(savedProducts));
}

function showSaved() {

    if (savedProducts.length === 0) {
        Swal.fire({
            title: "Saved Products",
            text: "You haven't saved any products yet!",
            icon: "info",
            confirmButtonColor: "#6366f1"
        });

        return;
    }

    let productsHTML = savedProducts.map(product => `
        <div style="
            background:#222;
            color:white;
            padding:12px;
            margin:8px 0;
            border-radius:8px;
        ">
            🔖 ${product}

            <button
                onclick="removeSavedProduct('${product}')"
                style="
                    float:right;
                    background:#e53935;
                    color:white;
                    border:none;
                    padding:5px 10px;
                    border-radius:5px;
                    cursor:pointer;
                ">
                Remove
            </button>
        </div>
    `).join("");

    Swal.fire({
        title: "Saved Products",
        html: productsHTML,
        confirmButtonText: "Close",
        confirmButtonColor: "#6366f1",
        background: "#111827",
        color: "white",
        width: "450px"
    });
}

function removeSavedProduct(product) {

    savedProducts = savedProducts.filter(item => item !== product);

    localStorage.setItem("savedProducts", JSON.stringify(savedProducts));

    showSaved();
}

document.addEventListener("DOMContentLoaded", function () {
    const reloadButton = document.querySelector(".buttonrel");

    if (reloadButton) {
        reloadButton.addEventListener("click", function () {
            window.location.href = window.location.href;
        });
    }
});

let purchasedCount = 0;
let totalMoney = 0;

function updateStatistics(price) {
    purchasedCount++;
    totalMoney += Number(price);

    document.getElementById("buyCount").textContent =
        "Purchased: " + purchasedCount;

    document.getElementById("totalMoney").textContent =
        "Total spent: $" + totalMoney;
}

function buy(item, price) {
    updateStatistics(price);
    showAlert("You bought " + item + " for $" + price);
}

function buy1(item, price) { buy(item, price); }
function buy2(item, price) { buy(item, price); }
function buy3(item, price) { buy(item, price); }
function buy4(item, price) { buy(item, price); }
function buy5(item, price) { buy(item, price); }
function buy6(item, price) { buy(item, price); }
function buy7(item, price) { buy(item, price); }


let currentDiscount = 0;
const originalPrices = [5, 150, 50, 300, 1300, 830, 30];
function applyPromocode() {
    const code = document.getElementById("promocode").value.trim();
    if (code === "Arman2017") {
        currentDiscount = 10;
    } 
    else if (code === "Manvel2012") {
        currentDiscount = 20;
    } 
    else {
        showAlert("Invalid promocode!");
        return;
    }
    document.querySelectorAll(".products strong").forEach((price, index) => {
        const newPrice = originalPrices[index] * (1 - currentDiscount / 100);
        price.innerText = "Price: $" + newPrice.toFixed(2);
    });
    showAlert(currentDiscount + "% discount applied to all products!");
}

function rateProduct(name, rating) {
    Swal.fire({
        title: name,
        text: "Your rating: " + rating + "/5 ⭐",
        icon: "success"
    });
    const stars = event.currentTarget.parentElement.querySelectorAll("button");
    stars.forEach((star, index) => {
        star.style.color = index < rating ? "#ffc107" : "#ccc";
    });
}

let ratings = {};
function rateProduct(name, rating, star) {
    ratings[name] = rating;
    let stars = star.parentElement.querySelectorAll("span");
    stars.forEach((item, index) => {
        item.style.color = index < rating ? "#ffc107" : "#ccc";
    });
}
function showRatings() {
    Swal.fire({
        title: "Product Ratings ⭐",
        html: `
            <div style="text-align:left;">
                ${Object.entries(ratings).map(([name, rating]) =>
                    `<p>${name}: ${"⭐".repeat(rating)}${"☆".repeat(5 - rating)} (${rating}/5)</p>`
                ).join("") || "<p>No ratings yet!</p>"}
            </div>
        `,
        confirmButtonText: "Close",
        confirmButtonColor: "#6366f1",
        background: "#111827",
        color: "white"
    });
}