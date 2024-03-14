import { ScrollView, VStack, Text, HStack } from 'native-base';
import { Tile } from '../components/Tile';
import { getStandingOrderListRequest } from '../services/api/standingOrders';
import { useQuery } from 'react-query';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../components/providers/UserProvider';
import { StandingOrder } from '../types/standingOrders';
import { DataTile } from '../components/DataTile';
import { getBalanceString } from '../services/utils/string';
import { LogoutButton } from '../components/LogoutButton';

export const PermanentTransactionList = ({ navigation }) => {
  const userContext = useContext(UserContext);
  const userAccount = userContext.getCurrentUser();
  const bankApplication = userContext.getCurrentBank();

  const [standingOrderList, setStandingOrderList] = useState<
    StandingOrder[] | undefined
  >(undefined);

  console.log(standingOrderList);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <LogoutButton onPress={() => navigation.navigate('AccountList')} />
      ),
    });
  }, [navigation]);

  const useGetStandingOrderList = useQuery(
    ['getStandingOrderList', userAccount],
    () => {
      if (userAccount) {
        return getStandingOrderListRequest(userAccount, bankApplication);
      }
    },
    {
      onSuccess: (response: any) => {
        if (response.data.standingOrders) {
          setStandingOrderList(response.data.standingOrders);
        }
      },
      retry: false,
      onError: (err: any) => {
        console.log('tesdsad', JSON.stringify(err));
      },
    }
  );

  return (
    <ScrollView>
      <Text fontSize={'3xl'} marginLeft='5%' marginTop={2} fontWeight={'bold'}>
        Trvalé platby
      </Text>
      <Tile
        name='Přidat trvalou platbu'
        onClick={() => navigation.navigate('AddPermanentTransaction')}
      />
      <Text paddingX={'6%'} fontSize={'2xl'} fontWeight={'semibold'}>
        Seznam trvalých plateb
      </Text>
      {standingOrderList?.map((standingOrder) => {
        return (
          <DataTile
            onClick={() =>
              navigation.navigate('AddPermanentTransaction', {
                initialValues: standingOrder,
              })
            }
          >
            <HStack>
              <Text
                style={{
                  marginRight: 'auto',
                  flex: 1,
                }}
                fontSize={'lg'}
                color='white'
              >
                {standingOrder?.standingOrder?.alias}
              </Text>

              <Text
                style={{
                  textAlign: 'right',
                  marginLeft: 'auto',
                  flex: 1,
                }}
                fontSize={'lg'}
                color='white'
              >
                -{' '}
                {getBalanceString(standingOrder.amount.instructedAmount.value) +
                  ' ' +
                  standingOrder.amount.instructedAmount.currency}
              </Text>
            </HStack>
          </DataTile>
        );
      })}
    </ScrollView>
  );
};
