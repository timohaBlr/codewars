function solution(input, markers) {
    let array = input.split('\n')
    let markerCheck = (array) => {
        for (let i = 0; i < markers.length; i++) {
            if (array.indexOf(markers[i]) !== -1) {
                return array.indexOf(markers[i])
            }
        }
        return false
    }
    return array.map(m => {
        let index = markerCheck(m)
        return index ? m.slice(0, index).trim() : m.trim()
    }).join('\n')
};