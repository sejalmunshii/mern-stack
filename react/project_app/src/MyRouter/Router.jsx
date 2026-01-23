import { createBrowserRouter } from "react-router";
import Layout from "../Layout";
import Home from "../components/Home";
import About from "../components/About";
import Team from "../components/Team";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import LearningComp from "../components/LearningModules/LearningComp";
import RouterCompo from "../components/LearningModules/RouterComp/Routercompo";
import FoundationMenu from "../components/LearningModules/FoundationComp/FoundationMenu";
import Name from "../components/LearningModules/FoundationComp/List/Name";
import TodoList from "../components/LearningModules/FoundationComp/List/TodoList";
import UniqueKey from "../components/LearningModules/FoundationComp/List/UniqueKey";
import ListMenu from "../components/LearningModules/FoundationComp/List/ListMenu";
import Intro from "../components/LearningModules/FoundationComp/Introduction/Intro";
import FormMenu from "../components/LearningModules/FoundationComp/Form/FormMenu";
import Task1 from "../components/LearningModules/FoundationComp/Form/Task1";
import Task2 from "../components/LearningModules/FoundationComp/Form/Task2";
import Task3_4 from "../components/LearningModules/FoundationComp/Form/Task3_4";
import Task5 from "../components/LearningModules/FoundationComp/Form/Task5";
import EventsMenu from "../components/LearningModules/FoundationComp/Event/EventsMenu";
import Agechecker from "../components/LearningModules/FoundationComp/event/Agechecker";
import Btnclick from "../components/LearningModules/FoundationComp/event/Btnclick";
import Parameter from "../components/LearningModules/FoundationComp/event/Parameter";
import UseStateMenu from "../components/LearningModules/FoundationComp/UseState/UseStateMenu";
import Color from "../components/LearningModules/FoundationComp/UseState/Color";
import Counter from "../components/LearningModules/FoundationComp/UseState/Counter";
import Formtask from "../components/LearningModules/FoundationComp/UseState/Formtask";
import Likebtn from "../components/LearningModules/FoundationComp/UseState/Likebtn";
import Mode from "../components/LearningModules/FoundationComp/UseState/Mode";
import Showhide from "../components/LearningModules/FoundationComp/UseState/Showhide";
import Slider from "../components/LearningModules/FoundationComp/UseState/slider";
import ComponentMenu from "../components/LearningModules/FoundationComp/Conditional/ConditonalMenu";
import ConditonalMenu from "../components/LearningModules/FoundationComp/Conditional/ConditonalMenu";
import Componentrender from "../components/LearningModules/FoundationComp/Conditional/Componentrender";
import Form from "../components/LearningModules/FoundationComp/Conditional/Form";
import Greeting from "../components/LearningModules/FoundationComp/Conditional/Greeting";
import Notification from "../components/LearningModules/FoundationComp/Conditional/Notification";
import Togglemode from "../components/LearningModules/FoundationComp/Conditional/Togglemode";
import JsxMenu from "../components/LearningModules/FoundationComp/Jsx/JsxMenu";
import CompoMenu from "../components/LearningModules/FoundationComp/Compo/CompoMenu";
import StylingMenu from "../components/LearningModules/FoundationComp/Styling/StylingMenu";
import Styling_Task1 from "../components/LearningModules/FoundationComp/Styling/Styling_Task1";
import Styling_Task2 from "../components/LearningModules/FoundationComp/Styling/Styling_Task2";
import Styling_Task3 from "../components/LearningModules/FoundationComp/Styling/Styling_Task3";
import Front from "../components/front";


const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout><Front/></Layout>,
  },

  {
    path: "/",
    element:<Layout ><Home /></Layout>,
  },
  {
    path: "/about",
    element:<Layout><About /></Layout>,
  },
  {
    path: "/team",
    element: <Layout ><Team /></Layout>,
  },
  {
    path: "/learning",
    element: <Layout ><LearningComp /></Layout>,
    children: [
      {
        path: "foundation",
        element: <FoundationMenu />,
        children: [
          { path: "Intro", element: <Intro /> },
          { path: "Jsx", element: <JsxMenu /> },
           { path: "Compo", element: <CompoMenu/> },
          // { path: "props", element: <Props /> },
          {
            path: "Usestate", element: <UseStateMenu />,
            children: [
              { path: "color", element: <Color/> },
              { path: "counter", element: <Counter /> },
              { path: "Formtask", element: <Formtask /> },
              { path: "likebtn", element: <Likebtn /> },
              { path: "mode", element: <Mode/> },
              { path: "showhide", element: <Showhide/> },
              { path: "slider", element: <Slider/> },
            ]

          },
          {
            path: "Event", element: <EventsMenu />,
            children: [
              { path: "ageChecker", element: <Agechecker /> },
              { path: "btnClick", element: <Btnclick /> },
              { path: "parameter", element: <Parameter /> },
            ]
          },

          { path: "Conditional", element: <ConditonalMenu/>,
                children: [
              { path: "componentrender", element: <Componentrender/> },
              { path: "form", element: <Form/> },
              { path: "greeting", element: <Greeting /> }, 
              { path: "notification", element: <Notification /> }, 
              { path: "togglemode", element: <Togglemode /> }, 
            ]
           },
          {
            path: "List", element: <ListMenu />,
            children: [
              { path: "name", element: <Name /> },
              { path: "todo", element: <TodoList /> },
              { path: "uniquekey", element: <UniqueKey /> },
            ]
          },
          {
            path: "form", element: <FormMenu />,
            children: [
              { path: "task1", element: <Task1 /> },
              { path: "task2", element: <Task2 /> },
              { path: "task3-4", element: <Task3_4 /> },
              { path: "task5", element: <Task5 /> },
            ]
          },
           { path: "styling", element: <StylingMenu/>,
            children:[
              { path:"styling_Task1",element:<Styling_Task1/>},
              { path:"styling_Task2",element:<Styling_Task2/>},
              { path:"styling_Task3",element:<Styling_Task3/>},
            ]
            },
        ]
      },
      { path: "router", Component: RouterCompo },
    ],
  },
  {
    path: "/profile/:username",
    element: <><Navbar /><Profile /></>,
  },
]);




export default router;