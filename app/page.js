"use client";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import SelectBox from "./components/SelectBox";
import InputUrl from "./components/InputUrl";
import Button from "./components/Button";

export default function Home() {
  const [musicSource, setMusicSource] = useState("음원");
  const [url,setUrl] = useState('')
  const [isComplete, setIsComplete] = useState(false);
  let supabaseUrl = 'https://kdzsitzpnhddoodzimyv.supabase.co';
  let anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkenNpdHpwbmhkZG9vZHppbXl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0MzgxOTYsImV4cCI6MjAzMjAxNDE5Nn0.ykDZPfy25lwUsBml4rM1Cobz8q1ASWK-uMsa5BmnNH0';

  async function postToPlayerlist(url, musicName) {
    try {
      const response = await axios.post(
        `${supabaseUrl}/rest/v1/playerlist`,
        { url: url, musicName: musicName },
        {
          headers: {
            apikey: anonKey,
            Authorization: `Bearer ${anonKey}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Post successful:', response.status);
      setIsComplete(true);
    } catch (error) {
      console.error('Error posting to playerlist:', error);
    }
  }


  

  
  return (
    <div className="main-section pd-bottom-64px">
      <div className="container-default w-container">
        <div className="grid-2-columns main-dashboard-grid">
          <div
            id="tables"
            data-w-id="8f2a9830-51b8-ac00-e253-f07f9f4c0a57"
            style={{ opacity: 1 }}
            className="pd-top-24px w-node-_8f2a9830-51b8-ac00-e253-f07f9f4c0a57-856bbfe2"
          >
            <div
              id="inputs"
              data-w-id="3e40ce4e-5a27-a0d4-cc3e-276ce0c1bee6"
              style={{ opacity: 1 }}
              className="pd-top-24px"
            >
              <div id="dropdowns">
                <div className="component-card-badge-top-wrapper">
                  <div className="component-card-badge-top">제출하기</div>
                </div>
                <div className="card component-card">
                  {/* <div className="grid-3-columns">
                    <div
                      id="w-node-_3e40ce4e-5a27-a0d4-cc3e-276ce0c1beed-856bbfe2"
                      className="inner-container _244px _100-tablet"
                    >
                      <div className="div-block">
                        <div
                          data-hover="true"
                          data-delay="0"
                          data-w-id="f18a1fce-0ff6-7565-5f48-1e0735f5d8ed"
                          className="width-100 w-dropdown"
                        >
                          
                          <div
                            className="dropdown-toggle w-dropdown-toggle"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              height: 50,
                            }}
                          >
                            <div
                              id="dropdown-text"
                              className="text-100 medium"
                              style={{ marginRight: "8px" }}
                            >
                              {musicSource}
                            </div>
                            <div className="line-rounded-icon dropdown-icon"></div>
                          </div>
                          <nav className="dropdown-list w-dropdown-list">
                            <div
                              className="card border-radius-6px"
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <div
                                onClick={() => {
                                  setMusicSource("봄");
                                }}
                                className="dropdown-link-wrapper w-inline-block"
                              >
                                <div>봄</div>
                              </div>
                              <div
                                onClick={() => {
                                  setMusicSource("여름");
                                }}
                                className="dropdown-link-wrapper w-inline-block"
                              >
                                <div>여름</div>
                              </div>
                              <div
                                onClick={() => {
                                  setMusicSource("가을");
                                }}
                                className="dropdown-link-wrapper w-inline-block"
                              >
                                <div>가을</div>
                              </div>
                              <div
                                onClick={() => {
                                  setMusicSource("겨울");
                                }}
                                className="dropdown-link-wrapper w-inline-block"
                              >
                                <div>겨울</div>
                              </div>
                            </div>
                          </nav>
                        </div>
                      </div>
                    </div>
                    <div
                      id="w-node-_3e40ce4e-5a27-a0d4-cc3e-276ce0c1bef2-856bbfe2"
                      className="mg-bottom-0 w-form"
                    >
                      <div
                        id="email-form"
                        name="email-form"
                        data-name="Email Form"
                        method="get"
                        data-wf-page-id="66509fbfc74b2775856bbfe2"
                        data-wf-element-id="3e40ce4e-5a27-a0d4-cc3e-276ce0c1bef3"
                      >
                        <div className="div-block-2">
                          <div>
                            <input
                              className="input text-field w-input"
                              style={{ height: 50 }}
                              maxlength="256"
                              name="Name"
                              data-name="Name"
                              placeholder="주소"
                              type="text"
                              id="Name-3"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="success-message w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="error-message w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="flex flex-col items-center gap-y-5 w-full md:flex-row md:gap-x-[5%]">
                    <SelectBox isComplete={isComplete} setIsComplete={setIsComplete} musicSource={musicSource} setMusicSource={setMusicSource}></SelectBox>
                    <InputUrl url={url} setUrl={setUrl}></InputUrl>
                  </div>
                  <div className="flex justify-center items-center mt-10">
                    <Button postToPlayerlist={postToPlayerlist} url={url} musicName={musicSource}></Button>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
