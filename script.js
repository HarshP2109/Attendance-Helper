
let mode = document.getElementById("toggle");


function modechanger(){
if(mode.checked){
    $("#changer").attr("href","night.css");
}
else    
{
    $("#changer").attr("href","day.css");
}
}

let expect = document.getElementById("tick");

function ticker(){
    if(expect.checked){
        $(".three").addClass("opac");
        $(".for").val("75").addClass("opac").attr('readonly', 'true');
    }
    else
    {
        $(".three").removeClass("opac");
        $(".for").removeClass("opac").removeAttr('readonly').val('');
    }
}


function resulte(){

let attend = $(".sec").val();   //x
let out = $(".thir").val();     //y
let per = $(".for").val();      //z

let res = ((100*attend)-(per*out))/(per-100);

$('#animate').removeClass("typed");

window.requestAnimationFrame(function(){
    $('#animate').addClass("typed");
});
if(res>0)
$("#animate").html("You have to attend "+res+" lectures.");
else
$("#animate").html("Minimum Attendance is Already Achieved !!!");
}


