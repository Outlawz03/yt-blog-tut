import styled from 'styled-components';

import { breakpoints } from './constants';

export const AddPostWrapper = styled.div`
  max-width: 680px;
  margin: 0 auto;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 32px;

    input {
      margin-bottom: 16px;
      border: none;
      line-height: 1.5;
      font-size: 2rem;
      font-weight: 600;
    }

    .textAreaElement {
      min-height: 32px;
      border: none;
      overflow-x: hidden;
      overflow-y: auto;
      margin-bottom: 16px;
    }
  }
`;