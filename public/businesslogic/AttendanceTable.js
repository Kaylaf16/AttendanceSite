function AttendanceTable()
{
  $.get('/profile/attendancetable',function(data,status){
    $('#attendancetablebody').empty();
    for (var i = 0;i < data.length;i++) {
      $('#attendancetablebody').append('<tr><td>'+ data[i].name+'</td>'+'<td>'+ data[i].id+'</td>'+'<td>'+ data[i].timein+'</td>'+'</tr>');
      console.log(data);
    }
  });
}
