const App = () => {
  const now = new Date()
  console.log('Hello From Component App')
    return (
      <div>
        <p>Edit Hello Word, it is {now.toString()}</p>
      </div>  )
}

export default App
