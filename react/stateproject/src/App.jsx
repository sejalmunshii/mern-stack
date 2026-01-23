import React, { useState } from 'react'
import Color from './component/useState/color'
import Slider from './component/useState/slider';
import Likebtn from './component/useState/likebtn';
import Showhide from './component/useState/Showhide';
import Counter from './component/useState/Counter';
import Formtask from './component/useState/Formtask';
import Mode from './component/useState/Mode';
import Btnclick from './component/event/btnclick';
import Parameter from './component/event/parameter';
import Greeting from './component/conditional/Greeting';
import Notification from './component/conditional/Notification';
import Componentrender from './component/conditional/Componentrender';
import Name from './component/list/name';
import UniqueKey from './component/list/UniqueKey';
import TodoList from './component/list/TodoList';
import Task1 from './component/form/task1';
import Task2 from './component/form/task2';
import Task3_4 from './component/form/Task3_4';
import Agechecker from './component/event/Agechecker';
import Task5 from './component/form/task5';
import FetchData from './component/UseEffect/FetchData';
import AddToCart from './component/UseEffect/AddToCart';
import AutoCounter from './component/UseEffect/AutoCounter';
import Online_Offline_Detector from './component/UseEffect/Online_Offline_Detector';
import MouseTracker from './component/UseEffect/MouseTracker';
import DataFetch_Onclick from './component/UseEffect/DataFetch_Onclick';
import Timer from './component/UseEffect/Timer';
import ThemeSync from './component/UseEffect/ThemeSync';
import CounterMemo from './component/UseMemo/CounterMemo';
import ChildCallback from './component/UseCallback/ChildCallback';
import CardUseState from './component/UseState/LiftState/CardUseState';
import Todo_List from './component/UseState/Todo_list';
import Todo from './component/UseState/TodoComp/Todo';

function App() {
  // const [name,setName]=useState('');
  return (
    <>

    {/* usestate task */}
      {/* <Color />
     <Slider />
     <Likebtn/>
     <Showhide/>
     <Counter/>
     <Formtask/>
     <Mode/>  */}
     {/* <Todo_List/> */}
     <Todo/>
     {/* <CardUseState name={name} setName={setName}/>
      <p>this is parent name:{name}</p> */}
    




     {/* event task */}
     {/* <Btnclick/>
     <Formtask/>
     <Parameter/> */}
     {/* <Agechecker/> */}


     {/* conditional */}
{/* 
          <Greeting/> 
          <Notification/> 
          <Componentrender/>  */}

     {/* List */}
          {/* <Name/> 
          // <UniqueKey/>  */}
           {/* <TodoList/>  */}
          {/* <Task1/>  */}
           {/* <Task2/>  */}
          {/* <Task3_4/>  */}
          {/* <Task5/> */}


          {/* useeffect */}
          {/* <FetchData/> */}
          {/* <AddToCart/> */}
          {/* <AutoCounter/> */}
          {/* <Online_Offline_Detector/> */}
          {/* <MouseTracker/> */}
          {/* <DataFetch_Onclick/> */}
          {/* <Timer/> */}
          {/* <ThemeSync/> */}



          {/* usememo */}
          {/* <CounterMemo/> */}


          {/* usecallback */}

          {/* <ChildCallback/> */}
      </>
  )
}

export default App;