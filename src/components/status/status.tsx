import CircleIcon from "@mui/icons-material/Circle";
import classNames from "classnames";
import styles from "./status.module.css";

export type StatusType = "up" | "warning" | "error";

export interface StatusProps {
  label?: String;
  value: StatusType;
}

export default function Status({ label, value }: StatusProps) {
  return (
    <p className={styles.status}>
      {label}
      <CircleIcon
        className={classNames(styles.statusIcon, styles[value])}
        fontSize="small"
      />
    </p>
  );
}
