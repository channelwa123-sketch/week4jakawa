

import { HomePage } from './pages/home.js'
import { AdminPage } from './pages/admin.js'
import { AboutPage } from './pages/About.js'
import { ContactPage } from './pages/Contact.js'

// กำหนดเส้นทางของแต่ละหน้า
const routes = {
  '/': HomePage,
  '/admin': AdminPage,
  '/about': AboutPage,
  '/contact': ContactPage,
}

// ฟังก์ชันเปลี่ยนหน้า
function render() {
  const path = location.hash.slice(1).toLowerCase() || '/'

  const page = routes[path] || HomePage

  const app = document.querySelector('#app')

  if (app) {
    app.innerHTML = page()
  }
}

// ตรวจจับการเปลี่ยน URL
window.addEventListener('hashchange', render)

// แสดงหน้าแรก
render()
