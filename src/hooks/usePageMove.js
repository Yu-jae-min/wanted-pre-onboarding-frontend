import { useNavigate } from "react-router-dom";

const usePageMove = (url) => {
  const navigate = useNavigate();

  const goToPage = () => {
    navigate(url);
  };

  return { goToPage };
};

export { usePageMove };
