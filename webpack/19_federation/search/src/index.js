import('nav/Header').then(({ Header }) => {

    const div = document.createElement('div')
    div.appendChild(Header())
    document.body.appendChild(div)
})

import('home/HomeList').then(({ HomeList }) => {
    const div = document.createElement('div')
    div.appendChild(HomeList(2))
    document.body.appendChild(div)
})
