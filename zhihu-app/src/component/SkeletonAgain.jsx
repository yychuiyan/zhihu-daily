import React from 'react';
import { Skeleton } from 'antd-mobile';

const SkeletonAgain = () => {
  return (
    <div className="skeleton_again_box">
      <Skeleton.Title animated />
      <Skeleton.Paragraph lineCount={5} animated />
    </div>
  );
};

export default SkeletonAgain;
