import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function ListPeople({ members }) {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {members.map((e, i) => (
        <>
          <ListItem key={i}>
            <ListItemAvatar>
              <Avatar alt={e.login} src="/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={e.login}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    О себе
                  </Typography>
                  {" — " + e.login + "…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </>
      ))}
    </List>
  );
}
