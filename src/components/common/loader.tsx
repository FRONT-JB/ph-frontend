import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const Loader = () => {
  return (
    <LoaderStyled>
      <LoaderOuterStyled />
      <LoaderMiddleStyled />
      <LoaderInnerStyled />
    </LoaderStyled>
  );
};

const defaultLoaderStyles = css`
  border: 3px solid transparent;
  border-top-color: #3f3f46;
  border-right-color: #f4f4f5;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
`;

const loaderKeyframes = keyframes`
  to {
      transform: rotate(360deg);
    }
`;

const LoaderStyled = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const LoaderOuterStyled = styled.div`
  ${defaultLoaderStyles}
  width: 3.5em;
  height: 3.5em;
  margin-left: -1.75em;
  margin-top: -1.75em;
  animation: ${loaderKeyframes} 2s linear infinite;
`;

const LoaderMiddleStyled = styled.div`
  ${defaultLoaderStyles}
  width: 2.1em;
  height: 2.1em;
  margin-left: -1.05em;
  margin-top: -1.05em;
  animation: ${loaderKeyframes} 1.75s linear reverse infinite;
`;

const LoaderInnerStyled = styled.div`
  ${defaultLoaderStyles}
  width: 0.8em;
  height: 0.8em;
  margin-left: -0.4em;
  margin-top: -0.4em;
  animation: ${loaderKeyframes} 1.5s linear infinite;
`;

export default Loader;
