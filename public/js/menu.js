
var burgers = [
    {
        "name": "Basic Burger",
        "img": "img/basic_burger_296.jpg",
        "kCal": 500,
        "attribute": "boring",
        "ingredients": ["bread", "meat"],
        "desc": "Not interesting"
    },
    {
        "name": "Fire Burger",
        "img": "img/fire_burger_296.jpg",
        "kCal": 550,
        "attribute": "hot",
        "ingredients": ["gluten", "lactose", "fire"],
        "desc": "Not for the faint of heart"
    },
    {
        "name": "Fancy Burger",
        "img": "img/fancy_burger_296.jpg",
        "kCal": 800,
        "attribute": "luxurious",
        "ingredients": ["truffles", "gold"],
        "desc": "Costs all your money"
    },
    {
        "name": "Mystery Burger",
        "img": "img/mystery_burger_296.png",
        "kCal": 0,
        "attribute": "mysterious",
        "ingredients": ["unknown substances"],
        "desc": "Green?"
    },
    {
        "name": "Black Ink Burger",
        "img": "img/black_ink_burger_296.png",
        "kCal": 400,
        "attribute": "black",
        "ingredients": ["black squid ink"],
        "desc": "No squids in burger"
    },
    {
        "name": "Sad Burger",
        "img": "img/sad_burger.jpg",
        "kCal": 200,
        "attribute": "sad",
        "ingredients": ["sadness"],
        "desc": "Do not buy this burger"
    },

]

var orderedBurgers = new Map();
for (var i = 0; i < burgers.length; i++)
{
    orderedBurgers.set(burgers[i], 0);
}