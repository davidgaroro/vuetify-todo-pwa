
# vuetify-todo-pwa
This project is a simple Todo [PWA] (Progressive Web App) inspired by [TodoMVC]. Perfect to learn the basics about [Vue.js], [Vuex] and [Vuetify] technologies.

[PWA]: https://developers.google.com/web/progressive-web-apps
[TodoMVC]: http://todomvc.com
[Vue.js]: https://vuejs.org
[Vuex]: https://vuex.vuejs.org
[Vuetify]: https://vuetifyjs.com

<p align="center">
  <a href="https://davidgaroro.github.io/vuetify-todo-pwa" target="_blank" rel="noopener">
    <img src="https://i.imgur.com/A2aaDq8.png"><br/>
    Live Demo
  </a>
</p>

## Features
 - Vue CLI 3 + Webpack + vue-loader for single file Vue components
	-  Hot-reload in development
	-  Lint-on-save with [ESLint (Standard)](https://github.com/standard/eslint-config-standard)
	-  Stylus CSS preprocessor
 - Vue + vue-router + vuex working together
 - Vuetify a-la-carte (reduce project's size  in production)
 - Progressive Web App
	- App manifest
	- Service worker
	- Workbox options - [Cache Google Fonts]
	- 100/100 Lighthouse score

[Cache Google Fonts]: https://developers.google.com/web/tools/workbox/guides/common-recipes#google_fonts

## Built With
### Dependencies
| Name| Description | |
|--|--|:--:| 
|[vue]|Progressive JavaScript Framework|🖖
|[vue-cli-3]|️Standard Tooling for Vue.js Development|🛠️
|[vue-router]|Official Router for Vue.js|🚦
|[vuex]|️Centralized State Management for Vue.js|🗃️
|[vuetify]|️Material Component Framework for Vue.js|📚

[vue]: https://vuejs.org
[vue-router]: https://router.vuejs.org
[vue-cli-3]: https://cli.vuejs.org
[vuex]: https://vuex.vuejs.org
[vuetify]: https://vuetifyjs.com

### Development Dependencies
| Name| Description | |
|--|--|:--:| 
|[stylus-loader]|CSS preprocessor for webpack|🎨
|[vue/cli-plugin-babel]|Compiler for next generation JavaScript|🐠
|[vue/cli-plugin-eslint]|Pluggable JavaScript linter|✍️
|[vue/cli-plugin-pwa]|JavaScript Library for adding support to PWA|📱

[stylus-loader]: https://github.com/shama/stylus-loader
[vue/cli-plugin-babel]: https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel
[vue/cli-plugin-eslint]: https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint
[vue/cli-plugin-pwa]: https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa

## Installation & Setup
### Clone repository
```
git clone https://github.com/davidgaroro/vuetify-todo-pwa.git
cd vuetify-todo-pwa
```

### Install dependencies
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
## Donation
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/donate?hosted_button_id=T7CVYXY994KHJ)
## License
[MIT](./LICENSE) &copy; davidgaroro
