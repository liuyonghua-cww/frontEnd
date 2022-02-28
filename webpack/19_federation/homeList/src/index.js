import { HomeList } from "./HomeList";

import('nav/Header').then(({ Header }) => {
    console.log(Header);
    const div = document.createElement('div')
    div.appendChild(Header())
    div.appendChild(HomeList(5))
    document.body.appendChild(div)

})

