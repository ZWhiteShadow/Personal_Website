$(document).ready(function () {
    $(".normal").hover(
        function () {
            $(this).toggleClass("lg");
        },
    );

    var starred = "",
        aj1 = $.get("https://api.github.com/users/zwhiteshadow/repos"),
        aj2 = $.get("https://api.github.com/users/ZWhiteShadow/starred");

    $.when(aj1, aj2).done(function (repos, favRepos) {

        for (reposLoop = 0; reposLoop < repos[0].length; reposLoop++) {
            for (favLoop = 0; favLoop < favRepos[0].length; favLoop++) {
                if (repos[0][reposLoop].name == favRepos[0][favLoop].name) {
                     starred = "★"
                     break;
                }
                else {
                    starred = "&nbsp"
                }
            }
            $("#repo").append(starred + "<a href=" + repos[0][reposLoop].html_url + " target=/'_blank/' >" +
                repos[0][reposLoop].name + "</a>" + " - " + repos[0][reposLoop].description + "<br>");

            $("#repo2").append("&nbsp&nbsp&nbsp&nbsp" + starred +"<a href=" + repos[0][reposLoop].html_url + " target=/'_blank/' >" +
                repos[0][reposLoop].name + "</a><br>");
        }
    });

});



function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}