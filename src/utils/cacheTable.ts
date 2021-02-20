/*
 * @Author: 邱狮杰
 * @Date: 2021-02-14 15:55:40
 * @LastEditTime: 2021-02-14 15:59:05
 * @FilePath: /Awesome_frontEnd-main/src/utils/cacheTable.ts
 * @Description: 缓存表
 */

const cacheTable = {
  loverToken: "loverToken",
  userToken: "userToken",
  adminToken: "adminToken",
};
export function getStoage(key: string): string | null {
  return localStorage.getItem(key);
}
export function setStoage(key: string, val: string): void {
  localStorage.setItem(key, val);
}
export default cacheTable;
