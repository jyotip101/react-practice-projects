import './app.css'

// import GithubUser from './useEffect-GetHub-user/GithubUser';

// import MultipleReturn from './UseEffect-Multiple-Return/MultipleReturn';
// import ShowHide from './Show-And-Hide-Example/ShowHide';
// import Menu from './Menu-Example/Menu';
// import ControlledInput from './Controlled-Input-Example/ControlledInput'
// import MultipleInput from './Multiple-Input-Controls/MultipleInput'
// import UseRefBasic from './useRef-basics/UseRefBasic'
// import UseReducer from './useReducer/UseReducer'
// import PropDrilling from './Prop-Drilling/PropDrilling'
// import ContextAPI from './UseContaxt/ContextAPI'
// import CustomHooks from './Custom-Hooks/CustomHooks'
// import RouterBasic from './React-Router/RouterBasic'

import Projects from './z-all-projects/Projects'
import { AppProvider } from './z-all-projects/context'

function App() {
  return (
    <div className='app'>
      {/* <Projects/>   */}
      {/* <GithubUser/> */}
      {/* <MultipleReturn/> */}
      {/* <ShowHide/> */}
      {/* <Menu /> */}
      {/* <ControlledInput /> */}
      {/* <MultipleInput /> */}
      {/* <UseRefBasic /> */}
      {/* <UseReducer /> */}
      {/* <PropDrilling /> */}
      {/* <ContextAPI /> */}
      {/* <CustomHooks /> */}
      {/* <RouterBasic /> */}
      <AppProvider>
        <Projects />
      </AppProvider>
    </div>
  )
}

export default App
