function RosterTable(chosen)
{
var classname = document.getElementById("dropmenu").children[chosen.value].innerHTML;
$.get('/profile/rostertable?'+ 'class='+classname,function(data,status){
$("#rostertablebody").empty();
for (key in data.student) {
  $('#rostertablebody').append('<tr><td>'+ data.student[key]+'</td>'+'<td>'+ key+'</td>'+'</tr>');
}
})
}
