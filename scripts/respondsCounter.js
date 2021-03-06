(function () {
    var tabReview = document.querySelector(".tab-reviews-js"),
        formReview = tabReview.querySelector("#form-review"),
        cancelReview = formReview.querySelector(".cancelReviewBtn-js"),
        reviewCounters = document.querySelectorAll(".reviewCounter-js"),
        reviews = tabReview.querySelectorAll(".review-js");

    cancelReview.addEventListener("click", clearForm);

    function clearForm() {
        service.clearFormFields(formReview);
    };

    function getReviewsCount() {
        for (var i = 0; i < reviewCounters.length; i++) {
            reviewCounters[i].innerHTML = document.querySelectorAll(".review-js").length;
        }
    };

    var counters = [];
    for (var i = 0; i < reviews.length; i++) {
        counters[i] = getCounter(reviews[i]);
    };

    function getCounter(review) {
        var counter = new VoteCounter(
            review.querySelector(".positiveVote-js"), 0,
            review.querySelector(".negativeVote-js"), 0,
            review.querySelector(".percentVotes-js")
        );
        var positiveVoteBtn = review.querySelector(".positiveBtn-js"),
            negativeVoteBtn = review.querySelector(".negativeBtn-js");
        positiveVoteBtn.addEventListener("click", counter.setPositiveVote.bind(counter));
        negativeVoteBtn.addEventListener("click", counter.setNegativeVote.bind(counter));
        return counter;
    };

    getReviewsCount();
    window.getReviewsCount = getReviewsCount;
    window.clearFormReview = clearForm;
    window.voteCounters = counters;
    window.getCounter = getCounter;
})();
