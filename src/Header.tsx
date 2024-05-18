import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Logo } from "./resources/images/stackline_logo.svg";

function Header() {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton edge="start" size="medium" onClick={() => navigate("/")}>
          <Logo width={100} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
