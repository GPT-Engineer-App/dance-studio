import { Box, Container, Heading, Text, VStack, Image, SimpleGrid, Link } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaInstagram, FaFacebookSquare } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={8} align="stretch">
        <Box as="header">
          <Heading as="h1" size="2xl" textAlign="center">
            Dance Studio Name
          </Heading>
          <Text fontSize="xl" textAlign="center">
            Explore the art of dance with us!
          </Text>
        </Box>

        <Box as="section">
          <Heading as="h2" size="lg">
            About Us
          </Heading>
          <Text>Welcome to our Dance Studio! Whether you're a beginner or an experienced dancer looking to improve your technique, we have something to offer you. Our experienced instructors are passionate about helping each dancer achieve their highest potential, while also having as much fun as possible. Join us to discover your passion for dance!</Text>
        </Box>

        <Box as="section">
          <Heading as="h2" size="lg">
            Gallery
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
            <Image src="https://images.unsplash.com/photo-1470468969717-61d5d54fd036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkYW5jZSUyMHN0dWRpbyUyMGFjdGlvbiUyMHNob3R8ZW58MHx8fHwxNzE1MzI3NzQ0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Dance Action" />
            <Image src="https://images.unsplash.com/photo-1615213253844-9a9d661d40d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYWxsZXQlMjBjbGFzc3xlbnwwfHx8fDE3MTUzMjc3NDR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Ballet Class" />
            <Image src="https://images.unsplash.com/photo-1504609813442-a8924e83f76e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoaXAlMjBob3AlMjBkYW5jZSUyMGNsYXNzfGVufDB8fHx8MTcxNTMyNzc0NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Hip Hop Dance" />
          </SimpleGrid>
        </Box>

        <Box as="section">
          <Heading as="h2" size="lg">
            Contact Us
          </Heading>
          <VStack spacing={3}>
            <Link href="tel:+1234567890" isExternal display="flex" alignItems="center">
              <FaPhone /> +1 234 567 890
            </Link>
            <Link href="mailto:info@dancestudio.com" isExternal display="flex" alignItems="center">
              <FaEnvelope /> info@dancestudio.com
            </Link>
            <Link href="https://instagram.com/dancestudio" isExternal display="flex" alignItems="center">
              <FaInstagram /> Follow us on Instagram
            </Link>
            <Link href="https://facebook.com/dancestudio" isExternal display="flex" alignItems="center">
              <FaFacebookSquare /> Like us on Facebook
            </Link>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
