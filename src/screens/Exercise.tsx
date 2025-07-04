import {
  VStack,
  Icon,
  HStack,
  Heading,
  Text,
  Image,
  Box,
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "lucide-react-native";
import { ScrollView, TouchableOpacity } from "react-native";

import SeriesSvg from "@assets/series.svg";
import RepetitionsSvg from "@assets/repetitions.svg";
import BodySvg from "@assets/body.svg";
import { Button } from "@components/Button";

export function Exercise() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <VStack flex={1}>
      <VStack px="$8" bg="$gray600" pt={"$12"}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={ArrowLeft} color="$green500" />
        </TouchableOpacity>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          mt="$4"
          pb={"$8"}
        >
          <Heading
            color="$gray100"
            fontFamily="$heading"
            fontSize={"$lg"}
            flexShrink={1}
          >
            Puxada frontal
          </Heading>
          <HStack alignItems="center">
            <BodySvg />
            <Text color="$gray200" ml={"$1"} textTransform="capitalize">
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        <VStack padding={"$8"}>
          <Image
            mb="$3"
            resizeMode="cover"
            rounded={"$lg"}
            w={"$full"}
            h={"$80"}
            source={{
              uri: "https://m.media-amazon.com/images/I/316fx+ZlgXL._UF350,350_QL80_.jpg",
            }}
            alt="Exercise Image"
          />
          <Box bg="$gray600" rounded={"$md"} pb="$4" px="$4">
            <HStack
              alignItems="center"
              justifyContent="space-around"
              mb="$6"
              mt="$5"
            >
              <HStack>
                <SeriesSvg />
                <Text color="$gray200" ml="$2">
                  3 séries
                </Text>
              </HStack>
              <HStack>
                <RepetitionsSvg />
                <Text color="$gray200" ml="$2">
                  10 repetições
                </Text>
              </HStack>
            </HStack>
            <Button title="Marcar como realizado" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
