/*
 * @Author: 邱狮杰
 * @Date: 2020-11-14 13:04:38
 * @LastEditTime: 2021-03-26 23:19:48
 * @FilePath: /Awesome_frontEnd-main/src/redux/store.ts
 * @Description: 中央状态管理
 */
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// ControlDaylight 控制白天黑夜页面的变化
import ControlDaylight from "./reducers/LightBulb";
// Classify 控制search框分类项
import Classify from "./reducers/Search";
// 登陆注册展示字段
import SignUpStatus from "./reducers/SignUp";
const reducer = combineReducers({
  ControlDaylight,
  Classify,
  SignUpStatus,
});
const Store = createStore(reducer, applyMiddleware(thunk));
export default Store;
