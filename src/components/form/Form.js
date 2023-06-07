import { createRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import { Button, TextField } from '@mui/material';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
`

const Title = styled.h2`

`

const InputWrapper = styled.div`
  margin-top: 20px;
`

const Form = () => {


  return (
    <Wrapper>
      <Title>Food</Title>
      <InputWrapper>
        <TextField id="food-name" label="Food Name" variant="standard" />
      </InputWrapper>
      <InputWrapper>
        <TextField id="food-orders" label="Food Orders" variant="standard" />
      </InputWrapper>
      <InputWrapper>
        <TextField id="food-price" label="Food Price" variant="standard" />
      </InputWrapper>
      <InputWrapper>
        <Button variant='outlined'>Add</Button>
      </InputWrapper>
    </Wrapper>
  );
}

export default Form;
