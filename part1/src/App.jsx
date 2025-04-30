const Hello = () => {
  const now = new Date()
  console.log('Hello Component Hello')
    return (
      <div>
        <p>Hello Component Hello, it is {now.toString()}</p>
      </div>  )
}
const App = () => {
  const now = new Date()
  console.log('Grettings From Component App')
    return (
      <div>
        <h1>Grettings from App Component,</h1><p> it is {now.toString()}</p>
        <Hello />
        <Hello/>
      </div>  )
}
export default App
