
var orderedBurgers = new Map();
for (var i = 0; i < burgers.length; i++)
{
    orderedBurgers.set(burgers[i], 0);
}

window.onload = addBurgers(burgers);

function addBurgers(burgerArray) {
    for (var i = 0; i < burgerArray.length; i++) {
        var burger = burgerArray[i];

        addBurger(burger);
    }
}

function addBurger(burger) {
    var burgerGrid = document.getElementById("burger-grid");
    var burgerBox = document.createElement("div");
    burgerBox.classList.add("box");

    var burgerHeadline = document.createElement("h3");
    burgerHeadline.innerHTML = burger.name;
    burgerBox.appendChild(burgerHeadline);

    var checkMark = document.createElement("p");
    checkMark.classList.add("check-mark");
    checkMark.innerHTML = " ";
    checkMark.addEventListener("click", function () {
        addOrRemoveBurger(checkMark, burger);
    });
    burgerBox.appendChild(checkMark);

    var burgerImage = document.createElement("img");
    burgerImage.setAttribute("src", burger.img);
    burgerImage.setAttribute("height", "296");
    burgerImage.setAttribute("width", "444");
    burgerImage.setAttribute("alt", burger.name);
    burgerBox.appendChild(burgerImage);

    var burgerDescList = document.createElement("ul");
    var burgerKcal = document.createElement("li");
    var burgerAttribute = document.createElement("li");
    var burgerIngredients = setIngredients(burger);
    var burgerDesc = document.createElement("li");


    burgerKcal.innerHTML = burger.kCal + " kCal";
    burgerAttribute.innerHTML = "Very " + burger.attribute + " burger";
    burgerDesc.innerHTML = burger.desc;

    burgerDescList.append(burgerKcal, burgerAttribute, burgerIngredients, burgerDesc);

    burgerBox.appendChild(burgerDescList);

    burgerGrid.appendChild(burgerBox);
}

function addOrRemoveBurger(checkMark, burger)
{
    if (checkMark.innerHTML !== " ")
    {
        checkMark.innerHTML = " ";
        orderedBurgers.set(burger, (orderedBurgers.get(burger) - 1));
        console.log(burger.name + " removed from order");
    }
    else
    {
        checkMark.innerHTML = "✓";
        orderedBurgers.set(burger, (orderedBurgers.get(burger) + 1));
        console.log(burger.name + " added to order");
    }
}

function setIngredients(burger) {
    var ingredientList = document.createElement("li");
    var ingredients = "Contains ";

    for (var i = 0; i < burger.ingredients.length; i++) {
        ingredients = ingredients + "<span class='ingredient'>" + burger.ingredients[i] + "</span>";
        if (i === (burger.ingredients.length - 2))
        {
            ingredients = ingredients + " and ";
        }
        else
        if (i !== (burger.ingredients.length - 1))
        {
            ingredients = ingredients + ", ";
        }
    }
    ingredientList.innerHTML = ingredients;
    return ingredientList;
}

var submitButton = document.getElementById("submit-button");

submitButton.onclick = buttonClick;

function buttonClick()
{
    var fullName = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var street = document.getElementById("street").value;
    var house = document.getElementById("house").value;
    var paymentMethod = document.getElementById("paymentmethod").value;
    var gender = getGender();

    var formValues = [fullName, email, street, house, paymentMethod, gender];
    console.log(typeof formValues);
    for (var i = 0; i < formValues.length; i++)
    {
        console.log(formValues[i]);
    }
    console.log("Burgers ordered:");

    function printBurgerQtys(value, key)
    {
        if (value > 0)
        {
            console.log(`${key.name}: ${value}`);
        }
    }

    orderedBurgers.forEach(printBurgerQtys);
/**
    for (var j = 0; j < orderedBurgers.getAllKeys().length; j++)
    {
        var burger = orderedBurgers.getAllKeys()[j];
        var quantity = orderedBurgers.get(burger);
        if (quantity > 0)
        {
            console.log(burger.name + " x " + quantity);
        }
    }*/
}

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


