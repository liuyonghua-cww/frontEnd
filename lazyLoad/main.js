
window.onload = () => {
    for(let i = 0; i < 10; i++) {
        const div = document.createElement('div');
        const iframe = document.createElement('iframe');
        if (i > 1) {
            div.style.display = 'none'
        }
        iframe.frameborder = 0;
        iframe.dataset.src='./test.html'
        // iframe['data-src'] = 'https://www.baidu.com';
        iframe.classList.add('lazyload');
        div.appendChild(iframe);
        document.body.appendChild(div)
    }
}

/* <iframe frameborder="0"
	class="lazyload"
    allowfullscreen=""
    data-src="//www.youtube.com/embed/ZfV-aYdU4uE">
</iframe> */