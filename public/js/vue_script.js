var submitbutton = new Vue({
    el: '#app',
    data:
        {
            burgers: burgers,
            orderedBurgers: orderedBurgers,
            orderSubmitted: false,
            name: "TEST",
            email: "",
            street: "",
            streetNo: 0,
            paymentOption: null,
            gender: null
        },
    methods:
        {
            setIngredients: function (burger)
            {

            },
            toggleCheckmark: function (burger)
            {

                if (event.target.innerHTML === "✓")
                {
                    event.target.innerHTML = " ";
                    orderedBurgers.set(burger, 0);
                }
                else
                {
                    event.target.innerHTML = "✓";
                    orderedBurgers.set(burger, 1);
                }
            },
            submitData: function () {
                buttonClick();
            }
        }
});

