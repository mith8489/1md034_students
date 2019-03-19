/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
        el: '#app',
        data:
            {
                burgers: burgers,
                orderedBurgers: orderedBurgers,
                orderSubmitted: false,
                currentOrder: {
                    details: {
                        x: 0,
                        y: 0
                    },
                    orderItems: [],
                    personalDetails: {
                        name: "",
                        email: "",
                        payment: "",
                        gender: ""
                    }
                },
                currentOrderId: 0,
                orders: {}
            }
        ,
        created: function () {
            socket.on('initialize', function (data) {
                this.orders = data.orders;
                this.currentOrderId = this.getNext();
                console.log(this.orders);
                console.log(this.currentOrder);
            }.bind(this));

            socket.on('currentQueue', function (data) {
                this.orders = data.orders;
                console.log(this.orders);
            }.bind(this));
        }
        ,
        methods:
            {
                setIngredients: function (burger) {

                },
                toggleCheckmark: function (burger) {

                    if (event.target.innerHTML === "✓") {
                        event.target.innerHTML = " ";
                        orderedBurgers.set(burger, 0);
                    } else {
                        event.target.innerHTML = "✓";
                        orderedBurgers.set(burger, 1);
                    }
                }
                ,
                getNext: function () {
                    var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
                        return Math.max(last, next);
                    }, 0);
                    console.log(lastOrder);
                    return lastOrder + 1;
                },
                displayOrder: function (event) {
                    var offset = {
                        x: event.currentTarget.getBoundingClientRect().left,
                        y: event.currentTarget.getBoundingClientRect().top
                    };
                    this.currentOrder.details.x = event.clientX - 10 - offset.x;
                    this.currentOrder.details.y = event.clientY - 10 - offset.y;
                }
                ,
                addOrder: function (event) {
                    this.buttonClick();
                    this.currentOrderId = this.getNext();
                    this.orderedBurgers.forEach(this.addBurgersToOrder);
                    socket.emit("addOrder", {
                        orderId: this.currentOrderId,
                        details: {
                            x: this.currentOrder.details.x,
                            y: this.currentOrder.details.y
                        },
                        orderItems: this.currentOrder.orderItems,
                        personalDetails: this.currentOrder.personalDetails
                    });
                    this.resetCurrentOrder();
                }
                ,
                addBurgersToOrder: function (value, key) {
                    if (value > 0) {
                        this.currentOrder.orderItems.push(key.name)
                    }
                }
                ,
                resetCurrentOrder: function()
                {
                    this.currentOrder = {
                        details: {
                            x: 0,
                                y: 0
                        },
                        orderItems: [],
                        personalDetails: {
                            name: "",
                            email: "",
                            payment: "",
                            gender: ""
                        }
                    }
                }
                ,
                buttonClick: function () {
                    var fullName = document.getElementById("fullname").value;
                    var email = document.getElementById("email").value;
                    var paymentMethod = document.getElementById("paymentmethod").value;
                    var gender = getGender();
                    this.currentOrder.personalDetails.name = fullName;
                    this.currentOrder.personalDetails.email = email;
                    this.currentOrder.personalDetails.payment = paymentMethod;
                    this.currentOrder.personalDetails.gender = gender;

                    var formValues =
                        {
                            name: fullName,
                            email: email,
                            paymentMethod: paymentMethod,
                            gender: gender,
                            coordinates: this.currentOrder.details.x + ", " + this.currentOrder.details.y
                        };
                    /*    console.log(typeof formValues);
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

                        orderedBurgers.forEach(printBurgerQtys);*/
                    buildOrderListDisplay();
                    buildCustomerDetailsDisplay(formValues);
                    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
                }
            }
    })
;

