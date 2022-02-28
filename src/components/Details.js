import React from "react";
import { connectAdvanced } from "react-redux";
import styled from "styled-components";

function Details() {
  return (
    <Container>
      <Background>
        <img src="" />
      </Background>
      <ImageTitle>
        <img src="" />
      </ImageTitle>
      <Controls>
        <Playbtn>
          <img src="/images/play-icon-black.png" />
          <span>PLAY</span>
        </Playbtn>
        <Trailerbtn>
          <img src="/images/play-icon-white.png" />
          <span>Trailer</span>
        </Trailerbtn>
        <Addbtn>
          <span>+</span>
        </Addbtn>
        <GroupWatchbtn>
          <img src="/images/group-icon.png" />
        </GroupWatchbtn>
      </Controls>
      <SubTitle>hey world its me</SubTitle>
      <Description>hey world its me Abd</Description>
    </Container>
  );
}

export default Details;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed; //to parent
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  height:30vh;
  min-height:170px;
  width:35vw;
  min-width:200px;
  margin-top:60px;

  img{
      height:100%
      width:100%
      object-fit:contain;
  }

`;
const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const Playbtn = styled.button`
  border-radius: 4px;
  padding: 0px 24px;
  margin-right: 22px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const Trailerbtn = styled(Playbtn)`
  background: rgb(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;

const Addbtn = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  span {
    font-size: 30px;
    color: white;
  }
`;

const GroupWatchbtn = styled(Addbtn)`
  background: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  color: rgb(249, 249, 249);
  line-height: 1.4;
  max-width: 768px;
  font-size: 20px;
  margin-top: 16px;
`;
