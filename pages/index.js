import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return ( 
   <Container>
     <Box borderRadius="lg" bg="#b5838d" p={3} mb={6} align="center">
       Hello Humans! I&apos;m Tere Díaz an IT Project Manager based in México.
     </Box>

     <Box display={ {md:'flex' }}>
       <Box flexGrow={1}>
         <Heading as="h2" variant="page-title">
	  Tere Díaz - hckmar
	 </Heading>
	 <p>Digital Transformation Girl ( Developer / Manager / Entrepenuer) </p>
       </Box>
     </Box>
   </Container> 
  )
}

export default Page
