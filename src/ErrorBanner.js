import React from 'react';
import Alert from '@mui/material/Alert';

function ErrorBanner() {
  return (
    <Alert severity="error" className="error-alert">
      Não foi possível encontrar a previsão do tempo para a cidade informada.
    </Alert>
  );
}

export default ErrorBanner;
