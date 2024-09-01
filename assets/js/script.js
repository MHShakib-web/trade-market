$(document).ready(function () {
    $(document).on('click', '.input-group .eye-icon', function () {
        const inputId = $(this).attr('for');
        if ($(this).find('.fa-eye-slash').length) {
            $(this).html(`<i class="fa-regular fa-eye"></i>`);
            $(`#${inputId}`).attr('type', 'text');
        } else {
            $(this).html(`<i class="fa-regular fa-eye-slash"></i>`);
            $(`#${inputId}`).attr('type', 'password');
        }
    });

    typeof NiceSelect !== 'undefined' &&
        NiceSelect.bind &&
        $.each($('select'), function (index, selector) {
            const id = $(selector).attr('id');
            const searchable = $(selector).attr('searchable');
            const options = {
                searchable: searchable == 'true' || false,
                placeholder: 'select',
                searchtext: 'Search',
                selectedtext: 'geselecteerd',
            };

            NiceSelect.bind(document.getElementById(id), options);
        });

    $(document).on('click', '.faq-section .btn-collapse', function () {
        $(this).closest('.card').find('.card-body').slideToggle();
    });
});
