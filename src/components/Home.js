import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import db from "../firebase"; //import database
import { onSnapshot, collection } from "firebase/firestore"; //get database
import { useDispatch } from "react-redux"; //for dispatch the action
import { setMovies } from "../features/movie/movieSlice";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    onSnapshot(collection(db, "movies"), (snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        //loop through doc
        return { id: doc.id, ...doc.data() }; //grab id and data
      });
      dispatch(setMovies(tempMovies)); //saved db movie as global and we use whereevr we want
    });
  }, []);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  &:before {
    //add div before container
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
