import React from "react"
import { Box, Typography } from "@mui/material"
import '../home/Revenue.scss';

export default function RevenueBoxes() {
  return (
    <Box className="Boxes-wrapper">
      <Box className="box-row">
        {/* Box 1 */}
        <Box className="box-content">
          <Typography variant="h3">
            2x
          </Typography>
          <Typography variant="h6">
            More quality
            <br />
            leads
          </Typography>
        </Box>
        {/* Box 2 */}
        <Box className="box-content">
          <Typography variant="h3">
            35-40%
          </Typography>
          <Typography variant="h6">
            Higher response
            <br />
            rates
          </Typography>
        </Box>
      </Box>

      <Box className="box-row">
        {/* Box 3 */}
        <Box className="box-content">
          <Typography variant="h3">
            30% 
          </Typography>
          <Typography variant="h6">
            Customer service
            <br />
            cost reduction
          </Typography>
        </Box>
        {/* Box 4 */}
        <Box className="box-content">
          <Typography variant="h3">
            87.58%
          </Typography>
          <Typography variant="h6">
            Improved customer
            <br />
            satisfaction
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
