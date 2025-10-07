const themeBtn = document.querySelector('.header-theme');

function changeAttribure (name, value) {
    document.documentElement.setAttribute('name', 'value');
}

themeBtn.addEventListener('click', () => {
    if(document.documentElement.getAttribute('data-theme') === 'dark') {
        return changeAttribure('data-theme', 'light')
    }
    return changeAttribure('data-theme', 'dark')
});