import React, { useEffect, useState } from "react";
import { connectAdvanced } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom"; // parameter of same id
import db from "../firebase"; //import database
import { doc, onSnapshot } from "firebase/firestore";

function Details() {
  const { id } = useParams(); //pass id as parameter to get same id's data
  const [movie, setMovie] = useState(); //set movie state

  useEffect(() => {
    //grab the movie info from firebase db
    onSnapshot(doc(db, "movies", id), (doc) => {
      setMovie(doc.data());
    });
  }, []);

  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.backgroundImg} />
          </Background>
          <ImageTitle>
            <img src={movie.titleImg} />
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
          <SubTitle>{movie.subTitle}</SubTitle>
          <Description>{movie.description}</Description>
        </>
      )}
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
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin-top: 60px;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
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
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
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
  &:hover {
    background: rgb(198, 198, 197);
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

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  color: rgb(249, 249, 249);
  line-height: 1.4;
  max-width: 768px;
  font-size: 20px;
  margin-top: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
