import { supabase } from "./supabase/utils/client";

export default function Home() {
  console.log(supabase);

  return (
    <main>
      Home
    </main>
  );
}
