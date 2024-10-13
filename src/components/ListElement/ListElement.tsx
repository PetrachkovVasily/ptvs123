import classes from "./ListElement.module.css";
import { ListElementProps } from "./ListElementProps";

function ListElement({ x, y }: ListElementProps) {
  return (
    <li className={classes.listElement}>
      <span>x: {x}</span>
      <span>y: {y}</span>
    </li>
  );
}

export default ListElement;
