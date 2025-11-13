import { useNavigate, useLocation } from "react-router-dom";
import { SectionTitle, LinkList, LinkItem } from "./Footer.styles";

const FooterQuickLinks = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  return (
    <div>
      <SectionTitle>Company</SectionTitle>
      <LinkList>
        <LinkItem onClick={() => handleNavigation("/")}>Home</LinkItem>
        <LinkItem onClick={() => handleNavigation("/about")}>About Us</LinkItem>
        <LinkItem onClick={() => handleNavigation("/contact")}>Contact</LinkItem>
      </LinkList>
    </div>
  );
};

export default FooterQuickLinks;
