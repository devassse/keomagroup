jQuery(function($) {
    /* Executar uma accao sobre um registo. */
    $('.btn_executar').click(function () {
        var btn_executar = $(this);
        bootbox.confirm({
            buttons: {
                confirm: {
                    label: 'Remover!',
                    className: 'btn-danger',
                    callback: function () { }
                },
                cancel: {
                    label: 'Cancelar'
                }
            },
            size: 'small',
            message: 'Deseja mesmo remover a candidatura?',
            callback: function (result) {
                if (result === true) {
                    btn_executar.siblings('.form_apagar_registo').submit();
                }
            }
        });
    });

});