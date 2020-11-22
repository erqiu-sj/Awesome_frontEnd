/*
 * @Author: 邱狮杰
 * @Date: 2020-11-14 13:51:04
 * @LastEditTime: 2020-11-14 13:53:03
 * @FilePath: /awesome_frontend/src/redux/action/LightBulb.ts
 * @Description: 控制白天黑夜的状态
 */
import { NIGHT, DAYTIME } from "../constants/LightBulb";
export const EditDay = () => {
  return {
    type: DAYTIME,
  };
};
export const EditNight = () => {
  return {
    type: NIGHT,
  };
};
