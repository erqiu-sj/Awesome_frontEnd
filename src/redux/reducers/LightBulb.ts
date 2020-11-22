/*
 * @Author: 邱狮杰
 * @Date: 2020-11-14 13:32:51
 * @LastEditTime: 2020-11-14 14:15:16
 * @FilePath: /awesome_frontend/src/redux/reducers/LightBulb.ts
 * @Description: 控制白天黑夜页面的变化
 */
import { Map } from "immutable";
import { DAYTIME, NIGHT } from "../constants/LightBulb";

const State = Map({ dayTime: true });

type actionType = {
  type: string;
};

function ControlDaylight(
  state = State,
  action: actionType
): Map<string, boolean> | undefined {
  switch (action.type) {
    case DAYTIME:
      // 把状态改为白天
      console.log("Edit Day");
      const day = state.set("dayTime", true);
      return day;
    case NIGHT:
      // 把状态改为黑夜
      console.log("Edit Night");
      const night = state.set("dayTime", false);
      return night;
    default:
      return state;
  }
}
export default ControlDaylight;
