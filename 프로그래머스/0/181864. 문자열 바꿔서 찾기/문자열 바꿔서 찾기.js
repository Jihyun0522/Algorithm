function solution(myString, pat) {
    myString = myString.replaceAll('A', 'X');
    myString = myString.replaceAll('B', 'A');
    myString = myString.replaceAll('X', 'B');
    
    if (myString.includes(pat)) {
        return 1;
    }
    
    return 0;
}