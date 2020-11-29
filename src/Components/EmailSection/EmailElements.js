import styled from 'styled-components';
import ImgGym3 from '../../assets/images/gym-3.jpg';

export const EmailContainer = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${ImgGym3}) no-repeat center;
  background-size: cover;
  height: 450px;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EmailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EmailH1 = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
  font-size: clamp(1rem, 5vw, 3rem);
  padding: 0 1rem;
`;

export const EmailP = styled.p`
  text-align: center;
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  padding: 0 1rem;
  margin-bottom: 2rem;
`;

export const EmailForm = styled.form`
  z-index: 10;
`;

export const FormWrap = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
  }
`;

export const FormLabel = styled.label`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const FormInput = styled.input`
  padding: 1rem 1.5rem;
  outline: none;
  width: 350px;
  height: 50px;
  border: none;
  margin-right: 1rem;
  border-radius: 4px;

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
    width: 100%;
    margin-right: 0;
  }
`;

export const ButtonSubmit = styled.button`
  padding: 1rem 3rem;
  border: none;
  background: #f9032f;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  transition: 0.3s ease;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    background: #000;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: 350px;
  }

  @media screen and (max-width: 480px) {
    min-width: 250px;
  }
`;
