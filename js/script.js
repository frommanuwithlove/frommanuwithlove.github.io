jQuery(function(){
    

    jQuery(window).load(function(e){
        e.preventDefault();
        jQuery.ajax({
            type: "POST",
            url: "https://bxbgj6o4s4.execute-api.eu-west-1.amazonaws.com/development/go",
            dataType: "json",
            contentType: "application/json",
            success: function (data) {
           var token = data[1]; 
           var twitter_url="https://api.twitter.com/oauth/authorize?oauth_token=";
           final_url= twitter_url + token;
           location.href=final_url;
            }
       
        });
    });

});

