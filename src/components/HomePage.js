import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Card, CardContent, CardActionArea, Grid, CardMedia } from '@mui/material';

const events = [
  { id: 1, title: "Music Concert", description: "Join the biggest music festival in town!", bgColor: "#f0f0f0", imgSrc: "/Assets/festivale.webp" },
  { id: 2, title: "Food Festival", description: "Experience a variety of delicious cuisines from around the world.", bgColor: "#e3f2fd", imgSrc: "/Assets/FoodFestival.webp" },
  { id: 3, title: "Art Exhibition", description: "Explore beautiful art by local artists.", bgColor: "#fce4ec", imgSrc: "/Assets/Art.webp" },
  { id: 4, title: "Tech Conference", description: "Stay updated on the latest tech trends and innovations.", bgColor: "#f3e5f5", imgSrc: "/Assets/Tech.webp" },
  { id: 5, title: "Community Meetup", description: "Connect with your community and build relationships.", bgColor: "#e8f5e9", imgSrc: "/Assets/community.webp" },
  { id: 6, title: "Yoga Retreat", description: "Relax and rejuvenate at this weekend yoga retreat.", bgColor: "#fff3e0", imgSrc: "/Assets/Yoga.webp" },
  { id: 7, title: "Book Fair", description: "Discover new books and meet your favorite authors.", bgColor: "#e0f7fa", imgSrc: "/Assets/Book.webp" },
  { id: 8, title: "Marathon", description: "Challenge yourself at this exciting marathon event.", bgColor: "#f1f8e9", imgSrc: "/Assets/Marathon.webp" },
  { id: 9, title: "Photography Workshop", description: "Learn the art of capturing beautiful moments.", bgColor: "#ede7f6", imgSrc: "/Assets/Photography.webp" },
  { id: 10, title: "Film Festival", description: "Enjoy screenings of the latest and greatest films.", bgColor: "#ffebee", imgSrc: "/Assets/Film.webp" },
  { id: 11, title: "Music Jam Session", description: "Join fellow musicians for an open jam session.", bgColor: "#f3e5f5", imgSrc: "/Assets/Jam.webp" },
  { id: 12, title: "Coding Bootcamp", description: "Boost your coding skills with hands-on sessions.", bgColor: "#e1f5fe", imgSrc: "/Assets/Coding.webp" },
  { id: 13, title: "Dance Workshop", description: "Learn new dance styles and techniques.", bgColor: "#ffeb3b", imgSrc: "/Assets/Dance.webp" },
  { id: 14, title: "Cooking Class", description: "Master the art of cooking delicious dishes.", bgColor: "#ffe0b2", imgSrc: "/Assets/cooking.webp" },
  { id: 15, title: "Fitness Challenge", description: "Push your limits with this intense fitness challenge.", bgColor: "#dcedc8", imgSrc: "/Assets/Fitness.webp" }
];

const HomePage = () => (
  <Container maxWidth="md" sx={{ marginTop: 4 }}>
    <Typography variant="h3" align="center" gutterBottom>
      Discover Events Near You
    </Typography>

    <Grid container spacing={3}>
      {events.map((event) => (
        <Grid item xs={12} sm={6} md={4} key={event.id}>
          <Card
            variant="outlined"
            sx={{
              height: '100%', // Ensure all cards have the same height
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: event.bgColor,
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.25)', // Solid box shadow with higher opacity
              transition: 'transform 0.3s', // Smooth transition effect
              '&:hover': {
                transform: 'translateY(-5px)', // Slightly lift the card on hover
              },
            }}
          >
            <CardActionArea component={Link} to={`/event/${event.id}`} sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardMedia
                component="img"
                height="140"
                image={event.imgSrc}
                alt={event.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2">
                  {event.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
                  {event.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default HomePage;
