import { useNavigate } from "react-router-dom";

import { AppBar, IconButton, Toolbar } from "./components";
import { ReactComponent as Logo } from "./resources/images/stackline_logo.svg";

function Header() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: "#14233F" }}>
      <Toolbar variant="dense">
        <IconButton edge="start" size="medium" onClick={() => navigate("/")}>
          <Logo width={100} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
