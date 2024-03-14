import {
  Badge,
  Box,
  Flex,
  HStack,
  Icon,
  Pressable,
  Spacer,
  Text,
  VStack,
} from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { ColorType, ResponsiveValue } from 'native-base/lib/typescript/components/types';

type TileProps = {
  onClick?: () => void;
  name: string;
  backgroundColor?: ColorType;
  subtitle?: string;
  justifyContent?: ResponsiveValue<(string & {}) | (number & {})>
};

export const Tile: React.FC<TileProps> = ({ onClick, name, backgroundColor, subtitle, justifyContent = 'center' }) => {
  return (
    <Box alignItems='center'>
      <Pressable minW={'95%'} top={'2%'} padding={'3%'} onPress={onClick}>
        {({ isHovered, isFocused, isPressed }) => {
          return (
            <Box
              alignItems='center'
              bg={isPressed ? '#585F94' : isHovered ? '#585F94' : (!backgroundColor ? '#3C4165' : backgroundColor)}
              style={{
                transform: [
                  {
                    scale: isPressed ? 0.96 : 1,
                  },
                ],
              }}
              maxHeight={'80'}
              p='5'
              rounded='16'
              shadow={3}
              borderWidth='1'
              borderColor='coolGray.300'
              display={'flex'}
              flexDirection={'row'}
              justifyContent={justifyContent}
            >
              {
                <VStack>
                  <Text color='white' fontWeight='medium' fontSize='xl'>
                    {name}
                  </Text>
                  {subtitle && <Text color='white' fontWeight='medium' fontSize='md'>
                    {subtitle}
                  </Text>}

                </VStack>
              }

            </Box>
          );
        }}
      </Pressable>
    </Box>
  );
};
