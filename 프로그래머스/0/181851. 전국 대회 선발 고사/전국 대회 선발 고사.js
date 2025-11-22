function solution(rank, attendance) {
    const eligibleStudents = rank
        .map((r, i) => ({ id: i, rank: r, attend: attendance[i] }))
        .filter(student => student.attend)
        .sort((a, b) => a.rank - b.rank);
    
    const a = eligibleStudents[0].id;
    const b = eligibleStudents[1].id;
    const c = eligibleStudents[2].id;
    
    return 10000 * a + 100 * b + c;
}