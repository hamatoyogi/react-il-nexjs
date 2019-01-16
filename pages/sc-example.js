import React from 'react';
import { observable, action, decorate } from 'mobx';
import { observer } from 'mobx-react';

import styled from 'styled-components';
import BsGen from './mobx-example';

// some overly styled button
const MyButton = styled.button`
     background: #3d94f6;
     background-image: -webkit-linear-gradient(top, #3d94f6, #1e62d0);
     background-image: -moz-linear-gradient(top, #3d94f6, #1e62d0);
     background-image: -ms-linear-gradient(top, #3d94f6, #1e62d0);
     background-image: -o-linear-gradient(top, #3d94f6, #1e62d0);
     background-image: linear-gradient(to bottom, #3d94f6, #1e62d0);
     -webkit-border-radius: 20px;
     -moz-border-radius: 20px;
     border-radius: 20px;
     color: #ffffff;
     font-family: Open Sans;
     font-size: 40px;
     font-weight: 100;
     padding: 40px;
     box-shadow: 1px 1px 20px 0px #000000;
     -webkit-box-shadow: 1px 1px 20px 0px #000000;
     -moz-box-shadow: 1px 1px 20px 0px #000000;
     text-shadow: 1px 1px 20px #000000;
     border: solid #337fed 1px;
     text-decoration: none;
     display: inline-block;
     cursor: pointer;

  &:hover {
       background: #1e62d0;
       background-image: -webkit-linear-gradient(top, #1e62d0, #3d94f6);
       background-image: -moz-linear-gradient(top, #1e62d0, #3d94f6);
       background-image: -ms-linear-gradient(top, #1e62d0, #3d94f6);
       background-image: -o-linear-gradient(top, #1e62d0, #3d94f6);
       background-image: linear-gradient(to bottom, #1e62d0, #3d94f6);
       text-decoration: none;
  }
`;

const Header = styled.div`
  font-weight: bold;
  font-family: Helvetica;
  font-size: 48px;
  color: blue;
`;

const StyleBsGen = styled(BsGen)`
  div {
    color: hotpink;
    font-weight: bold;
    font-style: italic;
    font-size: 48px;
  }

  h3 {
    color: red;
    background: black;
    font-weight: bold;
  }
  button {
    background: #3d94f6;
       background-image: -webkit-linear-gradient(top, #3d94f6, #1e62d0);
       background-image: -moz-linear-gradient(top, #3d94f6, #1e62d0);
       background-image: -ms-linear-gradient(top, #3d94f6, #1e62d0);
       background-image: -o-linear-gradient(top, #3d94f6, #1e62d0);
       background-image: linear-gradient(to bottom, #3d94f6, #1e62d0);
       -webkit-border-radius: 20px;
       -moz-border-radius: 20px;
       border-radius: 20px;
       color: #ffffff;
       font-family: Open Sans;
       font-size: 40px;
       font-weight: 100;
       padding: 40px;
       box-shadow: 1px 1px 20px 0px #000000;
       -webkit-box-shadow: 1px 1px 20px 0px #000000;
       -moz-box-shadow: 1px 1px 20px 0px #000000;
       text-shadow: 1px 1px 20px #000000;
       border: solid #337fed 1px;
       text-decoration: none;
       display: inline-block;
       cursor: pointer;

    &:hover {
         background: #1e62d0;
         background-image: -webkit-linear-gradient(top, #1e62d0, #3d94f6);
         background-image: -moz-linear-gradient(top, #1e62d0, #3d94f6);
         background-image: -ms-linear-gradient(top, #1e62d0, #3d94f6);
         background-image: -o-linear-gradient(top, #1e62d0, #3d94f6);
         background-image: linear-gradient(to bottom, #1e62d0, #3d94f6);
         text-decoration: none;
    }
  }
`;

const SCExample = () => {
  return (
    <div className="SC-example">
      <Header>Test Header</Header>
      <StyleBsGen />
    </div>
  );
};

export default observer(SCExample);
