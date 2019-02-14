var submitbutton = new Vue({
    el: '#app',
    data:
        {
            orderedBurgers: new Map(),
            burgers: burgers
        },
    methods:
        {
            toggleCheckmark: function () {

                if (event.target.innerHTML === "✓")
                {
                    event.target.innerHTML = " ";
                }
                else
                {
                    event.target.innerHTML = "✓";
                }
            },
            submitData: function () {
                buttonClick();
            }
        }
});