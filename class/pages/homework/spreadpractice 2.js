const child1 = {
    name: {first : "김", last:"철수"},
    age: 13,
    school: "다람쥐초등학교"
}

const child2 = JSON.parse(JSON.stringify(child1))


child2.name.first = "최"
child2.name.last = "영희"

console.log(child1)
console.log(child2)

