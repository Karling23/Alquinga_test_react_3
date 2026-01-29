import { Paper, TextField, Typography } from "@mui/material";

export default function SumPage() {
  
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
        Registrar Nueva Categoría
      </Typography>

      <TextField
        label="Nombre de la categoría"
        type="string"
        sx={{ mb: 2 }}
      />
      <Typography>
      </Typography>
      <TextField
        label="Descripción"
        type="string"
        sx={{ mb: 2 }}
      />
      <Typography>
      </Typography>
      <button
        style={{
          backgroundColor: 'black',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '8px 16px',
          cursor: 'pointer',
        }}
        onClick={() => alert('Categoría registrada!')}
      >
        Registrar
      </button>
    </Paper>
  );
}