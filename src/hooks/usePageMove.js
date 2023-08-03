import { useNavigate } from "react-router-dom";

const usePageMove = () => {
  const navigate = useNavigate();

  const goToPage = (url) => {
    navigate(url);
  };

  return { goToPage };
};

export { usePageMove };
