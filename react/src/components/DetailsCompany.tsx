import { Box, Button, Container, Divider, Grid, Paper, Typography } from "@mui/material";

function DetailsCompany(props: any) {
  return (
    <Container component="main" maxWidth="md" sx={{ pt: 5, heigth: 600 }}>
      <Paper sx={{ p: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <Box sx={{ p: 1 }} >
                  <Typography noWrap sx={{ p: 1, fontWeight: "bold", fontSize: "1.5rem" }}  variant="h5" display="flex" alignItems="center">
                    {props.eventParticipation.company.name}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ p: 1 }}>
                  <Typography sx={{ p: 1, pl: 1 }} variant="body1" display="flex" alignItems="center">
                    {"Isikukood: " + props.eventParticipation.company.registerCode}
                  </Typography>
                </Box>
                <Divider variant="middle" />
              </Grid>

              <Grid item xs={12} md={4}>
                <Box sx={{ p: 1 }}>
                  <Typography sx={{ p: 1 }} variant="body1" display="flex" alignItems="center">
                    {"Makseviis: " + props.eventParticipation.paymentType}
                  </Typography>
                </Box>
                <Divider variant="middle" />
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ p: 1 }}>
                  <Typography sx={{ p: 1 }} variant="body1" display="flex" alignItems="center">
                    {"Osalejad: " + props.eventParticipation.numOfParticipants}
                  </Typography>
                </Box>
                <Divider variant="middle" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ height: 400 }}>
              <Paper elevation={0} sx={{ p: 1, height: "100%", overflow: "auto" }}>
                <Typography sx={{ p: 2, fontWeight: "bold" }} variant="h5" display="flex" alignItems="center">
                  Lisainfo:
                </Typography>
                <Divider variant="middle" />
                <Typography sx={{ p: 2, whiteSpace: "pre-line" }} variant="subtitle1" display="flex" alignItems="center">
                  {props.eventParticipation.extraInfo}
                </Typography>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ p: 1 }} display="flex" alignItems="center">
              <Button
                fullWidth
                onClick={() => {
                  props.closeModal(false);
                }}
                variant="contained">
                Tagasi
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default DetailsCompany;
