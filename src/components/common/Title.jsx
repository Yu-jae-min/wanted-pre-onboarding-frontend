import "./title.css";

const Title = ({ mainTitle, subTitle }) => {
  return (
    <div className="titleWrap">
      <h1>{mainTitle}</h1>
      {subTitle && <span>{subTitle}</span>}
    </div>
  );
};

export default Title;
