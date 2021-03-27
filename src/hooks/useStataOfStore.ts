/*
 * @Author: 邱狮杰
 * @Date: 2021-03-26 23:14:11
 * @LastEditTime: 2021-03-26 23:47:05
 * @FilePath: /Awesome_frontEnd-main/src/hooks/useStataOfStore.ts
 * @Description: 获取store中的值，取代useSelector
 */

import { useSelector } from "react-redux";
import { Map } from "immutable";
type reducerType = "ControlDaylight" | "Classify" | "SignUpStatus";

interface StateReducer {
  [key: string]: string;
}
export function useStataOfSrote<T, K>(reducerItem: reducerType): Map<T, K> {
  return (useSelector(
    (state: StateReducer) => state[reducerItem]
  ) as any) as Map<T, K>;
}
