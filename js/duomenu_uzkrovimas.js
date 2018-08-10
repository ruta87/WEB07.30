
    $.get("http://localhost:8080/rest/order/ordersba1", function(data, status){
        var result = "";
        for(var i in data){
            result +="<tr>\n" +
                "            <th scope=\"fieldset\">"+data[i].id+"</th>\n" +
                "            <td>"+data[i].position+"</td>\n" +
                "            <td>12</td>\n" +
                "            <td><input type=\"text\" name='' value='"+data[i].type+"'></td>\n" +
                "            <td><input type=\"text\" name=''></td>\n" +
                "            <td><input type=\"text\"></td>\n" +
                "            <td><input type=\"text\"></td>\n" +
                "        </tr>";
        }
        $('#results').html(result);
    });

