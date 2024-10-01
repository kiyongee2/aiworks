import json

# json 파일 불러오기
with open("engineer.json", "r", encoding="utf-8") as f:
    # JSON 문자열을 Python 객체로 변환
    data = json.load(f)
    print(data)
