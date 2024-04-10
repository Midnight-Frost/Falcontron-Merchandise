$(document).ready(function () {

    $('#inventory-form').submit(function (event) {

        event.preventDefault();

        window.alert("Order Placed Successfully!");

        document.getElementById('inventory-form').reset();

        window.location.href = "Thanks_order.html";
    }
);
}
);
