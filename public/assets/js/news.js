// News API call 
$(document).ready(function () {
    $.ajax({
        url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=79f8ff2b4224420c9ac71e5174746823",
        method: "GET"
    }).then(function (data) {
        console.log(data);
        var newsData = data.articles
        console.log(newsData);
        console.log("2");
        for (i = 0; i < newsData.length; i++) {
            console.log("3");
            var title = newsData[i].title;
            var description = newsData[i].description;
            var author = newsData[i].author;
            var articleImage = newsData[i].urlToImage;
            var articleLink = newsData[i].url;
            var emptyImage = $("<img>").attr("src", "https://qph.fs.quoracdn.net/main-qimg-82907bfea9fe97e84861e2ee7c5b4f5b");

            // Creating new article div
            var newArticle = $("<div>").addClass("article");

            // Creating new title div
            var newTitleDiv = $("<div>").addClass("article-title");
            newTitleDiv.text(title);
            $(newArticle).append(newTitleDiv);

            // Creating new image div
            var newImage = $("<img>");
            newImage.attr('src', newsData[i].urlToImage);

            // Dummy Image if null
            if (articleImage === null) {
                var newImageDiv = $("<div>").addClass("article-image").append(emptyImage);
            } else {
                var newImageDiv = $("<div>").addClass("article-image").append(newImage);
            }
            $(newArticle).append(newImageDiv);

            // Creating new description div
            var newDescriptionDiv = $("<div>").addClass("article-description");
            if (description === null) {
                newDescriptionDiv.text("No description available.");
            } else {
                newDescriptionDiv.text(description);
            }
            $(newArticle).append(newDescriptionDiv);

            // Creating new author div
            var newAuthorDiv = $("<div>").addClass("article-author");
            if (author === null) {
                newAuthorDiv.text("By: Unknown");
            } else {
                newAuthorDiv.text("By: " + author);
            }
            $(newArticle).append(newAuthorDiv);

            // Creating link to news article
            $(newArticle).wrapInner('<a target="_blank" href=' + articleLink + '></a>')

            $(".news-articles").append(newArticle);
        }
    });

    // Search Button Click
    $(".search").on("click", function () {
        $("#search").toggleClass("hide");
        // $(".search").toggleClass("hide");
    })

    $(".category-link").on("click", function () {
        $(".news-articles").empty();
        var categoryPicked = $(this).text().toLowerCase().trim();
        console.log(categoryPicked);

        $.ajax({
            url: "https://newsapi.org/v2/top-headlines?country=us&category=" + categoryPicked + "&apiKey=79f8ff2b4224420c9ac71e5174746823",
            method: "GET"
        }).then(function (data) {
            console.log(data);
            var newsData = data.articles
            console.log(newsData);
            console.log("2");
            for (i = 0; i < newsData.length; i++) {
                console.log("3");
                // Put all returned data into variables
                var title = newsData[i].title;
                var description = newsData[i].description;
                var author = newsData[i].author;
                var articleImage = newsData[i].urlToImage;
                var articleLink = newsData[i].url;
                var emptyImage = $("<img>").attr("src", "https://qph.fs.quoracdn.net/main-qimg-82907bfea9fe97e84861e2ee7c5b4f5b");

                // Creating new article div
                var newArticle = $("<div>").addClass("article");

                // Creating new title div
                var newTitleDiv = $("<div>").addClass("article-title");
                newTitleDiv.text(title);
                $(newArticle).append(newTitleDiv);

                // Creating new image div
                var newImage = $("<img>");
                newImage.attr('src', newsData[i].urlToImage);

                // Empty default image if null
                if (articleImage === null) {
                    var newImageDiv = $("<div>").addClass("article-image").append(emptyImage);
                } else {
                    var newImageDiv = $("<div>").addClass("article-image").append(newImage);
                }
                $(newArticle).append(newImageDiv);

                // Creating new description div
                var newDescriptionDiv = $("<div>").addClass("article-description");
                if (description === null) {
                    newDescriptionDiv.text("No description available.");
                } else {
                    newDescriptionDiv.text(description);
                }
                $(newArticle).append(newDescriptionDiv);

                // Creating new author div
                var newAuthorDiv = $("<div>").addClass("article-author");
                if (author === null || author === "") {
                    newAuthorDiv.text("By: Unknown");
                } else {
                    newAuthorDiv.text("By: " + author);
                }
                $(newArticle).append(newAuthorDiv);

                // Creating link to news article
                $(newArticle).wrapInner('<a target="_blank" href=' + articleLink + '></a>')

                $(".news-articles").append(newArticle);
            }
        });
    })

    // Search ajax call
    $("#search-bar").on('keyup', function (e) {
        if (e.keyCode == 13) {
            $(".news-articles").empty();
            var userSearch = $("#search-bar").val().trim();

            $.ajax({
                url: "https://newsapi.org/v2/everything?q=" + userSearch + "&language=en&sortBy=publishedAt&apiKey=79f8ff2b4224420c9ac71e5174746823",
                method: "GET"
            }).then(function (data) {
                console.log(data);
                var newsData = data.articles
                console.log(newsData);
                console.log("2");
                for (i = 0; i < newsData.length; i++) {
                    console.log("3");
                    // Put all returned data into variables
                    var title = newsData[i].title;
                    var description = newsData[i].description;
                    var author = newsData[i].author;
                    var articleImage = newsData[i].urlToImage;
                    var articleLink = newsData[i].url;
                    var emptyImage = $("<img>").attr("src", "https://qph.fs.quoracdn.net/main-qimg-82907bfea9fe97e84861e2ee7c5b4f5b");

                    // Creating new article div
                    var newArticle = $("<div>").addClass("article");

                    // Creating new title div
                    var newTitleDiv = $("<div>").addClass("article-title");
                    newTitleDiv.text(title);
                    $(newArticle).append(newTitleDiv);

                    // Creating new image div
                    var newImage = $("<img>");
                    newImage.attr('src', newsData[i].urlToImage);

                    // Empty default image if null
                    if (articleImage === null) {
                        var newImageDiv = $("<div>").addClass("article-image").append(emptyImage);
                    } else {
                        var newImageDiv = $("<div>").addClass("article-image").append(newImage);
                    }
                    $(newArticle).append(newImageDiv);

                    // Creating new description div
                    var newDescriptionDiv = $("<div>").addClass("article-description");
                    if (description === null) {
                        newDescriptionDiv.text("No description available.");
                    } else {
                        newDescriptionDiv.text(description);
                    }
                    $(newArticle).append(newDescriptionDiv);

                    // Creating new author div
                    var newAuthorDiv = $("<div>").addClass("article-author");
                    if (author === null || author === "") {
                        newAuthorDiv.text("By: Unknown");
                    } else {
                        newAuthorDiv.text("By: " + author);
                    }
                    $(newArticle).append(newAuthorDiv);

                    // Creating link to news article
                    $(newArticle).wrapInner('<a target="_blank" href=' + articleLink + '></a>')

                    $(".news-articles").append(newArticle);
                }
            });
        }
    })


    $("#user-info-submit").on("click", function (event) {
        event.preventDefault();
        console.log("hi");

        var userInfo = {
            name: $("#user-name").val(),
            password: $("#password").val(),
            city: $("#city").val(),
            state: $("#state").val()
        }

        $.post("/register", userInfo).then(function (data) {
            console.log(data);
        })
    })
})