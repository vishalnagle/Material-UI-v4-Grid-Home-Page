import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        target="_blank"
        href="https://en.wikipedia.org/wiki/Technology"
      >
        Next Wave of Technology
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

interface FooterProps {
  description: string;
  title: string;
  social: ReadonlyArray<{
    icon: React.ElementType;
    name: string;
    url: string;
  }>;
}

export default function Footer(props: FooterProps) {
  const { description, title, social } = props;

  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
        <Stack direction="row" spacing={1} justifyContent={"center"} mt={0.5}>
          {social.map((network) => (
            <Link
              display="flex"
              variant="body1"
              target="_blank"
              href={network.url}
              key={network.name}
              sx={{ mb: 0.5, alignItems: "center" }}
            >
              <network.icon />
              <span>{network.name}</span>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
