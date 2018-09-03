
$(document).ready(function() {
    $('#main').DataTable({
        "info": false,
         scrollY: 500,
        "fnDrawCallback": function(oSettings) {
           if (6 > oSettings.fnRecordsDisplay()) {
             $(oSettings.nTableWrapper).find('.dataTables_paginate').hide();
          } else {
          	 $(oSettings.nTableWrapper).find('.dataTables_paginate').show();
          }
        }
    });
});