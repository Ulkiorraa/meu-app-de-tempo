import React, { useState } from "react";
import PropTypes from "prop-types";
import { TextField, Button } from '@mui/material';

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(city);
  };

  return (
    <div className="search-bar">
      <TextField
        label="Cidade"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ marginRight: '10px', borderRadius: '20px' }}
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSubmit}
        style={{ borderRadius: '20px' }}
      >
        Buscar
      </Button>
    </div>
  );
}
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
