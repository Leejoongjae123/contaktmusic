import React from "react";
import {Input} from "@nextui-org/react";

export default function App({url,setUrl}) {
  console.log(url)
  return (
    <div className="w-full md:w-1/2">
      <Input 
        label="URL" 
        placeholder="당신의 영상의 주소를 입력하세요" 
        onChange={(e) => setUrl(e.target.value)}
      />
    </div>
  );
}
