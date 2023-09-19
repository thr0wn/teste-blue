import { Grid, Skeleton, Typography } from "@mui/material";
import styles from "./page.module.css";

export default async function Loading() {
  return (
    <main className={styles.main}>
      <Skeleton variant="text" height={40} />
      <br />
      <Grid container spacing={2}>
        <Grid item sm={4} xs={12}>
          <Skeleton variant="rectangular" height={80} />
        </Grid>
        <Grid item sm={4} xs={12}>
          <Skeleton variant="rectangular" height={80} />
        </Grid>
        <Grid item sm={4} xs={12}>
          <Skeleton variant="rectangular" height={80} />
        </Grid>
      </Grid>
    </main>
  );
}
