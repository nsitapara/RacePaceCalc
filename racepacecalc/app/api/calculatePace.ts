

// Function to format the pace in minutes and seconds
function formatPace(pace: number): string {
    const minutes = Math.floor(pace)
    const seconds = Math.round((pace - minutes) * 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
}
// Function to calculate the pace per mile and pace per kilometer

export default function calculatePace(time: string): {pacePerMile: string, pacePerKm: string} {
    const [hours, minutes, seconds] = time.split(":").map((x) => parseInt(x))
    const timeInMinutes = hours * 60 + minutes + seconds / 60
    const pacePerMile = timeInMinutes / 6.21371
    const pacePerKm = timeInMinutes / 10

    return {
        pacePerMile: formatPace(pacePerMile),
        pacePerKm: formatPace(pacePerKm),
    }
}