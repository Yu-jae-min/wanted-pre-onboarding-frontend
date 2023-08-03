import { useMemo } from "react";
import "./title.css";

const Title = ({ mainTitle, subTitle }) => {
  const renderSubtitle = useMemo(() => {
    if (!subTitle) return <></>;

    return <span>{subTitle}</span>;
  }, [subTitle]);

  return (
    <div className="titleWrap">
      <h1>{mainTitle}</h1>
      {renderSubtitle}
    </div>
  );
};

export default Title;
