import { NextResponse } from "next/server";
import { getAllServices } from "@/lib/data";

export async function GET() {
  try {
    const services = await getAllServices();
    return NextResponse.json(services);
  } catch (err) {
    console.error("[services]", err);
    return NextResponse.json([], { status: 500 });
  }
}
