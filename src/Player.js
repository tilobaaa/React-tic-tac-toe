import classes from "./Player.module.css";

const Player = (props) => {
  return (
    <div>
      <h3>Player {props.player}</h3>
      <p className={classes.score}>{props.score}</p>
    </div>
  );
};

export default Player;
