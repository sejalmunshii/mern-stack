import React,{useState} from 'react'

function Agechecker() {
  const [birthYear, setBirthYear] = useState("");
    const [ageResult, setAgeResult] = useState("");
     const checkAge = () => {
         const year = parseInt(birthYear);
         if (!isNaN(year)) {
      const age = new Date().getFullYear() - year;
      setAgeResult(`You are ${age} years old.`);
    } else {
      setAgeResult("Enter a valid year.");
    }
  };

  return (
    <>
    
      {/* Age Checker */}
      <div className="mb-4">
        <h2 className="font-semibold">Age Checker</h2>
        <input
          type="text"
          placeholder="Enter Birth Year"
          value={birthYear}
          onChange={(e) => setBirthYear(e.target.value)}
          className="border p-1 mr-2"
        />
        <button
          onClick={checkAge}
          className="bg-purple-500 text-white px-3 py-1"
        >
          Check Age
        </button>
        <p className="mt-1">{ageResult}</p>
      </div>
    </>
  )
}

export default Agechecker