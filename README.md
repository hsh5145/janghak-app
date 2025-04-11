return (
  <div>
    <h1>장학금 추천 시스템</h1>
    <input placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} />
    <input placeholder="GPA" value={gpa} onChange={(e) => setGpa(e.target.value)} />
    <input placeholder="소득분위" value={income} onChange={(e) => setIncome(e.target.value)} />
    <input placeholder="지역" value={region} onChange={(e) => setRegion(e.target.value)} />
    <input placeholder="가족형태" value={family} onChange={(e) => setFamily(e.target.value)} />
    <button onClick={handleSubmit}>추천 받기</button>

    <h2>추천 장학금</h2>
    <ul>
      {results.map((item, index) => (
        <li key={index}>
          <strong>{item.name}</strong>: {item.description}
        </li>
      ))}
    </ul>
  </div>
);
