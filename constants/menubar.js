
import { availableComponents } from '@/constants/component-list'

export const getChildrenByKind = (kind) => {
  return availableComponents.filter((comp) => {
    return comp.kind === kind
  })
}

export const MENU_BAR_ITEMS = [
  {
    label: '模板',
    name: 'template',
    icon: 'icon-template',
    component: null,
    children: []
  },
  {
    label: '搜索',
    name: 'search',
    icon: 'icon-search',
    component: null,
    children: []
  },
  {
    label: '元素',
    name: 'sparks',
    icon: 'icon-sparks',
    component: null,
    children: []
  },
  {
    label: '组件',
    name: 'components',
    icon: 'icon-note',
    component: null,
    children: getChildrenByKind('components')
  },
  {
    label: '形状',
    name: 'shapes',
    icon: 'icon-shape',
    component: null,
    children: getChildrenByKind('shapes')
  }
]