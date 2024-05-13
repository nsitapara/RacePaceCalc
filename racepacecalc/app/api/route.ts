
import { NextResponse} from 'next/server'
import calculatePace from "@/app/api/calculatePace";

export async function POST(request: Request) {
  const data = await request.json()

  const time = data["time"]
  if (time === "") {
    return NextResponse.json({error: 'Please provide a time'})
  }

  // Check for valid time format HH:MM:SS
  const [hours, minutes, seconds] = time.split(":").map((x: string) => parseInt(x))
    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
        return NextResponse.json({error: 'Invalid time format. Please provide time in HH:MM:SS format'})
    }
  calculatePace(time)
  return NextResponse.json(calculatePace(time))
}