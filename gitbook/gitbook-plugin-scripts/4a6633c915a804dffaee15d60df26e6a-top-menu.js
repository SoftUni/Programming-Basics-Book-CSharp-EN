gitbook.events.bind("page.change", function() {
    let doc = $('section.markdown-section');
    let topMenu = $(`
        <span class="topnav">
            <a class="logobox" target="_blank" href="https://softuni.org"><img class="logo" src="/assets/softuni-global-logo.png" alt="logo"></a>
            <a target="_blank" href="https://softuni.org/learn">Learn Programming</a>
            <a target="_blank" href="https://www.youtube.com/c/CodeWithNakov">YouTube Channel</a>
            <a target="_blank" href="https://introprogramming.info">Nakov's Books</a>
        </span>
    `);
    doc.prepend(topMenu);
});
