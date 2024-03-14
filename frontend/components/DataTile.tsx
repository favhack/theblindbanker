import { Box, Pressable } from 'native-base';
import { ResponsiveValue } from 'native-base/lib/typescript/components/types/index';
import React from 'react';

type TileProps = {
  onClick?: () => void;
  children: any;
  alignItems?: ResponsiveValue<(string & {}) | (number & {})>;
  maxHeight?: number
};

export const DataTile: React.FC<TileProps> = ({
  onClick,
  children,
  alignItems = 'center',
  maxHeight
}) => {
  return (
    <Box rounded='16' alignItems='center'>
      <Pressable
        minW={'95%'}
        maxW={'95%'}
        top={'2%'}
        padding={'3%'}
        onPress={onClick}
      >
        {({ isHovered, isFocused, isPressed }) => {
          return (
            <Box
              alignItems={alignItems}
              bg={'#407254'}
              maxHeight={!maxHeight ? '80' : maxHeight}
              p='5'
              rounded='16'
              shadow={3}
              borderWidth='1'
              borderColor='coolGray.300'
            >
              {children}
            </Box>
          );
        }}
      </Pressable>
    </Box>
  );
};
