gitbook.events.bind("page.change", function() {
    let doc = $('section.markdown-section');
    let modalContent = $(`
        <span id="modal" class="modal-background">
            <p class="modal-content">
                <span id="close-btn" class="close">&times;</span>
                <span class="modal-title">Learn Programming<br> and Start a Tech Job!</span>
                <span class="button-wrapper">
                    <a target="_blank" href="https://softuni.org/learn/">Enroll Now</a>
                </span>
                <span class="upper-text">
                    <span><b>Begin</b> your <b>IT career</b> with a <b>our online training programs</b> for <b>Java</b> and <b>JavaScript</b>.
                    Learn <b>coding</b>, <b>data structures</b>, <b>object-oriented programming</b>, <b>databases</b>, <b>back-end</b>,
                    <b>Web</b>, <b>RESTful APIs</b>, <b>front-end</b>, <b>MySQL</b>, <b>Hibernate</b>, <b>Spring</b>, <b>Node.js</b>, <b>Angular</b>
                    and <b>React</b>.
                    Study in your own <b>time</b> and <b>own pace</b>.</span>
                </span>
                <span class="middle-text">
                    <span class="middle-text-title">You can <b>succeed</b> even if you are:</span>
                    <span>&#x2705; <b>Novice</b> - no prior programming knowledge is needed.</span>
                    <span>&#x2705; <b>Working</b> - keep your other commitments and still succeed.</span>
                    <span>&#x2705; <b>Busy</b> - spend 2-3 hours per day and become a skilled programmer.</span>
                    <span>&#x2705; <b>Insecure</b> - get career advise and land your dream job.</span>
                </span>
                <span class="lower-text">
                    <span>Learn <b>programming</b>: from zero to your first IT job! <b>Start</b> now!</span>
                </span>
            </p>
        </span>
    `);
    doc.prepend(modalContent);
    
    let modalPopupElement = document.getElementById("modal");
    let bookBodyElement = document.querySelector("div.book-body");
    let oldBookBodyLeft = "0";
    let oldBookBodyCSSTransform = "none";
    let bookSummaryElement = document.querySelector("div.book-summary");
    let oldBookSummaryLeft = "0";
    
    function showPopup() {
        modalPopupElement.style.display = "block";
        
        // Switch off 'CSS transform' for the book body (it breaks the modal popup)
        oldBookBodyCSSTransform = bookBodyElement.style.transform;
        bookBodyElement.style.transform = "none";
        bookBodyElement.style.webkitTransform = "none";
        bookBodyElement.style.MozTransform = "none";
        
        // Hide the 'book summary' tab
        oldBookSummaryLeft = bookSummaryElement.style.left;
        bookSummaryElement.style.left = "-100%";

        // Arrange the book body on the left
        oldBookBodyLeft = bookBodyElement.style.left;
        bookBodyElement.style.left = "0";
    }
    
    function hidePopup() {
        modalPopupElement.style.display = "none";
        
        // Restore 'CSS transform' for the book body (to its previous state before the popup)
        bookBodyElement.style.transform = oldBookBodyCSSTransform;
        bookBodyElement.style.webkitTransform = oldBookBodyCSSTransform;
        bookBodyElement.style.MozTransform = oldBookBodyCSSTransform;
        
        // Restore the 'book summary' tab (to its previous state before the popup)
        bookSummaryElement.style.left = oldBookSummaryLeft;
        
        // Restore the book body position (to its previous state before the popup)
        bookBodyElement.style.left = oldBookBodyLeft;
    }

    // Wait some time and display the modal popup
    setTimeout(showPopup, 10000);

    // Close button --> hide the modal popup
    let button = document.getElementById("close-btn");
    button.onclick = hidePopup;

    // Global click --> hide the modal popup
    window.onclick = function(event) {
        if (event.target == modalPopupElement) {
            hidePopup();
        }
    }
});
