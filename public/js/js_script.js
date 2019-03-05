

function getGender()
{
    var genders = document.getElementsByName("gender");
    var gender;

    for(var i = 0; i < genders.length; i++) {
        if(genders[i].checked)
            gender = genders[i].value;
    }
    return gender;
}

function buildOrderListDisplay()
{
    var orderDisplay = document.getElementById("order-display");
    var orderList = document.getElementById("order-list");
    while (orderList.hasChildNodes())
    {
        orderList.removeChild(orderList.firstChild);
    }

    function displayBurgerOrder(value, key)
    {
        if (value > 0)
        {
            var burgerOrder = document.createElement("li");
            burgerOrder.innerText = value + " x " + key.name;
            orderList.appendChild(burgerOrder);
        }
    }

    orderedBurgers.forEach(displayBurgerOrder);
    orderDisplay.style.display = "grid";
    orderDisplay.style.gridTemplateColumns = "220px auto 220px";

}

function buildCustomerDetailsDisplay(formValues)
{
    var nameDisplay = document.getElementById("name-display");
    var emailDisplay = document.getElementById("email-display");
    var paymentMethodDisplay = document.getElementById("payment-display");
    var genderDisplay = document.getElementById("gender-display");

    nameDisplay.innerHTML = formValues[0];
    emailDisplay.innerHTML = formValues[1];
    paymentMethodDisplay.innerHTML = formValues[2];
    genderDisplay.innerHTML = formValues[5];
}


