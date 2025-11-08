function solution(my_strings, parts) {
     return my_strings.map((myStr, i) => {
         const s = parts[i][0];
         const l = parts[i][1] + 1;
         return myStr.slice(s, l);
    }).join("");
}