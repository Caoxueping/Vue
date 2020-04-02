/* @flow */

import * as nodeOps from 'web/runtime/node-ops'
import { createPatchFunction } from 'core/vdom/patch'
import baseModules from 'core/vdom/modules/index'
import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules)

/** 调用工厂函数获取web平台特有的patch函数 
 * nodeOps：节点操作（节点的增删改查等)
 * modules：元素的属性操作（style，class，titie attrs 。。。）
*/

export const patch: Function = createPatchFunction({ nodeOps, modules })
