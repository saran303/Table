import React from 'react';
import { Select, MenuItem, FormControl, Box, Typography } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import RssFeedOutlinedIcon from '@mui/icons-material/RssFeedOutlined';

function Filters({ setLocationFilter, setStatusFilter, uniqueLocations }) {
  const handleLocationChange = (e) => {
    setLocationFilter(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
  };

  return (
    <Box display="flex" gap={2} marginBottom={2}>
      {/* Location Filter */}
      <FormControl
        variant="outlined"  // Changed to 'outlined'
        sx={{
          border: '1px solid #E0E0E0', // Very light grey border
          borderRadius: '4px', // Rounded corners (optional)
          padding: '4px 12px', // Padding inside the select box
          minWidth: '150px', // Minimum width to control size
          height: '40px',
        }}
      >
        <Select
          value=""
          onChange={handleLocationChange}
          displayEmpty
          renderValue={() => (
            <Box display="flex" alignItems="center">
              <LocationOnOutlinedIcon fontSize="small" style={{ marginRight: '8px' }} />
              <Typography>Location</Typography>
            </Box>
          )}
          // Ensure no underline shows up
          sx={{
            '.MuiOutlinedInput-notchedOutline': { border: 'none' },  // Remove internal border
          }}
        >
          <MenuItem value="">
            <em>All Locations</em>
          </MenuItem>
          {uniqueLocations.map((location, index) => (
            <MenuItem key={index} value={location}>
              {location}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Status Filter */}
      <FormControl
        variant="outlined"  // Changed to 'outlined'
        sx={{
          border: '1px solid #E0E0E0', // Very light grey border
          borderRadius: '4px', // Rounded corners (optional)
          padding: '4px 12px', // Padding inside the select box
          minWidth: '150px', // Minimum width to control size
          height: '40px',
        }}
      >
        <Select
          value=""
          onChange={handleStatusChange}
          displayEmpty
          renderValue={() => (
            <Box display="flex" alignItems="center">
              <RssFeedOutlinedIcon fontSize="small" style={{ marginRight: '8px' }} />
              <Typography>Status</Typography>
            </Box>
          )}
          // Ensure no underline shows up
          sx={{
            '.MuiOutlinedInput-notchedOutline': { border: 'none' },  // Remove internal border
          }}
        >
          <MenuItem value="">
            <em>All Statuses</em>
          </MenuItem>
          <MenuItem value="Active">Active</MenuItem>
          <MenuItem value="Inactive">Inactive</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default Filters;
