import Alert from "@mui/material/Alert";
import styles from "./legend.module.css";
import Status from "../status/status";
import { Chip } from "@mui/material";

export default function Legend() {
  return (
    <Alert severity="info" className={styles.legend}>
      Status possíveis:{" "}
      <Chip
        avatar={<Status value="up"></Status>}
        label="up"
        variant="outlined"
      />
      &nbsp;
      <Chip
        avatar={<Status value="warning"></Status>}
        label="warning"
        variant="outlined"
      />
      &nbsp;
      <Chip
        avatar={<Status value="error"></Status>}
        label="error"
        variant="outlined"
      />
    </Alert>
  );
}
