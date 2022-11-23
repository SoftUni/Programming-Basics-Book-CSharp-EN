gitbook.events.bind("page.change", function() {
    let doc = $('section.markdown-section');
    let topMenu = $(`
        <p class="topnav">
            <a class="logobox" target="_blank" href="https://softuni.org/learn/?utm_source=C+sharp&utm_medium=logo&utm_campaign=free+programming+books"><img class="logo" src="/assets/softuni-global-logo.svg" alt="logo"></a>
            <a target="_blank" href="https://learn.softuni.org/catalog?utm_source=C+sharp&utm_medium=top+menu&utm_campaign=free+programming+books">Learn Programming</a>
            <a target="_blank" href="https://www.youtube.com/c/CodeWithNakov">YouTube Channel</a>
            <a target="_blank" href="https://introprogramming.info">Nakov's Books</a>
        </p>
    `);
    doc.prepend(topMenu);
});
