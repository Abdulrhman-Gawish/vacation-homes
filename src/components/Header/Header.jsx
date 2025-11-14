import { useNavigate, useLocation } from "react-router-dom";
import {
  Wrapper,
  Icon,
  TitleWrapper,
  Subtitle,
  Title,
  DesktopNav,
  NavButton,
  MobileNav,
  MobileButton,
  StyledRow,
  InnerContainer,
  HeaderWrapper,
} from "./Header.styles";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About Us", path: "/about" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  const handleTabClick = (path) => {
    navigate(path);
  };

  const isTabActive = (path) => {
    return location.pathname === path;
  };

  return (
    <HeaderWrapper>
      <InnerContainer>
        <StyledRow>
          <Wrapper>
            <Icon />
            <TitleWrapper>
              <Title>Sandy Beach Vacation Homes Rental</Title>
              <Subtitle>Enjoy your Beach Days, City Nights _ all in One Stay</Subtitle>
            </TitleWrapper>
          </Wrapper>

          <Wrapper>
            <DesktopNav>
              {tabs.map((tab) => (
                <NavButton
                  key={tab.id}
                  $active={isTabActive(tab.path)}
                  onClick={() => handleTabClick(tab.path)}
                >
                  {tab.label}
                </NavButton>
              ))}
            </DesktopNav>

            <MobileNav>
              {tabs.map((tab) => (
                <MobileButton
                  key={tab.id}
                  $active={isTabActive(tab.path)}
                  onClick={() => handleTabClick(tab.path)}
                >
                  {tab.label}
                </MobileButton>
              ))}
            </MobileNav>
          </Wrapper>
        </StyledRow>
      </InnerContainer>
    </HeaderWrapper>
  );
}
