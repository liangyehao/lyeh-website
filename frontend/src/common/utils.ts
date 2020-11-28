import { history } from 'umi';

// 页面跳转
export function goTo(path:string) {
  history.push(path);
}
