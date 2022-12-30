import {Tab, ButtonTab} from './TabTasks.styled';
import React from 'react';


function TabTasks({totaltasks, todotasks, donetasks, onClick, disabled1, disabled2, disabled3}) {
  return(
    <Tab>
      <ButtonTab onClick={onClick} id='1' disabled={disabled1}>Total tasks ({totaltasks})</ButtonTab>
      <ButtonTab onClick={onClick} id='2' disabled={disabled2}>Tasks to do ({todotasks})</ButtonTab>
      <ButtonTab onClick={onClick} id='3' disabled={disabled3}>Tasks done ({donetasks})</ButtonTab>
    </Tab>     
  )
}

export default TabTasks; 