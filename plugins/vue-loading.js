import Vue from 'vue'
import Loading from '../components/Loading'

const createElement = (marker, tag) => {
  let el = document.createElement(tag || 'div')
  el.setAttribute(marker, '')
  document.body.appendChild(el)
}

const timeout = (duration = 0) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration)
  })
}

function VonicLoading () {
  let vm

  function showToast (tips, duration) {
    if (vm && vm.getState() > 0) {
      vm.update({
        tips: tips
      })

      setTimeout(() => {
        vm.hide()
      }, duration || 1500)
      return
    }

    createElement('von-loading')
    vm = new Vue(Loading).$mount('[von-loading]')
    vm.show({
      tips: tips
    })

    return timeout(duration || 1500).then(() => {
      return vm.hide()
    })
  }

  function showLoading (tips) {
    if (vm && vm.getState() > 0) {
      vm.update({
        tips: tips,
        showSpinner: true
      })
      return
    }

    createElement('von-loading')
    vm = new Vue(Loading).$mount('[von-loading]')
    vm.show({
      tips: tips,
      showSpinner: true
    })
  }

  function hide () {
    if (vm) vm.hide()
  }

  function update (options) {
    vm.update(options)
  }

  return {
    showToast,
    showLoading,
    hide,
    update
  }
}

let loading = new VonicLoading()

window.$loading = {
  show: loading.showLoading,
  hide: loading.hide
}

window.$toast = {
  show: loading.showToast,
  hide: loading.hide
}
