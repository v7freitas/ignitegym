import {
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Icon,
} from "@gluestack-ui/themed";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ChevronRight } from "lucide-react-native";

type Props = TouchableOpacityProps & {};

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="$gray500"
        alignItems="center"
        p="$2"
        pr={"$4"}
        rounded="$md"
        mb={"$3"}
      >
        <Image
          source={{
            uri: "https://m.media-amazon.com/images/I/316fx+ZlgXL._UF350,350_QL80_.jpg",
          }}
          alt="Exercise Image"
          w={"$16"}
          h={"$16"}
          rounded={"$md"}
          mr={"$4"}
          resizeMode="cover"
        />
        <VStack flex={1}>
          <Heading fontSize={"$lg"} color="$white" fontFamily="$heading">
            Puxada Frente
          </Heading>
          <Text
            fontSize={"$sm"}
            color="$gray200"
            mt={"$1"}
            fontFamily="$body"
            numberOfLines={2}
          >
            3 séries de 10 repetições
          </Text>
        </VStack>
        <Icon as={ChevronRight} color="$gray300" />
      </HStack>
    </TouchableOpacity>
  );
}
