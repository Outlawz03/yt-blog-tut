import styled from 'styled-components';

import { breakpoints } from './constants';

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
    margin-left: 16px;
    margin-right: 16px;

    @media (min-width: ${ breakpoints.md}) {
      margin-left: 64px;
      margin-right: 64px;
    }
  }

  .nav-container {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
    margin-left: auto;

    @media (min-width: ${ breakpoints.md}) {
      flex-direction:row;
      align-items: center;
    }
  }

  .nav-brand {
    svg {
      height: 64px;
      width: 64px;
      vertical-align: middle;
    }    
  }

  .nav-links {
    width: 100%;
    ul {
      display: flex;
      flex-direction: column;
      line-height: 2;
      margin-bottom: 1rem;
      align-items: flex-end;

      @media (min-width: ${ breakpoints.md}) {
        display: flex!important;
        flex-direction: row;
        margin-bottom: 0;
      }

      &:not(.show) {
        display: none;
      }

      li {
        @media (min-width: ${ breakpoints.md}) {
          margin-right: 1.5rem;
        }

        a {
          display: block;
          text-align: right;
        }
      }
    }
  }

  .nav-right {
    display: flex;
  }

  .nav-menu-button {
    display: block;
    margin-left: 1.5rem;
    @media (min-width: ${ breakpoints.md}) {
      display: none;
    }

    svg {
      width: 32px;
      height: 32px;
      vertical-align: middle;
    }
  }
`;

export const NavBumper = styled.div`
  display: block;
  height: 80px;
  width: 100%;
`;

export const NavCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
`;