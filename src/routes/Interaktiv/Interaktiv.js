import React from "react";
import ReactDOM from "react-dom";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import SimpleLineChart from "components/SimpleLineChart/SimpleLineChart";
import SynchronizedLineChart from "components/SynchronizedLineChart/SynchronizedLineChart";
import SimpleBarChart from "components/SimpleBarChart/SimpleBarChart";
import BrushBarChart from "components/BrushBarChart/BrushBarChart";
import CustomActiveShapePieChart from "components/CustomActiveShapePieChart/CustomActiveShapePieChart";
import SimpleRadarChart from "components/SimpleRadarChart/SimpleRadarChart";
import { Paper } from "@material-ui/core";

export default function Interaktiv() {
  return (
    <div className="App">
      <Container maxWidth="100%">
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} sm={4}>
            <Paper>
              <SimpleLineChart />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper>
              <SimpleBarChart />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper>
              <BrushBarChart />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper>
              <SynchronizedLineChart />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper>
              <CustomActiveShapePieChart />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper>
              <SimpleRadarChart />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
