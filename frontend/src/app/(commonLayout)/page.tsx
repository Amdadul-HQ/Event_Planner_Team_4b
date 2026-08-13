import HomePage from "@/pages/HomePage/HomePage";
import { getAllEvents } from "@/service/Events";

export const dynamic = "force-dynamic";

const Home = async () => {
  let events = [];
  try {
    const res = await getAllEvents();
    events = res?.data?.all || [];
  } catch (err) {
    console.error("Error loading events for homepage:", err);
  }

  return (
    <main className="min-h-screen">
      <HomePage events={events} />
    </main>
  );
};

export default Home;
