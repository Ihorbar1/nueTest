import React from 'react';
import ReactDOM from "react-dom";
import { MainBlock } from './styles.jsx'

export default class extends React.Component {
   render() {
      console.log(this.props.test);

      return (
         <>
            <MainBlock test={this.props.test} valid={this.props.valid} />
         </>
      )
   }
}