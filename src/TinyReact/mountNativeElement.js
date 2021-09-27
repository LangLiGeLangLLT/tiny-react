import createDOMElement from './createDOMElement';
import unmountNode from './unmountNode';

export default function mountNativeElement(virtualDOM, container, oldDOM) {
  let newElement = createDOMElement(virtualDOM)

  // 将转换之后的 DOM 对象放置到页面当中
  if (oldDOM) {
    container.insertBefore(newElement, oldDOM)
  } else {
    container.appendChild(newElement)
  }

  // 判断就的 DOM 对象是否存在，如果存在删除
  if (oldDOM) {
    unmountNode(oldDOM)
  }

  // 获取类组件实例对象
  let component = virtualDOM.component
  // 如果类组件实例对象存在
  if (component) {
    // 将 DOM 对象存储在类组件实例对象中
    component.setDOM(newElement)
  }
}
