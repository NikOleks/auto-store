(function () {
    var reguiredFields;

    function checkRequired(form) {
        reguiredFields = form.querySelectorAll(".required-js");
        for (var i = 0; i < reguiredFields.length; i++){
            if (!reguiredFields[i].value){
                console.log(reguiredFields[i] + ' is blank');
            }
        }
    }

    window.checkRequired = checkRequired;
})();