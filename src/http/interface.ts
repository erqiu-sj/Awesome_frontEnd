/*
 * @Author: 邱狮杰
 * @Date: 2020-10-18 17:31:39
 * @LastEditTime: 2020-10-18 17:42:27
 * @FilePath: /frontend/src/http/interface.ts
 * @Description: goServer接口所需要的参数
 */

// 新增文章所需要的参数
export interface addArticles {
  Title: string;
  Introduction: string;
  Tag: string;
  Content: string;
  Type: string;
  Top?: number;
}
