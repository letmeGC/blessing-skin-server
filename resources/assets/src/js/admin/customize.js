/* global current_skin:true */

'use strict';

$('#layout-skins-list [data-skin]').click(function (e) {
    e.preventDefault();
    let skin_name = $(this).data('skin');
    $('body').removeClass(current_skin).addClass(skin_name);
    current_skin = skin_name;
});

function submitColor() {
    fetch({
        type: 'POST',
        url: url('admin/customize?action=color'),
        dataType: 'json',
        data: { color_scheme: current_skin }
    }).then(({ errno, msg }) => {
        (errno == 0) ? toastr.success(msg) : toastr.warning(msg);
    }).catch(showAjaxError);
}

$('#color-submit').click(submitColor);

if (typeof require !== 'undefined' && typeof module !== 'undefined') {
    module.exports = submitColor;
}
