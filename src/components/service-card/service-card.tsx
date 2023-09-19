import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Status, { StatusType } from "../status/status";
import styles from "./service-card.module.css";

interface ServiceCardProps {
  title: String;
  status: StatusType;
}

export default function ServiceCard({
  title,
  status = "up",
}: ServiceCardProps) {
  return (
    <Card className={styles.card}>
      <CardContent className={styles.cardContent}>
        <Typography component="div" variant="subtitle1" noWrap>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          <Status label="Status:" value={status} />
        </Typography>
      </CardContent>
      <Box className={styles.icons}>
        <IconButton aria-label="edit">
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="Stash">
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Box>
    </Card>
  );
}
