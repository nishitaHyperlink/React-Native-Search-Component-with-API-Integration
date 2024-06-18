import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const screenWidth = Dimensions.get('window').width;
const searchBarWidth = screenWidth - 40;
const searchBarHeight = 60;

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [loadingRecentSearches, setLoadingRecentSearches] = useState(false);
  const [recentSearches, setRecentSearches] = useState<any[]>([]);

  const navigation = useNavigation();
  

  useEffect(() => {
    loadRecentSearches();
  }, []);

  const loadRecentSearches = async () => {
    setLoadingRecentSearches(true);
    try {
      const response = await axios.post(
         //  API here,
        {
          client_id: '679',
          auth_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNWI4OTZlN2JiYmY5YWU1NzkwYjRjNDdiMjAxYjQ3ZmZjMzc3ODllZDZjM2FlNWRmYWQ0Y2EwNzQxN2ZhOGMzN2FjY2UyZDQxNzVhMTI3MjciLCJpYXQiOjE3MTg2MjI1NDEuNjQ3ODA1LCJuYmYiOjE3MTg2MjI1NDEuNjQ3ODA5LCJleHAiOjE3NTAxNTg1NDEuNjMyNzgxLCJzdWIiOiI2NzkiLCJzY29wZXMiOltdfQ.iSXyzSHqEJCyXhXldh94S5nt2fGdq38GN2Nh4YWv7aNB_XTrDWDrUk_aQKLC_U1phl2nDjjvuiVnjSafyIokOQvXem1IQeePgQzkbmmka0PsxeAcOqNkPJtxFXKNAmBbU2wqlIJu3Tq35vEjAlYqSjSN1vjlmEY845RzFfHtVqRUPmDPh49K-VR0m4CcuPi6k7P-QYuyyFuFTCiPMeB4UsXY4vUTvNMjcVGLO9RB9QLlXdfxYxI2MXUPzCm2531_zVDWg0TvYnphWeAYpc9CBE6xHGuSA6X0jk9Ydjr2uHIIQ_1kCsXqCTMmNPLcOiOBxgkmL2CcPgJ_5KgUt4DdP0UNNPMArzbUxBlrvhabOTjv1wRJtW3yARbJHMWWvGWlViDitC81y9c_oiUA-dpIcZWFFXBXh2fgbmLN8Sz_kUAMt4pLkqO2sExoYBt4YNtTHDy33tswdFzsZVr4-g5p_Y6G2xqobyNDOrTJthTcVCn_PL7A3lHbzyDJzS1a-w-ga-jct9yhYztjki2t6kRNlu7T3A3rIG91_ObFcF6qjlL7Dx2Wg9Z7eQY-puzzwOXxD7w1jj3OphHuMyWupx_7Rio21BPQQlb63xzXE26JY_iSJ1JfCiBb5YV4LCr00L0rso_rBoGHQ41OkJdteVb1WdHdhPq2uZJBWxSyDvG9YbU',
          device_id: '123456',
        }
      );
      setRecentSearches(response.data.data || []);
    } catch (error) {
      console.error('Error loading recent searches:', error);
    } finally {
      setLoadingRecentSearches(false);
    }
  };
  

  const saveRecentSearches = async (item : any) => {
    try {
      const response = await axios.post(
      //  API here,
        {
          client_id: '679',
          auth_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNWI4OTZlN2JiYmY5YWU1NzkwYjRjNDdiMjAxYjQ3ZmZjMzc3ODllZDZjM2FlNWRmYWQ0Y2EwNzQxN2ZhOGMzN2FjY2UyZDQxNzVhMTI3MjciLCJpYXQiOjE3MTg2MjI1NDEuNjQ3ODA1LCJuYmYiOjE3MTg2MjI1NDEuNjQ3ODA5LCJleHAiOjE3NTAxNTg1NDEuNjMyNzgxLCJzdWIiOiI2NzkiLCJzY29wZXMiOltdfQ.iSXyzSHqEJCyXhXldh94S5nt2fGdq38GN2Nh4YWv7aNB_XTrDWDrUk_aQKLC_U1phl2nDjjvuiVnjSafyIokOQvXem1IQeePgQzkbmmka0PsxeAcOqNkPJtxFXKNAmBbU2wqlIJu3Tq35vEjAlYqSjSN1vjlmEY845RzFfHtVqRUPmDPh49K-VR0m4CcuPi6k7P-QYuyyFuFTCiPMeB4UsXY4vUTvNMjcVGLO9RB9QLlXdfxYxI2MXUPzCm2531_zVDWg0TvYnphWeAYpc9CBE6xHGuSA6X0jk9Ydjr2uHIIQ_1kCsXqCTMmNPLcOiOBxgkmL2CcPgJ_5KgUt4DdP0UNNPMArzbUxBlrvhabOTjv1wRJtW3yARbJHMWWvGWlViDitC81y9c_oiUA-dpIcZWFFXBXh2fgbmLN8Sz_kUAMt4pLkqO2sExoYBt4YNtTHDy33tswdFzsZVr4-g5p_Y6G2xqobyNDOrTJthTcVCn_PL7A3lHbzyDJzS1a-w-ga-jct9yhYztjki2t6kRNlu7T3A3rIG91_ObFcF6qjlL7Dx2Wg9Z7eQY-puzzwOXxD7w1jj3OphHuMyWupx_7Rio21BPQQlb63xzXE26JY_iSJ1JfCiBb5YV4LCr00L0rso_rBoGHQ41OkJdteVb1WdHdhPq2uZJBWxSyDvG9YbU',
          device_id: '123456',
          model: item.model,
          model_id: item.model_id,
          search_value: searchText,
        }
      );
  
      if (response.data.status_code === 200) {
        setRecentSearches((prevSearches) => {
          const updatedSearches = [...prevSearches, item];
          return [...new Set(updatedSearches.map(JSON.stringify))].map(JSON.parse); 
        });
      }
    } catch (error) {
      console.error('Error saving recent searches:', error);
    }
  };
  

  const handleChangeText = async (text: any) => {
    setSearchText(text);
    if (text.length >= 3) {
      try {
        const response = await axios.post(
          //  API here,
          {
            client_id: '679',
            auth_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNWI4OTZlN2JiYmY5YWU1NzkwYjRjNDdiMjAxYjQ3ZmZjMzc3ODllZDZjM2FlNWRmYWQ0Y2EwNzQxN2ZhOGMzN2FjY2UyZDQxNzVhMTI3MjciLCJpYXQiOjE3MTg2MjI1NDEuNjQ3ODA1LCJuYmYiOjE3MTg2MjI1NDEuNjQ3ODA5LCJleHAiOjE3NTAxNTg1NDEuNjMyNzgxLCJzdWIiOiI2NzkiLCJzY29wZXMiOltdfQ.iSXyzSHqEJCyXhXldh94S5nt2fGdq38GN2Nh4YWv7aNB_XTrDWDrUk_aQKLC_U1phl2nDjjvuiVnjSafyIokOQvXem1IQeePgQzkbmmka0PsxeAcOqNkPJtxFXKNAmBbU2wqlIJu3Tq35vEjAlYqSjSN1vjlmEY845RzFfHtVqRUPmDPh49K-VR0m4CcuPi6k7P-QYuyyFuFTCiPMeB4UsXY4vUTvNMjcVGLO9RB9QLlXdfxYxI2MXUPzCm2531_zVDWg0TvYnphWeAYpc9CBE6xHGuSA6X0jk9Ydjr2uHIIQ_1kCsXqCTMmNPLcOiOBxgkmL2CcPgJ_5KgUt4DdP0UNNPMArzbUxBlrvhabOTjv1wRJtW3yARbJHMWWvGWlViDitC81y9c_oiUA-dpIcZWFFXBXh2fgbmLN8Sz_kUAMt4pLkqO2sExoYBt4YNtTHDy33tswdFzsZVr4-g5p_Y6G2xqobyNDOrTJthTcVCn_PL7A3lHbzyDJzS1a-w-ga-jct9yhYztjki2t6kRNlu7T3A3rIG91_ObFcF6qjlL7Dx2Wg9Z7eQY-puzzwOXxD7w1jj3OphHuMyWupx_7Rio21BPQQlb63xzXE26JY_iSJ1JfCiBb5YV4LCr00L0rso_rBoGHQ41OkJdteVb1WdHdhPq2uZJBWxSyDvG9YbU',
            device_id: '123456',
            search_value: text,
          }
        );
        setFilteredData(response.data.data || []);
      } catch (error) {
        console.error('Error fetching data:', error);
        setFilteredData([]);
      }
    } else {
      setFilteredData([]);
    }
  };

  const handleImageClick = async (item : any) => {
    console.log('Item clicked:', item);
    if (!item || typeof item !== 'object') {
      console.error('Error: item is undefined or not an object');
      return;
    }
  
    try {
      // Save the recent search
      await saveRecentSearches(item);
  

      setRecentSearches((prevSearches) => {
        const searchesArray = Array.isArray(prevSearches) ? prevSearches : [];
        const updatedSearches = [...searchesArray, item];
        return [...new Set(updatedSearches.map(JSON.stringify))].map(JSON.parse);  
      });
  

      navigation.navigate('Dish1',
        {
        model: item.model,
        modelId: item.model_id,
      });

      navigation.navigate('Dish2',{
        model: item.model,
        modelId: item.model_id,
      }); 

      navigation.navigate('Dish3',{
        model: item.model,
        modelId: item.model_id,
      });
      
      navigation.navigate('Dish4',{
        model: item.model,
        modelId: item.model_id,
      }); 

      navigation.navigate('Dish5',{
        model: item.model,
        modelId: item.model_id,
      }); 

      navigation.navigate('Dish6',{
        model: item.model,
        modelId: item.model_id,
      }); 

      navigation.navigate('Dish7',{
        model: item.model,
        modelId: item.model_id,
      }); 

      navigation.navigate('Dish8',{
        model: item.model,
        modelId: item.model_id,
      }); 

      navigation.navigate('Dish9',{
        model: item.model,
        modelId: item.model_id,
      }); 

      navigation.navigate('Dish10',{
        model: item.model,
        modelId: item.model_id,
      }); 
    } catch (error) {
      console.error('Error saving search to server:', error);
    } finally {
      setSearchText('');
      Keyboard.dismiss();
    }
  };
  
  
  

  const renderItem = ({ item }: any) => (
    <View>
        <KeyboardAvoidingView enabled>
          <View
            style={{
              width: '95%',
              height: 110,
              backgroundColor: 'white',
              marginTop: 0,
              alignSelf: 'center',
              borderBottomColor: '#EBE9E9',
              borderBottomWidth: 1,
              
            }}>
            <TouchableOpacity onPress={() => handleImageClick(item)}>
              <View
                style={{
                  width: '90%',
                  height: 90,
                  backgroundColor: 'white',
                  alignSelf: 'center',
                  marginTop: 10,
                  flexDirection: 'row',
                }}>
                {item.image && (
                 <View style={{width:50, height:50, borderRadius:42, borderColor:'#DA5466', borderWidth:1, alignSelf:'center'}}>
                   <Image
                    style={{
                      width: 45,
                      height: 45,
                      marginTop: 1,
                      marginLeft: 0,
                      borderRadius:42,
                      alignSelf:'center' 

                    }}
                    source={{ uri: item.image }}
                  />
                 </View>
                 
                )}

                <View style={{ flexDirection: 'column' }}>
                  {item.model && (
                    <Text
                      style={{
                        fontSize: 11,
                        color: '#DA5466',
                        marginTop: 27,
                        fontWeight: '400',
                        marginLeft: 14,
                      }}>
                      {item.model}
                    </Text>
                  )}
                  {item.name && (
                    <Text
                      style={{
                        fontSize: 15,
                        color: '#424242',
                        fontWeight: '400',
                        marginTop: 0,
                        marginLeft: 14,
                      }}>
                      {item.name}
                    </Text>
                  )}
                </View>

                <Image
                  style={{
                    width: 25,
                    height: 25,
                    alignSelf: 'center',
                    marginLeft: 'auto',
                  }}
                  source={require('../assets/Search/arrow.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
  );

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ alignItems: 'center', top: 10, backgroundColor: 'white' }}>
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 30,
            shadowColor: '#000',
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 6,
            width: searchBarWidth,
            height: searchBarHeight,
            marginTop: 17,
          }}
        >
          <TextInput
            style={{
              fontSize: 16,
              paddingLeft: 20,
              flex: 1,
              fontWeight: '400',
              lineHeight: 12,
              paddingTop: 20,
              width: '70%',
              marginLeft: 50,
              color: 'black',
            }}
            placeholder=""
            onChangeText={handleChangeText}
            value={searchText}
            placeholderTextColor={'#424242'}
            returnKeyType="next"
          />

          <TouchableOpacity
            onPress={() => setSearchText('')}
            style={{ position: 'absolute', top: 8, left: 10 }}
          >
            {searchText === '' ? (
              <Image
                style={{ width: 45, height: 45 }}
                source={require('../assets/Left.png')}
              />
            ) : (
              <Image
                style={{ width: 45, height: 45 }}
                source={require('../assets/cross.png')}
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleChangeText(searchText)}
            style={{ position: 'absolute', top: 7, left: 225 }}
          >
            {searchText === '' ? (
              <Image
                style={{
                  position: 'absolute',
                  left: 65,
                  top: (searchBarHeight - 60) / 2,
                }}
                source={require('../assets/SearchBar.png')}
              />
            ) : (
              <Image
                style={{
                  position: 'absolute',
                  left: 65,
                  top: (searchBarHeight - 60) / 2,
                }}
                source={require('../assets/Search/searchTwo.png')}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>

      {searchText === '' ? (
        <View style={{ flex: 1, backgroundColor: 'white', marginTop: 20 }}>
          <Text
            style={{
              marginTop: 10,
              paddingVertical: 10,
              marginLeft: 25,
              color: '#191C1F',
              fontSize: 18,
              fontWeight: '700',
            }}
          >
            Recent Searches
          </Text>

          {loadingRecentSearches ? (
            <Text style={{ color: 'blue', alignSelf: 'center' }}>
              Loading recent searches...
            </Text>
          ) : (
            <FlatList
              data={recentSearches}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
            />
          )}
        </View>
      ) : (
        <View style={{ flex: 1, marginTop: 30, backgroundColor: 'white' }}>
          {filteredData.length === 0 && searchText.length >= 3 ? (
            <Text style={{ alignSelf: 'center', color: 'black' }}>
              No results found
            </Text>
          ) : (
            <FlatList
              data={filteredData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
            />
          )}
        </View>
      )}
    </View>
  );
};



export default Search;
