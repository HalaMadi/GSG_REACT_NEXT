import './index.css'
const App = () => {
  const calculator= [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className='calculator'>
      <span></span>
      <div className="numbers">
        {calculator.map((number) => (
          <button className='btn numbers-btn' aria-label={`Number ${number}`}>{number}</button>
        ))}
          <button className="btn puls-mins">+</button>
          <button className="btn puls-mins">-</button>
        <button className="btn result">=</button>
        <div >
        </div>
      </div>
    </div>
  );
};

export default App;
