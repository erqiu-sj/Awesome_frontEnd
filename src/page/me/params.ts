/*
 * @Author: 邱狮杰
 * @Date: 2021-01-24 16:36:38
 * @LastEditTime: 2021-01-24 16:43:31
 * @FilePath: /Awesome_frontEnd-main/src/page/me/params.ts
 * @Description: 描述
 */
export interface TechnologyConfig {
  name: string;
  introduction: string;
}

export const frontendTechnologyList: TechnologyConfig[] = [
  {
    name: "react",
    introduction: "全家桶驱动View",
  },
  { name: "redux", introduction: "进行中央状态管理啊" },
  { name: "typescript", introduction: "更严格的类型检测" },
  { name: "axios", introduction: "封装请求" },
  { name: "immutable", introduction: "提高render性能，贯彻react哲学" },
  { name: "antd for react", introduction: "ui框架" },
  { name: "aos", introduction: "实现更流畅的动画" },
  { name: "echarts", introduction: "数据可视化" },
];
export const backendTechnologList: TechnologyConfig[] = [
  {
    name: "golang",
    introduction: "人生苦短，let's go",
  },
  { name: "mysql", introduction: "数据持久化" },
  { name: "redis", introduction: "缓存数据，响应更快" },
];
