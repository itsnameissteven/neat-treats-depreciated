const preventAnimation = (prevented: boolean) => {
  return {
    noAnimation: prevented ? "no-animation" : "",
  };
};

export default preventAnimation;
