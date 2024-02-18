import LatestNews from "@/components/ui/latestNews/LatestNews";
import SideBar from "@/components/ui/sideBar/SideBar";
import { Box, Container, Grid } from "@mui/material";


export default function Home() {
  return (
    <Box >
      <Container maxWidth="xl">
        <Grid container spacing={8}>
          <Grid item xs={12} md={8}>
            <LatestNews />
          </Grid>
          <Grid item xs={12} md={4}>
            <SideBar />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
