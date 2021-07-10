import styled from "styled-components";

export const SliderContainer = styled.div`
  display: inline-flex;
  height: 100vh;
  overflow: hidden;
  transform: translateX(0);
  transition: transform 0.3s ease-out;
`
export const Slide = styled.div`
  max-height: 100vh;
  width: 100vw; //takes up the entire page 
  display: flex; //line up the images in a row
  flex-direction: column; //reset it to make the images line up in a column 
  align-items: center;
  justify-content: center;
  padding: 1rem;
  user-select: none;
  margin-bottom: 2rem;
  
  
`
// export const Img = styled.img.attrs({
//   src: ''
// })`max-width: 100%;
//   max-height: 100%;
// `


export const H2 = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`
export const H4 = styled.h4`
font-size: 1.3rem;
  margin-bottom: 1rem;
`
// export const Logo = styled.img`
//     width: 6em;
//     border:1px solid #131A22;
//     padding: .2em .1em;
//     cursor:pointer;
//     &:hover{
//         border:1px solid #ffffff;
//         border-radius: .2em;
//     }
// `

export const Btn = styled.button`
 background-color: pink;
  color: gray;
  text-decoration: none;
  padding: 1rem 1.5rem;
  margin-top: 2rem;
`





