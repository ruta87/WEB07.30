
    $.get("http://localhost:8080/rest/order/ordersba1", function(data, status){
        $('#json_duomenys').html(data);
    });
