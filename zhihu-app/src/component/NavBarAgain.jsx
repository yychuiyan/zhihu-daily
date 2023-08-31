import React from 'react';
import { NavBar } from 'antd-mobile';
import PropTypes from 'prop-types';
const NavBarAgain = props => {
  let { title } = props;
  const handleBack = () => {
    // 返回逻辑
  };
  return <NavBar onBack={handleBack}>{title}</NavBar>;
};
// 属性赋默认值
NavBarAgain.defaultProps = {
  title: '个人中心',
};
// 校验
NavBarAgain.protoTypes = {
  title: PropTypes.string,
};

export default NavBarAgain;
