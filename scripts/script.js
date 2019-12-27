(function () {
    var addReviewBtn = document.querySelector(".addReviewBtn-js"),
        activeTab = document.querySelector("input[name='tabs']"),
        reviewTab = document.querySelector("#tab3");

    addReviewBtn.addEventListener('click', openReviewsTab);

    function openReviewsTab() {
        reviewTab.checked = true;
    }

})();