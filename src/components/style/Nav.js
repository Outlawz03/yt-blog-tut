import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  position: fixed;
  top:0;
  left: 0;
  line-height: 80px;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);

    .nav-wrapper {
      display: flex;
      margin-left: 64px;
      margin-right: 64px;
      align-items: center;
    }

    .nav-brand {
      height: 64px;
      width: 64px;
    }

    .nav-links {
      margin-left: auto;
      ul {
        display: flex;

        li {
          margin-right: 1.5rem;
        }
      }
    }
`;

export const NavBumper = styled.div`
  display: block;
  height: 80px;
  width: 100%;
`;