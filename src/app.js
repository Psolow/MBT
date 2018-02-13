// src/app.js
if (module.hot) {
    module.hot.accept()
}

import {groupBy} from 'lodash/collection'
import people from './people'
import './styles.scss'
import './image'

const managerGroups = groupBy(people, 'manager')
const root = document.querySelector('#root')
const container = document.querySelector('#test')
root.innerHTML = `<pre>${JSON.stringify(managerGroups, null, 2)}</pre>`
container.innerHTML = btoa("conrad er meget fin") + " | " + atob("Y29ucmFkIGVyIG1lZ2V0IGZpbg==")