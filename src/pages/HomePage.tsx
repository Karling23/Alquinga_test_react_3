import { Paper, Typography } from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';

const cards = [
  {
    id: 1,
    title: 'Listado de Productos',
    description: 'Ahora se llena dinámicamente con personajes de Star Wars (con foto).',
  },
  {
    id: 2,
    title: 'Crear Categorías',
    description: 'Agrega nuevas categorías matemáticas o temáticas.',
  },
  {
    id: 3,
    title: 'Cálculos Básicos',
    description: 'Realiza áreas y cálculo de IVA.',
  },
];

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
        gap: 25,
      }}
    >
      {cards.map((card, index) => (
        <Card key={card.id}>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
            sx={{
              height: '100%',
              '&[data-active]': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent sx={{ height: '100%' }}>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

function ImageCarousel() {
  const images = [
    'https://bunny-wp-pullzone-frxkgfz43w.b-cdn.net/wp-content/uploads/2015/12/starwars.jpg',
    'https://lumiere-a.akamaihd.net/v1/images/star-wars-galactic-racer-key-art-1-1_da5ab774.jpeg?region=0%2C60%2C1080%2C540',
    'https://ute.edu.ec/wp-content/uploads/2023/07/fachada-occi002-scaled.jpg',
  ];
  const [index, setIndex] = React.useState(0);
  const handlePrev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);
  const handleNext = () => setIndex((prev) => (prev + 1) % images.length);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', my: 1 }}>
      <Box sx={{ position: 'relative', width: 800, height: 500, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src={images[index]}
          alt={`Imagen ${index + 1}`}
          style={{
            width: 800,
            height: 300,
            objectFit: 'cover',
            borderRadius: 16,
            boxShadow: '0 2px 16px rgba(0,0,0,0.15)',
            transition: 'all 0.5s',
            display: 'block',
          }}
        />
        <button
          onClick={handlePrev}
          style={{
            position: 'absolute',
            left: 8,
            top: '50%',
            transform: 'translateY(-50%)',
            background: '#fff',
            color: '#333',
            border: '1px solid #ccc',
            borderRadius: '50%',
            width: 28,
            height: 28,
            fontSize: 18,
            cursor: 'pointer',
            zIndex: 2,
            opacity: 0.8,
          }}
          aria-label="Anterior"
        >
          ‹
        </button>
        <button
          onClick={handleNext}
          style={{
            position: 'absolute',
            right: 8,
            top: '50%',
            transform: 'translateY(-50%)',
            background: '#fff',
            color: '#333',
            border: '1px solid #ccc',
            borderRadius: '50%',
            width: 28,
            height: 28,
            fontSize: 18,
            cursor: 'pointer',
            zIndex: 2,
            opacity: 0.8,
          }}
          aria-label="Siguiente"
        >
          ›
        </button>
      </Box>
    </Box>
  );
}

export default function HomePage() {
  return (
    <>
      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <Typography variant="h4" fontWeight={900} gutterBottom>
          Bienvenido a la Gestión de Categorías
        </Typography>

        <Typography color="text.secondary">
          Sistema para listar, crear categorías y realizar cálculos geométricos y de IVA.
        </Typography>

        <Typography sx={{ mt: 2 }}>
          Usa el menú superior (oscuro) para navegar entre páginas.
        </Typography>
      </Paper>
      <ImageCarousel />
      <Box sx={{ mt: 4 }}>
        <SelectActionCard />
      </Box>
      <Paper sx={{ p: 2, borderRadius: 3, mt: 4, backgroundColor: 'lightgreen', color: 'black' }}>
        <Typography>
          Sistema listo para gestionar categorías y cálculos básicos.
        </Typography>
      </Paper>
      <Paper sx={{ p: 2, borderRadius: 3, mt: 4, backgroundColor: 'lightblue', color: 'black' }}>
        <Typography>
          Recuerda ingresar al menos una categoría antes de usar las demás funciones.
        </Typography>
      </Paper>
    </>
  );
}
