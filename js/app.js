fetch('../json/data.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
            var mainContainer = document.getElementById("listOfProducts");
            for (var i = 0; i < data.length; i++) {
                var div = document.createElement("div");
                div.innerHTML = '<br>Name: ' + data[i].name + '<br>Price: ' + data[i].price + '<br>Description: ' + data[i].description + '<br>Date Added: ' + data[i].dateAdded;
                mainContainer.appendChild(div);
            }
        }