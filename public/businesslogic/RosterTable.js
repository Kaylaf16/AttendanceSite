function RosterTable(chosen)
{
var classname = document.getElementById("dropmenu").children[chosen.value].innerHTML;
$.get('/profile/rostertable?'+ 'class='+classname,function(data,status){
    console.log(data);
})
}
