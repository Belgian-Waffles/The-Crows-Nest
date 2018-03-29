$(document).ready(function() {
    var url = window.location.search;
    var communityID;
    if(url.indexOf("?community_id=")!==-1){
        communityID=url.split("=")[1];
    }
    setForum();
    $(document).on("click",".thread",showThread);
    function setForum(){
        $.get("/api/communities/"+communityID,function(data){
            $(".forum").empty();
            var forum=data.getForums();
            var forumThreads=[forum.getThreads()];
            var rowsToAdd=[];
            if(forumThreads.length>0){
                for(i=0;i<forumThreads.length;i++){
                    var threadElement=$(["li class=thread id="+threadElement[i].id,"<span>",forumThreads[i].title,"</span>","</li>"].join(""));
                    threadElement.data("thread",thread);
                    rowsToAdd.push(threadElement);
                }
                $(".forum").prepend(rowsToAdd);
            }
            else{
                console.log("fail set forum");
            }
        });
    };
    function showThread(){
        var currentThread=$(this).data("thread");
        $(".forum").empty();
        var threadPosts=[currentThread.getPosts()];
        var rowsToAdd=[];
        if(threadPosts.length>0){
            for(i=0;i<threadPosts.length;i++){
                var currentPost=threadPosts[i];
                var postElement=$(["li class=post id="+currentPost.id,"<span>",currentPost.title,"</span>","<p>",currentPost.body,"</p>","</li>"].join(""));
                $(".forum").prepend(rowsToAdd);
            }
        }
        else{
            console.log("fail show thread");
        }
    }


});