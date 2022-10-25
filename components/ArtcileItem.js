import artcileItemStyles from "../styles/Article.module.css";
import Link from "next/link";

const Artcileitem = ({ article }) => {
  return (
    <>
      <div>
        <Link href="/article/[id]" as={`/article/${article.id}`}>
          <a className={artcileItemStyles.card}>
            <h3>{article.title} &rarr;</h3>
            <p>{article.body}</p>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Artcileitem;
