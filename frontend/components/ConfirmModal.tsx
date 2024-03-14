import { Button, Modal, Text } from 'native-base';
import { ColorType } from 'native-base/lib/typescript/components/types/utils';

type ConfirmModalProps = {
  isModalVisible: boolean;
  toggleModal: () => void;
  headerText: string;
  mainText: string;
  confirmText: string;
  onConfirm: () => void;
  confirmButtonColor?: ColorType;
};
export const ConfirmModal = ({
  isModalVisible,
  toggleModal,
  headerText,
  mainText,
  confirmText,
  confimButtonColor,
  onConfirm,
}) => {
  return (
    <Modal isOpen={isModalVisible} onClose={toggleModal} size={'md'}>
      <Modal.Content maxH='212'>
        <Modal.CloseButton />
        <Modal.Header>{headerText}</Modal.Header>
        <Modal.Body>
          <Text>{mainText}</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button
              variant='ghost'
              colorScheme='blueGray'
              onPress={() => {
                toggleModal();
              }}
            >
              Zrušit
            </Button>
            <Button
              color={confimButtonColor}
              onPress={() => {
                onConfirm();
                toggleModal();
              }}
            >
              {confirmText}
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
