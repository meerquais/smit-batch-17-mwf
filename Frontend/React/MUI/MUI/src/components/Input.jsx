import React from 'react';
import { Flex, Input, Typography } from 'antd';
const { Title } = Typography;

const InputComponent = ({title})=>{



return(

    <>
     <Title level={5}>{title}</Title>
      <Input.OTP length={12}  />
    </>
)

}


export default InputComponent;
