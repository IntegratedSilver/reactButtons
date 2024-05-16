import React, { useState } from 'react';
import styles from './Button.module.css';
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
const Like: React.FC = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      {liked ? <AiOutlineLike /> : <AiFillLike />}
    </button>
  );
};

export default Like;