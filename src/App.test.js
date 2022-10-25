import { render, screen } from "@testing-library/react"
import App from "./App"

describe('app component', ()=>{

  test('with hello world test', ()=>{
    
    // assets
    render(<App />)
    const helloWorldTest = screen.getByText('Hello world', {exact:false})
    expect(helloWorldTest).toBeInTheDocument()
  })
  test('with login basic senario', ()=>{
    
    // assets
    render(<App />)
    const loginText = screen.getByText('Please login first')
    expect(loginText).toBeInTheDocument()
  })
  test('not show the welcome text when login is false', ()=>{
    
    // assets
    render(<App />)
    const welcomeText = screen.queryByText('Welcome')
    expect(welcomeText).toBeNull()
  })
})