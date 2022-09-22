import { h } from 'vue'
import Theme from 'vitepress/theme'
import EmptySponsors from './components/EmptySponsors.vue'
import SvgImage from './components/SvgImage.vue'
import './styles/vars.css'
import './custom.css'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'home-features-after': () => h(EmptySponsors),
      'aside-ads-before': () => h(EmptySponsors)
    })
  },
  enhanceApp({ app }) {
    app.component('SvgImage', SvgImage)
  }
}
