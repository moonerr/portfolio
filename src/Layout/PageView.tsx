import React from "react";
import { Drawer, Grid, List, ListItemButton } from "@mui/material";
import { ReactComponent as SelfieIcon } from "../selfie.svg";
import { Header, Ext } from "@eve/exp";

interface LayoutProps {
  children: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={2}>
          <Drawer variant="permanent">
            <List>
              <ListItemButton>
                {/* <Accessibility /> */}
                <SelfieIcon />
              </ListItemButton>
            </List>
          </Drawer>
        </Grid>
        <Grid item xs>
          <Header />
          <Ext.YourComponent />
          {children}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
