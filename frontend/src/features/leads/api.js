export const submitLead = async (leadData) => {
  const response = await fetch(
    `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-lead`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
      },
      body: JSON.stringify(leadData),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result?.error || "Failed to submit lead");
  }

  return result;
};