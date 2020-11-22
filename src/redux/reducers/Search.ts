/*
 * @Author: 邱狮杰
 * @Date: 2020-11-14 21:05:42
 * @LastEditTime: 2020-11-14 21:14:43
 * @FilePath: /awesome_frontend/src/redux/reducers/Search.ts
 * @Description: 根据动作创建的方法
 */
import { CATEGORICALITEMS } from "../constants/Search";
import { Map } from "immutable";

const State = Map({
  classification: "分类",
});

type actionType = {
  type: string;
  data: string;
};

function Categories(state = State, action: actionType) {
  switch (action.type) {
    case CATEGORICALITEMS:
      const classify = state.set("classification", action.data);
      return classify;
    default:
      return state;
  }
}

export default Categories;
