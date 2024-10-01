import json

# python 객체
data = {
    "name": "현우", 
    "age": 27, 
    "skills": ["Python", "C++"]
}

# json 파일 쓰기(저장)
with open("engineer.json", "w", encoding="utf-8") as f:
    # Python 객체를 json 문자열로 변환(ensure_ascii=False : 유니코드 -> 한글)
    json.dump(data, f, ensure_ascii=False, indent=4)

