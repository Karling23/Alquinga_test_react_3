import { useState } from "react";
import { Paper, TextField, Typography } from "@mui/material";
import Button from '@mui/material/Button';

export default function MultiplyPage() {
  const [aTri, setATri] = useState(0);
  const [bTri, setBTri] = useState(0);
  const [aRec, setARec] = useState(0);
  const [bRec, setBRec] = useState(0);
  const [ivaBase, setIVABase] = useState(0);
  const [triResult, setTriResult] = useState<number|null>(null);
  const [recResult, setRecResult] = useState<number|null>(null);
  const [ivaResult, setIVAResult] = useState<number|null>(null);

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
        Área de Triángulo
      </Typography>
      <TextField
        label="Base"
        type="number"
        value={aTri}
        onChange={(e) => setATri(Number(e.target.value))}
        sx={{ mr: 2, mb: 2 }}
      />
      <TextField
        label="Altura"
        type="number"
        value={bTri}
        onChange={(e) => setBTri(Number(e.target.value))}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ display: 'block', mt: 2, mb: 2 }}
        onClick={() => setTriResult((aTri * bTri) / 2)}
      >
        Calcular Área
      </Button>
      {triResult !== null && (
        <Typography sx={{ mt: 1 }}>
          Resultado: <strong>{triResult}</strong>
        </Typography>
      )}

      <Typography variant="h5" fontWeight={900} gutterBottom sx={{ mt: 4 }}>
        Área de Rectángulo
      </Typography>
      <TextField
        label="Base"
        type="number"
        value={aRec}
        onChange={(e) => setARec(Number(e.target.value))}
        sx={{ mr: 2, mb: 2 }}
      />
      <TextField
        label="Altura"
        type="number"
        value={bRec}
        onChange={(e) => setBRec(Number(e.target.value))}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ display: 'block', mt: 2, mb: 2 }}
        onClick={() => setRecResult(aRec * bRec)}
      >
        Calcular Área
      </Button>
      {recResult !== null && (
        <Typography sx={{ mt: 1 }}>
          Resultado: <strong>{recResult}</strong>
        </Typography>
      )}

      <Typography variant="h5" fontWeight={900} gutterBottom sx={{ mt: 4 }}>
        Cálculo de IVA (12%)
      </Typography>
      <TextField
        label="Valor"
        type="number"
        value={ivaBase}
        onChange={(e) => setIVABase(Number(e.target.value))}
        sx={{ mr: 2, mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ display: 'block', mt: 2, mb: 2 }}
        onClick={() => setIVAResult(ivaBase * 0.12)}
      >
        Calcular IVA
      </Button>
      {ivaResult !== null && (
        <Typography sx={{ mt: 1 }}>
          Resultado: <strong>{ivaResult}</strong>
        </Typography>
      )}
    </Paper>
  );
}

