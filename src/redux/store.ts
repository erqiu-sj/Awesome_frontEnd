/*
 * @Author: 邱狮杰
 * @Date: 2020-11-14 13:04:38
 * @LastEditTime: 2020-11-14 21:17:57
 * @FilePath: /awesome_frontend/src/redux/store.ts
 * @Description: 中央状态管理
 */
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// ControlDaylight 控制白天黑夜页面的变化
import ControlDaylight from "./reducers/LightBulb";
// Classify 控制search框分类项
import Classify from "./reducers/Search";
const reducer = combineReducers({
  ControlDaylight,
  Classify,
});
const Store = createStore(reducer, applyMiddleware(thunk));
export default Store;
