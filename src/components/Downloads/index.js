import React from "react";
import { Container, Box, Button, Typography } from "@mui/material";
import IOS from "../../Assets/images/IOSAlt.svg";
import Android from "../../Assets/images/Android.svg";
import Windows from "../../Assets/images/Windows.svg";
import MACOS from "../../Assets/images/macOS.svg";
import Linux from "../../Assets/images/Linux.svg";
import AndroidButton from "../../Assets/images/AndroidButton.svg";
import IOSButton from "../../Assets/images/IOSButton.svg";
import "../Downloads/index.scss";

// const File_URL = "https://invochat-bucket.s3.amazonaws.com/Invochat.app.zip";

const index = () => {
  const cardsData = [
    {
      titleImage: IOS,
      title: "IOS",
      buttonImage: IOSButton,
      buttonText: "",
      imageAlt: "ios",
      fileLink: "",
    },
    {
      titleImage: Android,
      title: "Android",
      buttonImage: AndroidButton,
      buttonText: "",
      imageAlt: "android",
      fileLink: "",
    },
    {
      titleImage: Windows,
      title: "Windows",
      buttonImage: "",
      buttonText: "Download",
      imageAlt: "windows",
      fileLink:
        "https://invochat-bucket.s3.amazonaws.com/invochat-desktop-setup-5.2.2-win.exe",
    },
    {
      titleImage: MACOS,
      title: "macOS",
      buttonImage: "",
      buttonText: "Download",
      imageAlt: "macOS",
      fileLink:
        "https://invochat-bucket.s3.amazonaws.com/invochat-desktop-5.2.2-mac-x64.dmg",
    },
    {
      titleImage: Linux,
      title: "Linux",
      buttonImage: "",
      buttonText: "Download 64-Bit",
      imageAlt: "linux",
      fileLink:
        "https://invochat-bucket.s3.amazonaws.com/invochat-desktop_5.2.2-1_amd64.deb",
    },
  ];
  return (
    <Container>
      <Box className="cardsDicWrapper">
        {cardsData.map((content) => (
          <Box className="downloadCardWrapper">
            <Box className="cardBody">
              <img src={content.titleImage} alt={content.imageAlt} />
              <Typography variantMapping="p">{content.title}</Typography>
              {content.buttonImage ? (
                <a href={content.fileLink}>
                  <img src={content.buttonImage} />
                </a>
              ) : (
                <a href={content.fileLink}>
                  <Button>{content.buttonText}</Button>
                </a>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default index;
