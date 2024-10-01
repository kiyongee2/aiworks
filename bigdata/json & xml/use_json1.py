import json

# JSON 문자열
json_string = '{"name": "현우", "age": 27, "skills": ["Python", "C++"]}'

# JSON 문자열을 Python 객체로 변환
python_obj = json.loads(json_string)
print(python_obj)
print(type(python_obj))  # <class 'dict'>
