function solution(N) {
    const n = "X" + N.toString(2) + "X";

    return n.split("1").map((i) => i.indexOf("X") == -1 ? i.length : 0)
        .reduce((a, b) => Math.max(a, b))

}
