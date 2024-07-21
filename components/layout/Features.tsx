"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import GroupsIcon from "@mui/icons-material/Groups";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useTheme } from "next-themes";
import { useState } from "react";
import "./features.css";

interface Item {
  icon: JSX.Element;
  title: string;
  description: string;
  imageLight: string;
  imageDark: string;
}

const items: Item[] = [
  {
    icon: <LocalShippingIcon />,
    title: "Przeprowadzki Gorzów i okolice, cały kraj i Europa",
    description:
      "Realizujemy przeprowadzki w Gorzowie, całej Polsce oraz Europie, w tym do Anglii, Skandynawii, Niemiec, Francji, Holandii i innych krajów.",
    imageLight: 'url("/hero/img1.jpg")',
    imageDark: 'url("/hero/img1.jpg")',
  },
  {
    icon: <DirectionsCarIcon />,
    title: "Kompleksowe usługi transportowe",
    description:
      "Przewozimy pianina, fortepiany, sprzęt AGD i RTV, antyki, maszyny i towary na paletach. Zapewniamy pełne zabezpieczenie ładunku.",
    imageLight: 'url("/hero/img10.jpg")',
    imageDark: 'url("/hero/img10.jpg")',
  },
  {
    icon: <GroupsIcon />,
    title: "Elastyczność i dostosowanie do klienta",
    description:
      "Oferujemy demontaż i montaż mebli, utylizację starych rzeczy, sprzątanie piwnic i garaży oraz wynajem aut z kierowcą. Dostosowujemy się do indywidualnych potrzeb.",
    imageLight: 'url("/hero/img12.jpg")',
    imageDark: 'url("/hero/img12.jpg")',
  },
];

const Features: React.FC = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6} fontFamily={"'Inter', sans-serif"}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography
              component="h2"
              variant="h4"
              fontFamily={"'Inter', sans-serif"}
              className="text-[#131B20] dark:text-white"
            >
              Twoje Mienie w Dobrych Rękach!
            </Typography>
            <Typography
              variant="body1"
              className="text-[#4C5967] dark:text-[rgb(148,166,184)]"
              fontFamily={"'Inter', sans-serif"}
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
              Oferujemy kompleksowe usługi przeprowadzkowe i transportowe,
              dostosowane do indywidualnych potrzeb klientów. Nasze
              doświadczenie i profesjonalizm gwarantują satysfakcję i
              bezpieczeństwo podczas każdej przeprowadzki.
            </Typography>
          </div>
          <Grid
            container
            item
            gap={1}
            sx={{ display: { xs: "auto", sm: "none" } }}
            className="xs:auto sm:hidden"
          >
            {items.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
                className="dark:chipGradientBg"
                sx={{
                  alignSelf: "center",
                  py: 1.5,
                  px: 0.5,
                  border: "1px solid",
                  fontWeight: "600",
                  borderColor: () => {
                    if (!isDarkMode) {
                      return selectedItemIndex === index
                        ? "#9CCCFC"
                        : "rgba(9, 89, 170, 0.3)";
                    }
                    return selectedItemIndex === index ? "#9CCCFC" : "";
                  },
                  background: () => {
                    if (!isDarkMode) {
                      return selectedItemIndex === index
                        ? "none"
                        : "linear-gradient(to right bottom, rgb(240, 247, 255), rgb(206, 229, 253))";
                    }
                    return selectedItemIndex === index ? "none" : "";
                  },
                  backgroundColor: selectedItemIndex === index ? "#0959AA" : "",
                  "& .MuiChip-label": {
                    color:
                      selectedItemIndex === index
                        ? "#FFF"
                        : isDarkMode
                        ? "rgb(156, 204, 252)"
                        : "rgb(9, 89, 170)",
                  },
                  "&:hover": {
                    backgroundColor: isDarkMode ? "#064079" : "#0959AA",
                  },
                  "&:focus-visible": {
                    borderColor: isDarkMode ? "#9CCCFC" : "#02294F",
                    backgroundColor: isDarkMode ? "#064079" : "#9CCCFC",
                  },
                  "& .MuiChip-icon": {
                    color: isDarkMode ? "#9CCCFC" : "#0959AA",
                  },
                }}
                fontFamily={"'Inter', sans-serif"}
              />
            ))}
          </Grid>
          <Box
            component={Card}
            variant="outlined"
            sx={{
              "&:hover": {
                borderColor: isDarkMode ? "#364049" : "#55A6F6",
                boxShadow: isDarkMode ? "0 0 24px #02294F" : "0 0 24px #CEE5FD",
              },
              transition: "background-color, border, 80ms ease",
              display: { xs: "auto", sm: "none" },
              mt: 4,
              border: "1px solid",
              borderColor: isDarkMode
                ? "rgba(54, 64, 73, 0.3)"
                : "rgba(214, 226, 235, 0.8)",
              borderRadius: 6,
              background: isDarkMode
                ? "linear-gradient(rgb(9, 14, 16), rgba(19, 27, 32, 0.5))"
                : "linear-gradient(to bottom, #FFF, #FBFCFE",
            }}
            className="xs:auto sm:hidden"
          >
            <Box
              sx={{
                backgroundImage: () =>
                  !isDarkMode
                    ? items[selectedItemIndex].imageLight
                    : items[selectedItemIndex].imageDark,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: 280,
              }}
            />
            <Box sx={{ px: 2, pb: 2 }}>
              <Typography
                color={isDarkMode ? "#FFFFFF" : "#131B20"}
                variant="body2"
                fontWeight="bold"
                fontFamily={"'Inter', sans-serif"}
                className="pt-10"
              >
                {selectedFeature.title}
              </Typography>
              <Typography
                color={isDarkMode ? "rgb(148, 166, 184)" : "#4C5967"}
                variant="body2"
                sx={{ my: 0.5 }}
                fontFamily={"'Inter', sans-serif"}
              >
                {selectedFeature.description}
              </Typography>
              <Link
                color="primary"
                variant="body2"
                fontWeight="bold"
                fontFamily={"'Inter', sans-serif"}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  "& > svg": { transition: "0.2s" },
                  "&:hover > svg": { transform: "translateX(2px)" },
                }}
                underline="none"
              >
                <span>Dowiedz się więcej</span>
                <ChevronRightRoundedIcon
                  fontSize="small"
                  sx={{ mt: "1px", ml: "2px" }}
                />
              </Link>
            </Box>
          </Box>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: "100%", display: { xs: "none", sm: "flex" } }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Card
                key={index}
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={{
                  p: 3,
                  height: "fit-content",
                  width: "100%",
                  background: "none",
                  backgroundColor:
                    selectedItemIndex === index
                      ? isDarkMode
                        ? "rgba(2, 41, 79, 0.2)"
                        : "rgba(156, 204, 252, 0.2)"
                      : undefined,
                  border: "1px solid",
                  borderColor: () => {
                    if (!isDarkMode) {
                      return selectedItemIndex === index
                        ? "#9CCCFC"
                        : "#D6E2EB";
                    }
                    return selectedItemIndex === index ? "#02294F" : "#131B20";
                  },
                  boxSizing: "border-box",
                  transition: "all 100ms ease-in",
                  "&:focus-visible": {
                    outline: `3px solid rgba(9, 89, 170, 0.5)`,
                    outlineOffset: "2px",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    textAlign: "left",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { md: "center" },
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      color: () => {
                        if (!isDarkMode) {
                          return selectedItemIndex === index
                            ? "#0959AA"
                            : "#BFCCD9";
                        }
                        return selectedItemIndex === index
                          ? "#0959AA"
                          : "#364049";
                      },
                    }}
                  >
                    {icon}
                  </Box>
                  <div>
                    <Typography
                      color={isDarkMode ? "#FFFFFF" : "#131B20"}
                      variant="body2"
                      fontWeight="bold"
                      fontFamily={"'Inter', sans-serif"}
                    >
                      {title}
                    </Typography>
                    <Typography
                      color={isDarkMode ? "rgb(148, 166, 184)" : "#4C5967"}
                      variant="body2"
                      sx={{ my: 0.5 }}
                      fontFamily={"'Inter', sans-serif"}
                    >
                      {description}
                    </Typography>
                    <Link
                      color="primary"
                      variant="body2"
                      fontWeight="bold"
                      fontFamily={"'Inter', sans-serif"}
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        "& > svg": { transition: "0.2s" },
                        "&:hover > svg": { transform: "translateX(2px)" },
                      }}
                      underline="none"
                      onClick={(event: any) => {
                        event.stopPropagation();
                      }}
                    >
                      <span>Dowiedz się więcej</span>
                      <ChevronRightRoundedIcon
                        fontSize="small"
                        sx={{ mt: "1px", ml: "2px" }}
                      />
                    </Link>
                  </div>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: "none", sm: "flex" }, width: "100%" }}
          border="none"
        >
          <Card
            variant="outlined"
            sx={{
              height: "100%",
              width: "100%",
              display: { xs: "none", sm: "flex" },
              pointerEvents: "none",
              border: "none",
            }}
            border="none"
          >
            <Box
              sx={{
                m: "0",
                width: "100%",
                height: "100%",
                minWidth: "100%",
                minHeight: 500,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: () =>
                  !isDarkMode
                    ? items[selectedItemIndex].imageLight
                    : items[selectedItemIndex].imageDark,
                border: "none",
              }}
              border="4px solid"
              borderColor={
                isDarkMode
                  ? "rgba(54, 64, 73, 0.3)"
                  : "rgba(214, 226, 235, 0.8)"
              }
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Features;
