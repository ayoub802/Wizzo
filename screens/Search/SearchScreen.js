import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
  PixelRatio,
  StatusBar,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import TitleHeader from '../../components/Header/TitleHeader';
import Search from '../../components/Search/Search';
import FilterAgenda from '../../components/FilterModal/FilterAgenda';
import {COLORS, FONTFAMILY} from '../../styles/Global';
import Feather from 'react-native-vector-icons/Feather';
import Slider from 'react-native-slider';
import {
  AnimalIcon,
  EcoIcon,
  RestaurantIcon,
  ViandIcon,
} from '../../constant/image';
import {FlashList} from '@shopify/flash-list';
import {annuaire} from '../../constant/data';
import AnnuaireCard from '../../components/Cards/AnnuaireCard';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SearchScreen = () => {
  const [value, setValue] = useState(20);
  const sheetRef = useRef(null);
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;
  const plansCategorie = [
    {
      id: 1,
      title: 'Animaux',
      icon: AnimalIcon,
      bgColor: COLORS.redColor,
      width: 22,
      height: 22,
    },
    {
      id: 2,
      title: 'Economie',
      icon: EcoIcon,
      bgColor: COLORS.orangeColor,
      width: 16,
      height: 26,
    },
    {
      id: 3,
      title: 'Resto',
      icon: RestaurantIcon,
      bgColor: COLORS.greenlightColor,
      width: 22,
      height: 22,
    },
    {
      id: 4,
      title: 'Viande',
      icon: ViandIcon,
      bgColor: COLORS.skyColor,
      width: 22,
      height: 22,
    },
  ];
  useEffect(() => {
    StatusBar.setBackgroundColor('#fff');
    StatusBar.setBarStyle('dark-content');
  }, []);
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <View style={{flex: 1}}>
            <TitleHeader title={'Annuaire'} />
            <View style={{width: windowWidth * 0.85, alignSelf: 'center'}}>
              <View style={{marginTop: 10}}>
                <Search plceholderTitle={'Traiteur'} sheetRef={sheetRef} />
              </View>

              <View
                style={{
                  marginTop: windowWidth * 0.02,
                  marginBottom: windowWidth * 0.06,
                }}>
                <View
                  style={{
                    marginTop: windowWidth * 0.01,
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5,
                  }}>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontSize: getFontSize(16),
                        fontFamily: FONTFAMILY.ABeeZee,
                        textDecorationLine: 'underline',
                        color: COLORS.primary,
                        lineHeight: 36,
                      }}>
                      Utiliser ma position
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: getFontSize(16),
                      fontFamily: FONTFAMILY.ABeeZee,
                      color: COLORS.secondary,
                      lineHeight: 36,
                    }}>
                    ou Chercher un lieu
                  </Text>
                </View>
              </View>

              <View>
                <TouchableOpacity
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: COLORS.borderColor,
                    borderRadius: 15,
                    paddingVertical: windowWidth * 0.018,
                    paddingHorizontal: windowWidth * 0.018,
                  }}>
                  <View
                    style={{
                      backgroundColor: COLORS.primary_light,
                      padding: 8,
                      borderRadius: 15,
                    }}>
                    <View
                      style={{
                        backgroundColor: COLORS.white,
                        padding: 8,
                        borderRadius: 12,
                      }}>
                      <Feather
                        name="map-pin"
                        size={20}
                        color={COLORS.primary}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      marginRight: 'auto',
                      marginLeft: windowWidth * 0.08,
                    }}>
                    <Text
                      style={{
                        fontFamily: FONTFAMILY.ABeeZee,
                        fontSize: getFontSize(16),
                        color: COLORS.secondary,
                      }}>
                      Chateau Thierry , FRANCE
                    </Text>
                  </View>
                  <View>
                    <Feather
                      name="chevron-right"
                      size={20}
                      color={COLORS.primary}
                    />
                  </View>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  // width: windowWidth * 0.09
                  marginTop: windowWidth * 0.08,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: windowWidth * 0.05,
                  }}>
                  <Text
                    style={{
                      fontSize: getFontSize(16),
                      fontFamily: FONTFAMILY.ABeeZee,
                      color: COLORS.secondary,
                    }}>
                    A quelle distance ?{' '}
                  </Text>
                  <Text
                    style={{
                      fontSize: getFontSize(18),
                      fontFamily: FONTFAMILY.ABeeZee,
                      color: '#3F38DD',
                    }}>
                    {parseInt(value)}Km
                  </Text>
                </View>
                <Slider
                  minimumValue={0}
                  maximumValue={100}
                  thumbTintColor={COLORS.white}
                  minimumTrackTintColor={COLORS.primary}
                  trackStyle={{
                    backgroundColor: COLORS.borderColor,
                    height: 3,
                  }}
                  value={value}
                  thumbImage={require('../../assets/Images/map-pin.png')}
                  thumbStyle={{
                    width: 34,
                    height: 35,
                    borderWidth: 1,
                    borderColor: COLORS.primary,
                    shadowOffset: {width: 0, height: 1},
                    shadowOpacity: 0.5,
                    shadowRadius: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onValueChange={value => setValue(value)}
                />
              </View>
            </View>

            <View
              style={{
                // width: windowWidth * 0.09
                marginTop: windowWidth * 0.08,
              }}>
              <View style={{marginBottom: windowWidth * 0.05}}>
                <View
                  style={{
                    width: windowWidth * 0.9,
                    marginBottom: windowWidth * 0.02,
                    alignSelf: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: getFontSize(19),
                      fontFamily: FONTFAMILY.ABeeZee,
                      color: COLORS.secondary,
                    }}>
                    Suggestions
                  </Text>
                </View>
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  style={{marginVertical: 10, marginLeft: 10,}}>
                  {plansCategorie.map((obj, i) => (
                    <TouchableOpacity
                      key={i}
                      style={{
                        width: windowWidth * 0.3,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        gap: 8,
                        paddingVertical: 8,
                        backgroundColor: obj.bgColor,
                        borderRadius: 50,
                        marginLeft: 10,
                      }}>
                      <Image
                        source={obj.icon}
                        style={{width: obj.width, height: obj.height}}
                      />
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: getFontSize(12),
                          fontFamily: FONTFAMILY.ABeeZee,
                          color: COLORS.white,
                        }}>
                        {obj.title}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
            <View
              style={{
                width: windowWidth * 0.9,
                marginBottom: windowWidth * 0.02,
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  fontSize: getFontSize(19),
                  fontFamily: FONTFAMILY.ABeeZee,
                  color: COLORS.secondary,
                }}>
                Recherches récentes
              </Text>
              <View style={{marginTop: 20}}>
                <FlashList
                  data={annuaire}
                  renderItem={({item}) => <AnnuaireCard item={item} />}
                  estimatedItemSize={200}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <FilterAgenda sheetRef={sheetRef} />
    </>
  );
};

export default SearchScreen;
