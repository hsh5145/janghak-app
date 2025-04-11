import { useState } from "react";

const scholarshipData = [
  {
    name: "국가장학금 Ⅰ유형",
    conditions: {
      gpa: 3.0,
      incomeLevel: 8,
      region: "전국",
      family: "무관",
    },
    description: "소득 8분위 이하, 학점 3.0 이상이면 신청 가능."
  },
  {
    name: "OO시 인재육성 장학금",
    conditions: {
      gpa: 2.5,
      incomeLevel: 6,
      region: "OO시",
      family: "다자녀",
    },
    description: "OO시에 거주하며 다자녀 가정에게 제공되는 장학금."
  },
  {
    name: "대학 내부 성적우수 장학금",
    conditions: {
      gpa: 4.0,
      incomeLevel: 10,
      region: "무관",
      family: "무관",
    },
    description: "학교 내부 기준에 따라 성적 우수자에게 제공."
  },
];

export default function JanghakApp() {
  const [name, setName] = useState("");
  const [gpa, setGpa] = useState("");
  const [income, setIncome] = useState("");
  const [region, setRegion] = useState("");
  const [family, setFamily] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const gpaNum = parseFloat(gpa);
    const incomeNum = parseInt(income);

    const filtered = scholarshipData.filter((s) => {
      const c = s.conditions;
      return (
        gpaNum >= c.gpa &&
        incomeNum <= c.incomeLevel &&
        (c.region === region || c.region === "무관" || c.region === "전국") &&
        (c.family === family || c.family === "무관")
      );
    });

    setResults(filtered);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">장학금 추천 플랫폼 - 장학</h1>
      <div className="grid gap-2 mb-4">
        <input placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="학점 (예: 3.5)" value={gpa} onChange={(e) => setGpa(e.target.value)} />
        <input placeholder="소득구간 (1~10)" value={income} onChange={(e) => setIncome(e.target.value)} />
        <input placeholder="사는 지역 (예: OO시)" value={region} onChange={(e) => setRegion(e.target.value)} />
        <input placeholder="가족관계 (예: 다자녀, 한부모 등)" value={family} onChange={(e) => setFamily(e.target.value)} />
        <button onClick={handleSearch}>장학금 추천 받기</button>
      </div>

      {results.length > 0 && (
        <div className="space-y-2">
          <h2 className="text-xl font-semibold mb-2">추천 장학금</h2>
          {results.map((s, idx) => (
            <div key={idx} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
              <h3 className="font-bold text-lg">{s.name}</h3>
              <p className="text-sm text-gray-600">{s.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}