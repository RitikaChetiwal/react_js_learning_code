export const Child = (props) => {
  const sendData = () => {
    // console.log(props);
    props.get(data)
  }

  const data = ['Ritika', 'Nisha', 'Gaurav', 'Sharanya', 'Neeraj', 'Varsha', 'Indu'];

  return (
    <div>
      <button onClick={sendData}>Click to see data</button>
    </div>
  )
}