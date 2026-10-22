"use client";

import { useState } from "react";

type Profile = {
  name: string;
  role: string;
};

export function ProfileDemo() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleLoadProfile() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/profile");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: Profile = await response.json();
      setProfile(data);
      console.log("Profile loaded:", data);
    } catch (error) {
      console.error("Error fetching profile:", error);
      setError("Failed to load profile. Please try again.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <button type="button" onClick={handleLoadProfile} disabled={loading}>
        {loading ? "Loading…" : "Load profile"}
      </button>

      {profile && (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.role}</p>
        </div>
      )}
      {error && (
        <p role="alert" style={{ color: "red", fontSize: "0.875em" }}>
          {error}
        </p>
      )}
    </>
  );
}
