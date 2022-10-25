import articleStyles from "../styles/Article.module.css";
import Artcileitem from "./Artcileitem";

const Article = ({ articles }) => {
  return (
    <>
      <div className={articleStyles.grid}>
        {articles.map((article) => (
          <Artcileitem article={article} key={article.id} />
        ))}
      </div>
    </>
  );
};

export default Article;
