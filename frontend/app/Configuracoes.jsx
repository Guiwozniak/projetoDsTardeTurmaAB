import { LinearGradient } from 'expo-linear-gradient';
import React, { useRef, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import Logofundo from "../assets/images/Logofundo.png";
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Configuracoes = React.memo(() => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <LinearGradient colors={['#8000d5', '#f910a3', '#fddf00']} style={styles.gradient}>
      <SafeAreaView style={styles.safe}>
      
        <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
       
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={Logofundo}
                accessibilityLabel="Logo do aplicativo"
              />
            </View>

           
            <Text style={styles.titulo}>Configurações</Text>

          
            <View style={styles.botoesContainer}>
              <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate('privacidade')}
              >
                <Text style={styles.textoBotao}>Privacidade</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao}>Aparência</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
});

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safe: {
    flex: 1,
  },
  voltar: {
    position: 'absolute',
    top: 55,
    left: 25,
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 25,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  container: {
    alignItems: 'center',
    width: '100%',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 25,
    backgroundColor: '#fff',
    resizeMode: 'contain',
  },
  titulo: {
    fontFamily: 'negrito',
    color: '#fff',
    fontSize: 26,
    textAlign: 'center',
    marginVertical: 25,
  },
  botoesContainer: {
    width: '75%',
    alignItems: 'center',
    gap: 18,
  },
  botao: {
    width: '100%',
    paddingVertical: 12,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'negrito',
  },
});

export default Configuracoes;
