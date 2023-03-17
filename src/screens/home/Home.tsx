import React, {useRef} from 'react';

import { ActivityIndicator, View } from 'react-native';

import { api } from '../../service/Api';
import { useNavigation } from '@react-navigation/native';






 import { 
   Container, 
    Text, 
    TextCom, 
    ContainerMain, 
    FlatList, 
    Image, 
    Nome, 
    ContainerImage, 
    AreaButton, 
    Button, 
    ButtonText,
    TextActivity, 
       } from './styles';

type ParamsFilm = {
    id: number;
    nome: string;
    sinopse: string;
    foto: string;
}


const Home: React.FC = () => {

   const navigation = useNavigation();

  
    const [filmes, setFilmes] = React.useState<ParamsFilm>();
    const [modalVisible, setModalVisible] = React.useState<boolean>(false);

    const filmRef = useRef();

    React.useEffect(() => {
        async function getFilme(){

             try {
               
                const data = (await api.get('/r-api/?api=filmes')).data;

             
                setFilmes(data);

             } catch (error) {

                alert( 'Algo deu errado.'+ error.message)
                
             }

        }
        getFilme();
    },[])


    if(!filmes){
        return(
            <View style={{backgroundColor: '#222', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator  size='large' color='#03c6c7' />
                <TextActivity>Carregando...</TextActivity>
            </View>
        )
    }else{
        return (
            <Container>
                <Text>MeusFilmes<TextCom>.com</TextCom></Text>
        
        
                <ContainerMain>
        
                <FlatList 
                    data={filmes}
                    keyExtractor={item => String(item.id)}
                    renderItem={({item}) => (
                        <ContainerImage>
                            <Nome >{item.nome}</Nome>
                            <Image source={{uri: item.foto}}  />
        
                            <AreaButton>
                            <Button ref={filmRef} onPress={()=> navigation.navigate('Details',{
                                nome: item.nome,
                                sinopse: item.sinopse,
                                image: item.foto,
                            })}>
                                <ButtonText>LEIA MAIS</ButtonText>
                            </Button>
                            </AreaButton>
                            
                            
        
                        </ContainerImage>
                        
                    )}
                    />        
        
                </ContainerMain>
        
               
                           
               
        
            </Container>
          )
        
    }


  
}

export default Home;