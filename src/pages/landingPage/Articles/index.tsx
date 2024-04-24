import React, { useEffect, useState } from "react";
import { Styles } from "./styles";
import Title from "@/components/Title";
import { Link } from "react-router-dom";

const url =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jacobpetergl";
const Articles = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.items));
  }, []);

  return (
    <Styles>
      <div className="container">
        <div className="module">
          <Title idx="07" text="ARTICLES" data-aos="fade-up" />
          <div className="content">
            <p className="text" data-aos="fade-up" data-aos-delay={100}>
              <span>Lastest news</span> from TypingLab
            </p>
            <div className="news-list" data-aos="fade-up" data-aos-delay={200}>
              {data?.slice(0, 6)?.map((el: any, idx: number) => {
                return <ArticleComponent article={el} index={idx} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default Articles;

const ArticleComponent = ({ index, article }: any) => {
  const firstImage = (article["description"] as any)
    .toString()
    .match(/<img[^>]+src="([^">]+)"/)[1];
  return (
    <Link to={article?.link} target="__blank" key={index} className="article">
      <div className="image">
        <img src={firstImage} alt="" />
      </div>
      <p className="title">{article?.title}</p>
      <p className="time">{article?.pubDate}</p>
    </Link>
  );
};
