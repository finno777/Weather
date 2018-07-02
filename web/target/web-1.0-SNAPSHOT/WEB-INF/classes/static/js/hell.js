$(document).ready(function(){
    $("button").click(function(){
        $.ajax({
            type:'GET',
            url: "/getPrise",
            success: function(result){
                $("div").html(result);
            }});
    });
});
