import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardContent, Box, Grid } from '@mui/material';

// Complete event details for all 15 events with background image paths included
const eventDetails = {
  1: {
    title: "Music Concert",
    description: "Join us for an unforgettable night filled with live music, great vibes, and an amazing atmosphere. Featuring popular bands and solo artists from around the world. Enjoy a variety of genres, from rock to pop, and dance the night away!",
    highlights: ["Live performances by top bands", "Food stalls and merchandise", "VIP seating and backstage access"],
    schedule: "Starts at 7:00 PM on August 15, 2024",
    location: "Downtown Arena, Main City",
    imgSrc: "/Assets/festivale.webp",
  },
  2: {
    title: "Food Festival",
    description: "Indulge in a feast of flavors at our annual Food Festival! Discover a variety of cuisines and dishes from across the globe, prepared by renowned chefs and local vendors. A perfect outing for families and food enthusiasts.",
    highlights: ["Over 50 food stalls", "Live cooking demonstrations", "Family-friendly activities"],
    schedule: "10:00 AM - 10:00 PM, September 5-7, 2024",
    location: "Central Park, Main City",
    imgSrc: "/Assets/FoodFestival.webp",
  },
  3: {
    title: "Art Exhibition",
    description: "Explore beautiful works of art by local and international artists. This exhibition features contemporary paintings, sculptures, and installations that will inspire and provoke thought.",
    highlights: ["Art pieces from 30+ artists", "Guided tours available", "Interactive art installations"],
    schedule: "Opens at 11:00 AM, October 1-10, 2024",
    location: "City Art Gallery, Main City",
    imgSrc: "/Assets/Art.webp",
  },
  4: {
    title: "Tech Conference",
    description: "Stay updated on the latest trends in technology and innovation at our annual Tech Conference. Hear from industry leaders and tech pioneers as they discuss the future of tech.",
    highlights: ["Keynote speeches by tech leaders", "Exhibition of cutting-edge tech products", "Networking opportunities"],
    schedule: "8:00 AM - 6:00 PM, November 12-13, 2024",
    location: "Tech Convention Center, Main City",
    imgSrc: "/Assets/Tech.webp",
  },
  5: {
    title: "Community Meetup",
    description: "Connect with like-minded individuals in your community at this casual meetup event. Whether you are looking to network or just have a chat, this meetup is the perfect place to make new friends.",
    highlights: ["Group activities and games", "Ice-breaker sessions", "Networking opportunities"],
    schedule: "3:00 PM - 7:00 PM, November 25, 2024",
    location: "Greenwood Park, Main City",
    imgSrc: "/Assets/community.webp",
  },
  6: {
    title: "Yoga Retreat",
    description: "Relax, rejuvenate, and rediscover yourself at our weekend yoga retreat. Experience a variety of yoga styles, meditation sessions, and wellness workshops in a serene outdoor setting.",
    highlights: ["Outdoor yoga sessions", "Meditation and mindfulness workshops", "Healthy meals and refreshments"],
    schedule: "Friday to Sunday, December 8-10, 2024",
    location: "Mountain Valley Resort, Outskirts",
    imgSrc: "/Assets/Yoga.webp",
  },
  7: {
    title: "Book Fair",
    description: "Discover new books and meet your favorite authors at our annual Book Fair. With a wide selection of genres, there's something for everyone. Attend book signings, workshops, and panel discussions.",
    highlights: ["Over 100 book stalls", "Meet and greet with authors", "Storytelling sessions for children"],
    schedule: "10:00 AM - 8:00 PM, January 15-18, 2025",
    location: "Convention Hall, Main City",
    imgSrc: "/Assets/Book.webp",
  },
  8: {
    title: "Marathon",
    description: "Challenge yourself at our city-wide marathon event! Whether you're a professional runner or just starting out, join us in this exhilarating race through scenic city streets.",
    highlights: ["5K, 10K, and Full Marathon options", "Free t-shirts and medals", "Live music and refreshments at the finish line"],
    schedule: "Starts at 6:00 AM, February 20, 2025",
    location: "City Square, Main City",
    imgSrc: "/Assets/Marathon.webp",
  },
  9: {
    title: "Photography Workshop",
    description: "Learn the art of capturing beautiful moments with our expert-led photography workshop. Whether you're a beginner or an experienced photographer, gain valuable insights and skills.",
    highlights: ["Hands-on sessions with professional photographers", "Guidance on lighting and composition", "Outdoor practice and photo walks"],
    schedule: "10:00 AM - 4:00 PM, March 5, 2025",
    location: "Photography Studio, Main City",
    imgSrc: "/Assets/Photography.webp",
  },
  10: {
    title: "Film Festival",
    description: "Enjoy screenings of the latest and greatest films at our annual Film Festival. From indie films to blockbuster hits, discover new stories and immerse yourself in the world of cinema.",
    highlights: ["Screenings of 50+ films", "Q&A sessions with directors and actors", "Awards ceremony and after-party"],
    schedule: "April 1-5, 2025",
    location: "Grand Cinema Hall, Main City",
    imgSrc: "/Assets/Film.webp",
  },
  11: {
    title: "Music Jam Session",
    description: "Join fellow musicians for an open jam session in a cozy indoor setting. Bring your instruments and your passion for music, and create spontaneous melodies with like-minded artists.",
    highlights: ["Open mic opportunities", "Collaborative jam sessions", "Instruments and sound equipment available"],
    schedule: "6:00 PM - 10:00 PM, April 25, 2025",
    location: "Underground Music Lounge, Main City",
    imgSrc: "/Assets/Jam.webp",
  },
  12: {
    title: "Coding Bootcamp",
    description: "Boost your coding skills with our hands-on coding bootcamp. Learn from experienced mentors and work on real-world projects. Ideal for beginners and advanced coders alike.",
    highlights: ["Project-based learning", "Workshops on web and mobile development", "Mentorship from industry professionals"],
    schedule: "9:00 AM - 5:00 PM, May 10-15, 2025",
    location: "Tech Innovation Hub, Main City",
    imgSrc: "/Assets/Coding.webp",
  },
  13: {
    title: "Dance Workshop",
    description: "Learn new dance styles and techniques at our immersive dance workshop. Led by professional choreographers, this workshop is perfect for dancers of all levels.",
    highlights: ["Classes in hip-hop, jazz, and contemporary dance", "Small group sessions for personalized guidance", "Final showcase performance"],
    schedule: "10:00 AM - 3:00 PM, June 20, 2025",
    location: "Dance Studio, Main City",
    imgSrc: "/Assets/Dance.webp",
  },
  14: {
    title: "Cooking Class",
    description: "Master the art of cooking delicious dishes with our interactive cooking class. Learn new recipes, cooking techniques, and presentation skills from experienced chefs.",
    highlights: ["Hands-on cooking lessons", "Tasting sessions and recipe cards", "Special guest chef appearances"],
    schedule: "2:00 PM - 5:00 PM, July 10, 2025",
    location: "Culinary School Kitchen, Main City",
    imgSrc: "/Assets/cooking.webp",
  },
  15: {
    title: "Fitness Challenge",
    description: "Push your limits with this intense fitness challenge. Participate in various physical activities designed to test your endurance and strength. Open to individuals of all fitness levels.",
    highlights: ["Obstacle courses and group activities", "Guidance from professional trainers", "Completion certificates and prizes"],
    schedule: "6:00 AM - 12:00 PM, August 15, 2025",
    location: "Fitness Park, Main City",
    imgSrc: "/Assets/Fitness.webp",
  },
};


const EventDetail = () => {
  const { id } = useParams();
  const event = eventDetails[id];

  if (!event) {
    return (
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Event Not Found
        </Typography>
        <Typography variant="body1" align="center">
          Sorry, the event you are looking for does not exist.
        </Typography>
      </Container>
    );
  }

  return (
    <Box
      sx={{
        backgroundImage: `url(${event.imgSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for readability
          backdropFilter: 'blur(10px)', // Blur effect on background image
        },
      }}
    >
      <Container
        maxWidth="md"
        sx={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Card
          sx={{
            width: '100%',
            boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          <CardContent>
            <Typography variant="h4" align="center" gutterBottom>
              {event.title}
            </Typography>

            <Typography variant="body1" paragraph>
              {event.description}
            </Typography>

            <Box sx={{ marginTop: 2 }}>
              <Typography variant="h6">Highlights:</Typography>
              <ul>
                {event.highlights.map((highlight, index) => (
                  <li key={index}>
                    <Typography variant="body2">{highlight}</Typography>
                  </li>
                ))}
              </ul>
            </Box>

            <Grid container spacing={3} sx={{ marginTop: 2 }}>
              <Grid item xs={12} sm={6}>
                <Box>
                  <Typography variant="h6">Schedule:</Typography>
                  <Typography variant="body2">{event.schedule}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box>
                  <Typography variant="h6">Location:</Typography>
                  <Typography variant="body2">{event.location}</Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default EventDetail;
