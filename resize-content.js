function resizeContent(content, contentIsActive) {
    content.forEach((item, i) => {
        if (parseInt(content[i].style.maxHeight) !== content[i].scrollHeight && content[i].classList.contains(contentIsActive)) {
            content[i].style.maxHeight = `${content[i].scrollHeight}px`;
        }
    });
}