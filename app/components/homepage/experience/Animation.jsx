import { Player } from "@lottiefiles/react-lottie-player";

const AnimationLottie = ({ animationPath, loop = true, autoplay = true }) => {
  return (
    <Player
      src={animationPath}
      loop={loop}
      autoplay={autoplay}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default AnimationLottie;
