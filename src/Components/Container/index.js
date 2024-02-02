import style from "./container.module.scss";

const Container = ({ children, className }) => {
  return <div className={`${className} ${style.container}`}>{children}</div>;
};

export default Container;
