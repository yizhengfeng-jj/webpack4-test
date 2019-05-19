import React, { Component } from 'react';
import ReactDom from 'react-dom';
import styles from './css/style.less';

import cat from './img/cat.jpg';
console.log(223366699);

class App extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <div>
        <div className={styles['demo']}>hello react</div>
        <div className='iconfont' />
        <img src={cat} alt='猫' />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
// const render = () => {
//   ReactDom.render(<App />, document.getElementById('root'));
// };

// render();

// if (module.hot) {
//   module.hot.accept('./index.js', () => {
//     console.log('aaaaa');
//     render();
//   });
// }

if (module.hot) {
  module.hot.accept();
}
