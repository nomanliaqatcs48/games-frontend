import React from "react";
import { Box, Typography } from "@mui/material";
import "../home/Demo.scss";

export default function DemoBox() {
  return (
    <Box className="demo-features">
        {/* Box 1 */}
      <Box>
        <div className="parallelogram">
          <Typography variant="h1">
            1
          </Typography>
        </div>
        <div className="parallelogram2">
          <Typography variant="h4">
            Request live demo
          </Typography>
        </div>
      </Box>
            {/* Box 2 */}
      <Box>
        <div className="parallelogram white">
          <Typography variant="h1">
            2
          </Typography>
        </div>
        <div className="parallelogram2 white">
          <Typography variant="h4">
          Share requirements
          </Typography>
        </div>
      </Box>
            {/* Box 3 */}
      <Box>
        <div className="parallelogram white">
          <Typography variant="h1">
            3
          </Typography>
        </div>
        <div className="parallelogram2 white">
          <Typography variant="h4">
          Get a quote
          </Typography>
        </div>
      </Box>
            {/* Box 4 */}
      <Box>
        <div className="parallelogram">
          <Typography variant="h1">
            4
          </Typography>
        </div>
        <div className="parallelogram2">
          <Typography variant="h4">
          Setup your chatbot
          </Typography>
        </div>
      </Box>
    </Box>
  )
}
