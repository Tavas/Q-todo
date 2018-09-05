$(document).ready(function() {
    const table = $('#main').DataTable({
         select: true,
        "pagingType": "simple",
         scrollY: 500,
        "fnDrawCallback": function(oSettings) {
           if (6 > oSettings.fnRecordsDisplay()) {
             $(oSettings.nTableWrapper).find('.dataTables_paginate').hide();
          } else {
          	 $(oSettings.nTableWrapper).find('.dataTables_paginate').show();
          }
        }
    });
      $('#main tbody').on( 'click', 'tr', function () {
          $(this).toggleClass('selected');
      });
      $('#button').click( function () {
          alert( table.rows('.selected').data().length +' row(s) selected' );
      });
       $('#main tbody').on( 'dblclick', 'tr', function () {
          $(this).toggleClass('selected');
      });
});