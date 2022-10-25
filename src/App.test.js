import { render, screen } from "@testing-library/react"
import App from "./App"

describe('app component', ()=>{

  test('with hello world test', ()=>{
    render(<App />)
    const helloWorldTest = screen.getByText('Hello world', {exact:false})
    expect(helloWorldTest).toBeInTheDocument()
  })
})