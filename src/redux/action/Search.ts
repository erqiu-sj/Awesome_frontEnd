/*
 * @Author: 邱狮杰
 * @Date: 2020-11-14 21:03:09
 * @LastEditTime: 2020-11-14 21:14:28
 * @FilePath: /awesome_frontend/src/redux/action/Search.ts
 * @Description: 创建首页会执行的动作
 */
import { CATEGORICALITEMS } from "../constants/Search";

export const ChangeCategoricalTtems = (item: string) => {
  return {
    type: CATEGORICALITEMS,
    data: item,
  };
};
