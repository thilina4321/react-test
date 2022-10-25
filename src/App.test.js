import { render, screen } from "@testing-library/react"
import App from "./App"

describe('app component', ()=>{

  test('with hello world test', ()=>{
    // arrange
    render(<App />)
    // assets
    render(<App />)
    const helloWorldTest = screen.getByText('Hello world', {exact:false})
    expect(helloWorldTest).toBeInTheDocument()
  })
})