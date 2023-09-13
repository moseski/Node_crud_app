$(document).ready(function () {
    $("#add_user").submit(function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Your code to handle form submission and show an alert goes here
        alert("Data inserted successfully");
    });

    $("#update_user").submit(function (event) {
        event.preventDefault();

        var unindexed_array = $(this).serializeArray();
        var data = {};

        $.map(unindexed_array, function (n, i) {
            data[n['name']] = n['value'];
        });

        console.log(data);

        // Use backticks to correctly interpolate the URL
        var request = {
            url: `http://localhost:3000/api/users/${data.id}`,
            method: "PUT",
            data: data
        };

        $.ajax(request).done(function (response) {
            alert("Data Updated Successfully");
        });
    });

    if (window.location.pathname == "/") {
        $ondelete = $(".table tbody td a.delete");
        $ondelete.click(function () {
            var id = $(this).attr("data-id");

            var request = {
                url: `http://localhost:3000/api/users/${id}`,
                method: "DELETE",
            };

            if (confirm("Are you sure you want to delete?")) {
                $.ajax(request).done(function (response) {
                    alert("Data Deleted Successfully");
                    location.reload();
                });
            }
        });
    }
});
