/* @flow */

import { toArray } from '../util/index'

export function initUse (Vue: GlobalAPI) {
  // USE方法接收函数或者对象
  // Vue.use(kVueRouter)  func
  // Vue.use(Store, install) obj
  Vue.use = function (plugin: Function | Object) {
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    const args = toArray(arguments, 1)
    // 在参数数组最前面加入this，即Vue构造函数
    args.unshift(this)
    if (typeof plugin.install === 'function') { // obj时
      plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') { // func时
      plugin.apply(null, args)
    }
    installedPlugins.push(plugin)
    return this
  }
}
