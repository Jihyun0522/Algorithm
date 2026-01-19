function solution(s){
    const lowerS = s.toLowerCase().split('');
    
    return lowerS.filter(n => n === 'p').length === lowerS.filter(n => n === 'y').length
}