import { useState } from "react";
import { GluestackUIProvider, Heading, Text, ModalCloseButton, Box, Center, Button, ButtonText, Modal, ModalBackdrop, ModalContent, ModalHeader, Icon, CloseIcon, ModalBody, ModalFooter } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const modalWithBug = () => {
    return (
      <Center h={300}>
        <Button onPress={() => setShowModal(true)} >
          <ButtonText>Show Modal</ButtonText>
        </Button>
        <Modal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
          }}
        >
          <ModalBackdrop />
          <ModalContent>
            <ModalHeader>
              <Heading size="lg">Engage with Modals</Heading>
              <ModalCloseButton>
                <Icon as={CloseIcon} />
              </ModalCloseButton>
            </ModalHeader>
            <ModalBody>
              <Text>
                Elevate user interactions with our versatile modals. Seamlessly
                integrate notifications, forms, and media displays. Make an
                impact effortlessly.
              </Text>
              <Text>
                Elevate user interactions with our versatile modals. Seamlessly
                integrate notifications, forms, and media displays. Make an
                impact effortlessly.
              </Text>
              <Text>
                Elevate user interactions with our versatile modals. Seamlessly
                integrate notifications, forms, and media displays. Make an
                impact effortlessly.
              </Text>
              <Text>
                Elevate user interactions with our versatile modals. Seamlessly
                integrate notifications, forms, and media displays. Make an
                impact effortlessly.
              </Text>
              <Text>
                Elevate user interactions with our versatile modals. Seamlessly
                integrate notifications, forms, and media displays. Make an
                impact effortlessly.
              </Text>
              <Text>
                Elevate user interactions with our versatile modals. Seamlessly
                integrate notifications, forms, and media displays. Make an
                impact effortlessly.
              </Text>
              <Text>
                Elevate user interactions with our versatile modals. Seamlessly
                integrate notifications, forms, and media displays. Make an
                impact effortlessly.
              </Text>
              <Text>
                Elevate user interactions with our versatile modals. Seamlessly
                integrate notifications, forms, and media displays. Make an
                impact effortlessly.
              </Text>
              <Text>
                Elevate user interactions with our versatile modals. Seamlessly
                integrate notifications, forms, and media displays. Make an
                impact effortlessly.
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button
                variant="outline"
                size="sm"
                action="secondary"
                mr="$3"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                <ButtonText>Cancel</ButtonText>
              </Button>
              <Button
                size="sm"
                action="positive"
                borderWidth="$0"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                <ButtonText>Explore</ButtonText>
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Center>
    );
  };

  return (
    <GluestackUIProvider config={config}>
      <Box width="100%" justifyContent="center" alignItems="center">
        {modalWithBug()}
      </Box>
    </GluestackUIProvider>
  );
}
