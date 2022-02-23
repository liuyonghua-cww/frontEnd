export const useFunction = <T>(functionBody: string, myChart: any): T | undefined => {
    let result: T | undefined
    let fun: Function = new Function('myChart', functionBody);
    result = fun(myChart);
    return result;
}
