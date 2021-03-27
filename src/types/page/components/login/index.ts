/*
 * @Author: 邱狮杰
 * @Date: 2021-02-11 14:09:47
 * @LastEditTime: 2021-03-27 14:58:34
 * @FilePath: /Awesome_frontEnd-main/src/types/page/components/login/index.ts
 * @Description: login组件的所需类型
 */
export type inputConfig = {
  type: string;
  placeholder: string;
  val: string;
};
export interface loginType {
  title: string;
  inputList: inputConfig[];
  buttonText: string;
}
