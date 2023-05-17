import css from "./Home.module.css";
const Home = () => {
  return (
    <div className={css.container}>
      <p className={css.world}>World</p>
      <p className={css.hello}>Hello</p>
      <p className={css.text}>
        Welcome! My name is Dmytro and I am a Junior Front-End developer.
      </p>
      <p className={css.textDesc}>
        This web application was created with one purpose - to make the process
        of getting acquainted with my projects convenient. I use various
        technologies in my work, for this I created a convenient filter. With
        it, you don t have to look through a lot of unrelated projects. If you
        have any questions for me, please contact me.
      </p>
    </div>
  );
};
export default Home;
