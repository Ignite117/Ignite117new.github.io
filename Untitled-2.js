function updatePrice() {
    let s = document.getElementsByName("type");
    let select = s[0];
    let price = 0;
    let prices = {
        types: [1200, 3000, 5000],
        options: {
            2: 500,
        },
        checkboxes: {
            1: 250,
            2: 300,
            3: 450,
        }
    };
    price = prices.types[select.value - 1];
    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = (select.value == "2" ? "block" : "none");
    let radios = document.getElementsByName("options");
    radios.forEach(function(radio) {
        if (radio.checked) {
            let optionPrice = prices.options[radio.value];
            if (optionPrice !== undefined) {
                price += optionPrice;
            }
        }
    });
    let checkDiv = document.getElementById("checkboxes");
    checkDiv.style.display = (select.value == "1" || select.value == "2" ? "none" : "block");
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            let cPrice = prices.checkboxes[checkbox.name];
            price += cPrice;
        }
    });
    let count = document.getElementById("count").value;
    if(parseInt(count) < 0) {
        let Price = document.getElementById("price");
        Price.innerHTML = "Данные введены неправильно";
    }
    else {
        price *= count;
        if(select.value != "2") 
        {  
            if(select.value == "1") {
                price = prices.types[0] * count;
            }
        }
        else if(price/count-prices.types[select.value - 1] == 250 || price/count-prices.types[select.value - 1] == 750) {
            price -= 250 * count;
            }
            else if(price/count-prices.types[select.value - 1] == 300 || price/count-prices.types[select.value - 1] == 800) {
                price -= 300 * count;
            }
            else if(price/count-prices.types[select.value - 1] == 450 || price/count-prices.types[select.value - 1] == 950) {
                price -= 450 * count;
            }
            else if(price/count-prices.types[select.value - 1] == 550 || price/count-prices.types[select.value - 1] == 1050) {
                price -= 550 * count;
            }
            else if(price/count-prices.types[select.value - 1] == 750 || price/count-prices.types[select.value - 1] == 1250) {
                price -= 750 * count;
            }
            else if(price/count-prices.types[select.value - 1] == 700 || price/count-prices.types[select.value - 1] == 1200) {
                price -= 700 * count;
            }
            else if(price/count-prices.types[select.value - 1] == 1000 || price/count-prices.types[select.value - 1] == 1500) {
                price -= 1000 * count;
            }
        let Price = document.getElementById("price");
        Price.innerHTML = price + " рублей";
    }
}
window.addEventListener('DOMContentLoaded', function (event) {
    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = "none";
    let s = document.getElementsByName("type");
    let select = s[0];
    select.addEventListener("change", function(event) {
        updatePrice();
    });
    let count = document.getElementById("count");
    count.addEventListener("change", function(event) {
        updatePrice();
    });
    let radios = document.getElementsByName("options");
    radios.forEach(function(radio) {
        radio.addEventListener("change", function(event) {
            updatePrice();
        });
    });
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener("change", function(event) {
            updatePrice();
        });
    });
    updatePrice();
});