/*
 * @Author: 邱狮杰
 * @Date: 2020-11-28 17:04:45
 * @LastEditTime: 2020-11-29 09:36:14
 * @FilePath: /Awesome_frontEnd-main/src/page/blog/components/blogContent/blogContent.tsx
 * @Description: blogList
 */
import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { Card } from "antd";
import { BlogList } from "../../../../types/page/blog/blog";
const { Meta } = Card;
type Props = {
  // 需要外部传来的数据进行渲染
  BlogList: BlogList[];
};

const BlogContent: FC<Props> = ({ BlogList }) => {
  const history = useHistory();
  return (
    <div>
      {BlogList &&
        BlogList.map((item, index) => {
          return (
            <Card
              key={index}
              hoverable
              onClick={() => history.push("/article", { title: item.title })}
              style={{ width: "90%", marginTop: 16 }}
            >
              <Meta title={item.title} description={item.briefIntroduction} />
              <div className="cardStyle">
                <div className="cardStyle_item">
                  <Meta
                    style={{ marginRight: 10 }}
                    description={item.articleType}
                  />
                  <Meta
                    style={{ marginRight: 10 }}
                    description={`浏览:${item.browse}`}
                  />
                  <Meta description={`评论:${item.comment}`} />
                </div>
                <Meta description={item.time} />
              </div>
            </Card>
          );
        })}
    </div>
  );
};
export default BlogContent;
