$(document).ready(function () {
    var url = window.location.search;
    var communityID;
    var currentThread;
    var forumID;
    if (url.indexOf("?community_id=") !== -1) {
        communityID = url.split("=")[1];
    }
    else{
        communityID=1;
    }
    setForum();
    $(document).on("click", ".thread", showThread);
    $(document).on("click", ".submit", postToForum);
    function setForum() {
        $.get("/api/communities/" + communityID, function (data) {
            $(".forum").empty();
            var forum = data.getForum();
            forumID = forum.id;
            var forumThreads = [forum.getThreads()];
            var rowsToAdd = [];
            if (forumThreads.length > 0) {
                for (i = 0; i < forumThreads.length; i++) {
                    var threadElement = $(["li class=thread id=" + threadElement[i].id, "<span>", forumThreads[i].title, "</span>", "</li>"].join(""));
                    threadElement.data("thread", thread);
                    rowsToAdd.push(threadElement);
                }
                $(".forum").prepend(rowsToAdd);
            }
            else {
                throw new Error("fail set forum");
            }
        });
    };
    function showThread() {
        currentThread = $(this).data("thread");
        $(".forum").empty();
        if (currentThread) {
            $("#thread").val(currentThread.title);
            $("#thread").data("thread-id", currentThread.id);
            var threadPosts = [currentThread.getPosts()];
            var rowsToAdd = [];
            if (threadPosts.length > 0) {
                for (i = 0; i < threadPosts.length; i++) {
                    var currentPost = threadPosts[i];
                    var postElement = $(["<li class=post id='" + currentPost.id+"'>", "<span>", currentPost.title, "</span>", "<p>", currentPost.body, "</p>", "</li>"].join(""));
                    $(".forum").prepend(rowsToAdd);
                }
            }
            else {
                throw new Error("fail show thread");
            }
        }
        else {
            throw new Error("Unable to load thread")
        }
    };
    function postToForum(event) {
        event.preventDefault();
        if (!currentThread) {
            if ($("#thread").val().trim() !== "" || $("#thread").val().trim() !== undefined || $("#thread").val().trim() !== null) {
                var newThread = {
                    title: $("#thread").val().trim(),
                    ForumId: forumID,
                    UserId: $("#userIdHolder").val().trim()
                }                
                $.post("/api/threads", newThread)
                    .then(function (data) {
                        postHandler(data.id);
                    });
            }
            else {
                throw new Error("No thread title")
            }
        }
        else {
            postHandler(currentThread.id);
        }
    };
    function postHandler(theThreadId){
        if ($("#post").val().trim() !== "" || $("#post").val().trim() !== undefined || $("#post").val().trim() !== null) {
            if ($("#post-body").val().trim() !== "" || $("#post-body").val().trim() !== undefined || $("#post-body").val().trim() !== null) {
                var newPost = {
                    title: $("#post").val().trim(),
                    body: $("#post-body").val().trim(),
                    UserId: $("#userIdHolder").val().trim(),
                    ThreadId: theThreadId
                }
                $.post("/api/posts", newPost)
            }
        }
    }
});