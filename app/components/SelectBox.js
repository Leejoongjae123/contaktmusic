"use client";
import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { animals } from "./data";
import axios from "axios";
import { useState, useEffect } from "react";
import { Spinner } from "@nextui-org/spinner";

export default function App({
  isComplete,
  setIsComplete,
  musicSource,
  setMusicSource,
}) {
  const [musicMap, setMusicMap] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let url = "https://kdzsitzpnhddoodzimyv.supabase.co";
    let anon_key =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkenNpdHpwbmhkZG9vZHppbXl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0MzgxOTYsImV4cCI6MjAzMjAxNDE5Nn0.ykDZPfy25lwUsBml4rM1Cobz8q1ASWK-uMsa5BmnNH0";
    async function fetchMusicMap() {
      try {
        const response = await axios.get(`${url}/rest/v1/musicMap`, {
          headers: {
            apikey: anon_key,
            Authorization: `Bearer ${anon_key}`,
          },
        });
        const sortedMusicMap = response.data.sort((a, b) => a.musicName.localeCompare(b.musicName));
        setMusicMap(sortedMusicMap);
        setIsComplete(true);
      } catch (error) {
        setError(error);
      }
    }

    fetchMusicMap();
  }, []);
  return (
    <div className="w-full md:w-1/2">
      {isComplete ? (
        <Select label="음원을 선택하세요" className="">
          {musicMap?.map((elem, index) => (
            <SelectItem
              key={index}
              value={elem.musicName}
              style={{ margin: 0 }}
              onClick={(e) => setMusicSource(elem.musicName)}
            >
              {elem.musicName}
            </SelectItem>
          ))}
        </Select>
      ) : (
        <div className="flex justify-center items-center">
<Spinner></Spinner>
        </div>
        
      )}
    </div>
  );
}
