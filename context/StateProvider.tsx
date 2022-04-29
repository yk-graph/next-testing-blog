import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react'

const StateContext = createContext(
  {} as {
    toggle: boolean
    setToggle: Dispatch<SetStateAction<boolean>>
  }
)

export const StateProvider: React.FC = ({ children }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <StateContext.Provider value={{ toggle, setToggle }}>
      {children}
    </StateContext.Provider>
  )
}

// useContext(StateContext)をどのコンポーネントからでも呼び出せるようにカスタムフックとして定義しておく
export const useStateContext = () => useContext(StateContext)
