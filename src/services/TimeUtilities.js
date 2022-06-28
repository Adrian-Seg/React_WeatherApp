export function convertUnixTimeToDate(unixUtc){
    return new Date(unixUtc * 1000);
}