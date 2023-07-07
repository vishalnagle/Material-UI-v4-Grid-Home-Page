import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import SignIn from "./signup";

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props;
  const [isSignupOpen, setIsSignupOpen] = React.useState(false);

  const handleSignupClick = () => {
    setIsSignupOpen(true);
  };

  const closeSignupPopup = () => {
    setIsSignupOpen(false);
  };

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small" onClick={handleSignupClick}>
          Sign up
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            target="_blank"
            href={section.url}
            sx={{
              p: 1,
              flexShrink: 0,
              textDecoration: "none",
              "&:hover": {
                color: " #ff9800",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                borderRadius: "4px",
              },
            }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
      {isSignupOpen && <SignIn onClose={closeSignupPopup} open={true} />}
    </React.Fragment>
  );
}
