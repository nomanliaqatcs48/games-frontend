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
      fileLink: "https://apps.apple.com/us/app/invochat/id1614223566",
    },
    {
      titleImage: Android,
      title: "Android",
      buttonImage: AndroidButton,
      buttonText: "",
      imageAlt: "android",
      fileLink: "https://play.google.com/store/apps/details?id=com.invochat.co",
    },
    {
      titleImage: Windows,
      title: "Windows",
      buttonImage: "",
      buttonText: "Download",
      imageAlt: "windows",
      fileLink:
        "https://invochat-bucket.s3.amazonaws.com/invochat-desktop-setup-win.exe",
    },
    {
      titleImage: MACOS,
      title: "macOS",
      buttonImage: "",
      buttonText: "Download",
      imageAlt: "macOS",
      fileLink:
        "https://invochat-bucket.s3.amazonaws.com/invochat-desktop-2.0.9-mac-x64.dmg",
    },
    {
      titleImage: Linux,
      title: "Linux",
      buttonImage: "",
      buttonText: "Download 64-Bit",
      imageAlt: "linux",
      fileLink:
        "https://invochat-bucket.s3.amazonaws.com/invochat-desktop-2.0.9-linux-x86_64.AppImage",
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
                <a href={content.fileLink} target="_blank" rel="noreferrer">
                  <img src={content.buttonImage} alt="download" />
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
