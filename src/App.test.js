import { render, screen } from "@testing-library/react"
import  userEvent  from "@testing-library/user-event"
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
  test('show welcome text with the login button clicked', ()=>{
    
    // arrange
    render(<App />)

    // act
    const loginButton = screen.getByRole('button')
    userEvent.click(loginButton)

    // asserts
    const welcomeText = screen.getByText('welcome', {exact:false})
    expect(welcomeText).toBeInTheDocument()
  })
  test('show the property list when property fetch successfully', async()=>{
    // arange
    window.fetch = jest.fn()
    window.fetch.mockResolvedValueOnce({
      json : async ()=>[{userId :"property 1"}]
      
    })
    render(<App />)


    // asserts
    const listItems = await screen.findAllByRole("listitem")
    expect(listItems).not.toHaveLength(0)


  })
})