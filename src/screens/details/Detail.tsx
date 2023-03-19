import React from 'react';
import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { View } from 'react-native'
 import { 
  Container, 
  AreaModal, 
  CloseModal, 
  ButtonText, 
  ContentMain, 
  AreaSinopse, 
  ButtonClose, 
  Title, 
  Description, 
  Sinopse, Image, ContentLike, HeartLike , ContentImage, Textlikes, ContentLiked, TextCont } from './styles';




 type PropsParams = {
  Details:{
    nome?: string;
    sinopse?: string;
    image?: string;
  } 

 }

 type RouteProps = RouteProp<PropsParams, 'Details'>

function Details(){

  const { goBack } = useNavigation();

  const { params } = useRoute<RouteProps>();


  const [modalVisible, setModalVisible] = React.useState<boolean>(false);

  const [like, setLike] =React.useState<number>(0);

  
  let cont = 0;
  const handleLike = () =>{
    
    let soma = ++cont;
    setLike(soma);
    console.log("SOMA: ", soma);
            
  }

  console.log('LIKED: ',like);

  return (
    
    <Container>

        <AreaModal>

        <CloseModal>
          <ButtonClose onPress={()=> goBack()}>
            <ButtonText>Fechar</ButtonText>
          </ButtonClose>
        </CloseModal>

        <ContentMain>
          <Title>{params.nome}</Title>
          <Sinopse>Sinopse:</Sinopse>

          <AreaSinopse>
            <Description>{params.sinopse}</Description>
            
              <ContentImage>
                  <Image source={{uri: params.image}} resizeMode='contain' />
                
                
                <ContentLiked>
                  {like ? (<TextCont>{like}</TextCont>): ''}
                  <ContentLike onPress={handleLike}>
                    {!like ? (<HeartLike resizeMode='contain' source={require('../../../assets/like.png')} />)
                    :
                    (<HeartLike resizeMode='contain' source={require('../../../assets/likeada.png')} />)}
                  </ContentLike>
                  <Textlikes>Like</Textlikes>
                </ContentLiked>
              </ContentImage>
            

          </AreaSinopse>


        </ContentMain>



        </AreaModal>                 
                        
    
  </Container>
          
  )
}

export default Details;