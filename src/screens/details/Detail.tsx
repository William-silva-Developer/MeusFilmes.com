import React from 'react';
import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';


 import { 
  Container, 
  AreaModal, 
  CloseModal, 
  ButtonText, 
  ContentMain, 
  AreaSinopse, 
  ButtonClose, Title, Description, Sinopse, Image } from './styles';




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
            
            <Image source={{uri: params.image}} resizeMode='contain' />

          </AreaSinopse>


        </ContentMain>



        </AreaModal>                 
                        
    
  </Container>
          
  )
}

export default Details;