import ServiceCard from "@/components/service-card/service-card";
import { StatusType } from "@/components/status/status";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Legend from "@/components/Legend/legend";
import styles from "./page.module.css";

interface Service {
  id: number;
  service: string;
  status: StatusType;
}

export const getData = async () => {
  const response = await fetch(String(process.env.API), {
    next: { revalidate: Number(process.env.NEXT_REVALIDATE) },
  });
  const services = (await response.json()) as Service[] ;
  return services;
};

export default async function Home() {
  const services = await getData();

  return (
    <main className={styles.main}>
      <Typography variant="h4">Painel de Serviços Externos</Typography>
      <br />
      <Grid container spacing={2}>
        {services.map((service) => (
          <Grid key={service.id} item sm={4} xs={12}>
            <ServiceCard title={service.service} status={service.status} />
          </Grid>
        ))}
      </Grid>
      <Legend />
    </main>
  );
}
