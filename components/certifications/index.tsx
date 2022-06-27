import { Box, Badge, Image, Heading, Stack } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export function Certifications() {
  const certs = [
    {
      imageUrl: "https://bit.ly/3b1ywsc",
      imageAlt: "Nursing",
      title: "Registered Nurse",
      duration: 1,
      id: 1,
    },
    {
      imageUrl: "https://bit.ly/3tBIOpb",
      imageAlt: "Radiology",
      title: "Radiologist",
      duration: 3,
      id: 2,
    },
    {
      imageUrl: "https://bit.ly/3Qngfpm",
      imageAlt: "Physiotherapist",
      title: "Physiotherapist",
      duration: 2,
      id: 3,
    },
  ];

  return (
    <Box alignItems={"center"} paddingY={10}>
      <Heading
        fontWeight={600}
        fontSize={{ base: "lg", sm: "4xl", md: "6xl" }}
        lineHeight={"110%"}
        textAlign={"center"}
        paddingY={10}
      >
        Select a Certification below
      </Heading>
      {certs.map((cert) => (
        <Box
          key={cert.id}
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          marginY={10}
        >
          <Image src={cert.imageUrl} alt={cert.imageAlt} />
          <Box p="6">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
            >
              {cert.title}
            </Box>
            <Box>Verified in {cert.duration} day(s)</Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
