

function doLike(pid,uid){
    console.log(pid +" ," + uid)
    
    const d ={
        
        pid : pid,
        uid : uid,
        operation : "like"
        
    }
    
    $.ajax({
        
        url : "likeservlet",
        data : d,
        success: function (data, textStatus, jqXHR) {
            
            console.log(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(data);
        }
        
        
    })
}

