export const HomeList = (length) => {
    let str = '';
    for (let i = 0; i < length; i++) {
        str += `<li>item${ i }</li>`;
    }
    const ul = document.createElement('ul');
    ul.innerHTML = str;
    return ul
};
