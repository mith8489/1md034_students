/**function Burger(name, imgLink, attribute, ingredients, kcal, desc) {
    this.name = name;
    this.imgLink = imgLink;
    this.attribute = attribute;
    this.ingredients = ingredients;
    this.kcal = kcal;
    this.desc = desc;
}
*/
function printInfo(burger) {
    console.log("Name: " + burger.name);
    console.log("Calorie count: " + burger.kcal);
}

console.log(typeof burgers)

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
