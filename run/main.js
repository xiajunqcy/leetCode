/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    if (!s || !words.length || !words[0].length) return []
    let len = words[0].length
    for (let i = 1; i < words.length; i++) {
        if (words[i].length != len) return []
    }
    let arr = new Array()
    for (let i = 1; i <= len; i++) {
        arr[i] = [s.substr(0, i)]
    }
    for (let i = 0; i <= parseInt(s.length / len); i++) {
        for (let j = 1; j <= len; j++) {
            let addStr = s.substr(i * len + j, len)
            addStr ? arr[j].push(addStr) : ''
        }
    }

    let res = new Array()
    for (let i = 1; i <= len; i++) {
        for (let j = 0; j <= arr[i].length - words.length; j++) {
            let tmp = '',
                rp = ''
            for (let k = 0; k < words.length; k++) {
                tmp += '-' + arr[i][j + k]
            }
            for (let k = 0; k < words.length; k++) {
                rp = tmp.replace('-' + words[k], '')
                if (!rp) {
                    res.push(j * len - (len - arr[i][0].length))
                } else if (rp === tmp) {
                    break
                } else {
                    tmp = rp
                }
            }
        }
    }
    return res
};