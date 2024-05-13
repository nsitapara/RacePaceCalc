// Function to format the pace in hour, minutes and seconds
function formatPace(pace: number): string {
  const hours = Math.floor(pace / 60);
  const minutes = Math.floor(pace) % 60;
  const seconds = Math.round((pace - Math.floor(pace)) * 60);
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
// Function to calculate the pace per mile and pace per kilometer

export default function calculatePace(time: string): {
  pacePerMile: string;
  pacePerKm: string;
} {
  const [hours, minutes, seconds] = time.split(":").map((x) => parseInt(x));
  const timeInMinutes = hours * 60 + minutes + seconds / 60;
  const pacePerMile = timeInMinutes / 6.21371;
  const pacePerKm = timeInMinutes / 10;

  return {
    pacePerMile: formatPace(pacePerMile),
    pacePerKm: formatPace(pacePerKm),
  };
}
