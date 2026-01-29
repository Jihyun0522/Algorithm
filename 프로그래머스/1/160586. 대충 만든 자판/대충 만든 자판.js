function solution(keymap, targets) {
    var answer = [];
    const minPressMap = {};

    for (const keys of keymap) {
      for (let i = 0; i < keys.length; i++) {
        const char = keys[i];
        const pressCount = i + 1;

        if (!minPressMap[char] || pressCount < minPressMap[char]) {
          minPressMap[char] = pressCount;
        }
      }
    }
    
    return targets.map(word => {
        return word.split("").reduce((acc, char) => {
            if (acc === -1 || !minPressMap[char]) return -1;
            return acc + minPressMap[char];
        }, 0);
    });
}