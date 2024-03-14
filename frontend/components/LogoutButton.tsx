import { ArrowForwardIcon, Button, HStack, Text } from 'native-base';

export const LogoutButton = ({ onPress }) => {
  return (
    <Button
      style={{ backgroundColor: 'transparent', borderWidth: 0 }}
      onPress={onPress}
    >
      <HStack>
        <Text
          style={{
            marginRight: 8,
          }}
          fontSize={'md'}
          color='white'
        >
          Odhlásit
        </Text>
        <ArrowForwardIcon
          style={{
            textAlign: 'right',
            marginTop: 5,
          }}
          fontSize={'xl'}
          color='white'
        />
      </HStack>
    </Button>
  );
};
