import React from 'react';
import classnames from 'classnames';
import styles from './index.module.less';

const Button: React.FC = function(props) {
  return <button className={classnames(styles.large, styles.bold)}>{props.children}</button>;
};
export default Button;
