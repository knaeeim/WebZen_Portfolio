import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { initialSiteData } from "@/data/defaultSiteData";


const COLLECTION_NAME = "site_data";
const DOC_ID = "global_site_data";

export async function GET() {
  try {
    const db = await getDb();
    const collection = db.collection(COLLECTION_NAME);

    const doc = await collection.findOne({ _id: DOC_ID as any });

    if (!doc) {
      // First time initialization: seed MongoDB with initial site data
      await collection.updateOne(
        { _id: DOC_ID as any },
        {
          $set: {
            ...initialSiteData,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
        },
        { upsert: true }
      );
      return NextResponse.json(initialSiteData, {
        headers: { "Cache-Control": "no-store, max-age=0" },
      });
    }

    // Exclude MongoDB internal _id from the returned client JSON
    const { _id, ...siteData } = doc;
    return NextResponse.json(siteData, {
      headers: { "Cache-Control": "no-store, max-age=0" },
    });
  } catch (error: any) {
    console.error("MongoDB GET site-data error:", error.message);
    // Return fallback initial data if MongoDB is unreachable
    return NextResponse.json(initialSiteData, {
      status: 200,
      headers: { "Cache-Control": "no-store, max-age=0" },
    });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    if (!body || typeof body !== "object") {
      return NextResponse.json({ success: false, error: "Invalid payload" }, { status: 400 });
    }

    const { _id, ...cleanData } = body;

    const db = await getDb();
    const collection = db.collection(COLLECTION_NAME);

    await collection.updateOne(
      { _id: DOC_ID as any },
      {
        $set: {
          ...cleanData,
          updatedAt: new Date().toISOString(),
        },
      },
      { upsert: true }
    );

    return NextResponse.json({ success: true, message: "Site data saved to MongoDB Atlas" });
  } catch (error: any) {
    console.error("MongoDB PUT site-data error:", error.message);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  return PUT(req);
}
