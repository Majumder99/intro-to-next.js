import headerStyles from "../styles/Header.module.css";

const Header = () => {
  const x = 2;
  return (
    <>
      <div>
        <h1>
          <span className="title">WebDev</span>
          <span className={headerStyles.title}>Headerstyles</span>
        </h1>
        <p className={headerStyles.description}>
          Keep up to date with the latest web dev news
        </p>
        <style jsx>
          {`
            .title {
              color: red;
              font-size: ${x > 3 ? "20px" : "30px"};
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Header;
