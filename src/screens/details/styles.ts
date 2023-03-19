import styled from 'styled-components/native';

export const Container = styled.Modal`
flex: 0.3;
justify-content: center;
align-items: center;
background-color: transparent;
margin: 22px;
`;

export const AreaModal = styled.View`
background: #111;
flex: 1;
`;

export const CloseModal = styled.View`
flex: 0.1;
justify-content: flex-start;
flex-direction: row;
margin: 15px;
`;

export const ButtonClose = styled.TouchableOpacity`
justify-content: center;
flex-direction: row;
align-items: center;
background: #e52246;
width: 100px;
height: 40px;
`;

export const ButtonText = styled.Text`
font-size: 16px;
color: #fff;
`;

export const ContentMain = styled.View`
flex: 1;
`;

export const Title = styled.Text`
font-size: 24px;
color: #e52246;
margin: 10px;
opacity: 0.8;
`;

export const Sinopse = styled.Text`
font-size: 18px;
color: #fff;
margin-left: 10px;
`;

export const AreaSinopse = styled.View`
flex: 1;
background: #333;
opacity: 0.5;
alignItems: center;
justifyContent: flex-start;
padding: 10px;
`;

export const Description = styled.Text`
text-align: justify;
font-size: 18px;
color: #fff;
`;
export const ContentImage = styled.View`
flex: 1;
width: 100%;
`;


export const Image = styled.Image`
height: 200px;;
width: 100%;
`;

export const ContentLike = styled.TouchableOpacity`
flex-direction: row;
align-items: center;
justify-content: flex-start;
gap: 8px;
`;

export const HeartLike = styled.Image`
width: 20px;
height: 20px;
margin-bottom: 2px;
`;
export const Textlikes = styled.Text`
font-size: 18px;
color: #fff;
`;

export const ContentLiked = styled.View`
padding: 1px;
align-items: center;
justify-content: flex-start;
border-radius: 5px;
flex-direction: row;
gap: 8px;
`;

export const TextCont = styled.Text`
font-size: 20px;
color: #e52246;
`;