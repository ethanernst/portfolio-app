import { useNavigate, useLocation } from 'react-router-dom';

import styled from 'styled-components';

const Button = styled.button`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  border: none;
  color: var(--white);
  background-color: var(--black);
  font: inherit;
  outline: inherit;
  font-size: 2rem;
  transition: all 300ms ease-in-out;

  :hover {
    background-color: var(--white);
    color: var(--black);
  }
`;

function HomeButton() {
  const navigate = useNavigate();
  const location = useLocation();

  // will act as a back button if previous page was home,
  // otherwise will load home while preserving history stack
  const handleNavigate = () => {
    if (location.state?.fromHome) {
      navigate(-1);
    } else {
      navigate('/', { replace: true });
    }
  };

  return <Button onClick={handleNavigate}>Home</Button>;
}

export default HomeButton;
