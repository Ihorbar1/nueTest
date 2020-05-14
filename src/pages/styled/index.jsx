import React from 'react';
import ReactDOM from "react-dom";
import MainBlock from '../../components/styledBlock/index'

export default class extends React.Component {
   state = {
      test: true,
      valid: false
   }

   testTrue = () => {
      this.setState({ test: true })
      this.setState({ valid: true })
      console.log(1);

   }

   testFalse = () => {
      this.setState({ test: false })
      this.setState({ valid: true })
      console.log(2);

   }

   render() {
      // console.log(this.state.test);

      return (
         <>
            <p>Hello home</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, velit?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, ad dolore molestias nostrum ea pariatur labore cupiditate tempore et cum?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos et rerum distinctio.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <MainBlock test={this.state.test} valid={this.state.valid} />
            <button onClick={this.testTrue}>true</button>
            <button onClick={this.testFalse}>false</button>
         </>
      )
   }
}