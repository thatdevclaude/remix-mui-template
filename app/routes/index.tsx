import { GitHub, OpenInNewOutlined } from "@mui/icons-material";
import {
  alpha,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Stack,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import { ThemeModeSwitch } from "~/components/ThemeModeSwitch";
import { useThemeModeValue } from "~/contexts";

const Header = styled("header")(({ theme }) => ({
  position: "sticky",
  top: 0,
  transition: theme.transitions.create("top"),
  zIndex: theme.zIndex.appBar,
  backdropFilter: "blur(20px)",
  boxShadow: `inset 0px -1px 1px ${
    theme.palette.mode === "dark"
      ? theme.palette.primaryDark[700]
      : theme.palette.grey[100]
  }`,
  backgroundColor:
    theme.palette.mode === "dark"
      ? alpha(theme.palette.primaryDark[900], 0.72)
      : "rgba(255,255,255,0.72)",
}));

export default function Index() {
  return (
    <Box height={"100vh"}>
      <Header>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            minHeight: 56,
          }}
        >
          <Stack direction="row" justifyContent={"flex-end"} spacing={1}>
            <Tooltip title="github">
              <IconButton
                LinkComponent={"a"}
                href="https://github.com/liyujun-dev/remix-mui-template.git"
                color="primary"
                target="_blank"
              >
                <GitHub />
              </IconButton>
            </Tooltip>
            <ThemeModeSwitch />
          </Stack>
        </Container>
      </Header>
      <Box p={2}>
        <Typography textAlign="center" variant="h1" mb={2} gutterBottom>
          Remix ❤ MUI
        </Typography>

        <Stack
          spacing={4}
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="remix logo"
              height={140}
              image={useThemeModeValue(
                "/remix-logo-light.png",
                "/remix-logo-dark.png"
              )}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Remix
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Remix is a full stack web framework that lets you focus on the
                user interface and work back through web fundamentals to deliver
                a fast, slick, and resilient user experience. People are gonna
                love using your stuff.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                LinkComponent="a"
                href="https://remix.run/docs"
                target="_blank"
                endIcon={<OpenInNewOutlined />}
                variant="outlined"
                color="primary"
              >
                Get Start
              </Button>
              <Button
                LinkComponent="a"
                href="https://github.com/remix-run/remix"
                target="_blank"
                endIcon={<GitHub />}
                variant="outlined"
                color="secondary"
              >
                Repository
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="remix logo"
              height={140}
              image="/mui-logo.png"
              sx={{
                objectFit: "contain",
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                MUI
              </Typography>
              <Typography variant="body2" color="text.secondary">
                MUI provides a robust, customizable, and accessible library of
                foundational and advanced components, enabling you to build your
                own design system and develop React applications faster.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                LinkComponent="a"
                href="https://mui.com/"
                target="_blank"
                endIcon={<OpenInNewOutlined />}
                variant="outlined"
                color="primary"
              >
                Get Start
              </Button>
              <Button
                LinkComponent="a"
                href="https://github.com/mui-org/material-ui"
                target="_blank"
                endIcon={<GitHub />}
                variant="outlined"
                color="secondary"
              >
                Repository
              </Button>
            </CardActions>
          </Card>
        </Stack>
      </Box>
    </Box>
  );
}
