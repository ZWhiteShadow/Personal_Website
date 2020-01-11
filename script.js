var myObj;

$(document).ready(function () {
    $(".normal").hover(
        function () {
            $(this).toggleClass("lg");
        },
    );
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            for (x = 0; x < myObj.length; x++) {

                $("#repo").append("<a href=" + myObj[x].html_url + " target=/'_blank/' >" +
                    myObj[x].name + "</a>" + " - " + myObj[x].description + "<br>");

                $("#repo2").append("&nbsp&nbsp&nbsp&nbsp&nbsp<a href=" + myObj[x].html_url + " target=/'_blank/' >" +
                myObj[x].name + "</a><br>");
            }
        };

    };
    xhttp.open("GET", "https://api.github.com/users/zwhiteshadow/repos", true);
    xhttp.send();
});

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}