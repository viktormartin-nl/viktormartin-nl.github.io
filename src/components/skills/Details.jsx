import React from "react";
import Label from "./Label";
import { Reveal } from "../utils/Reveal";

const Details = () => {
  return (
    <div className="flex flex-col text-left pt-5">
      {/* <div className="h-[1px] mb-5 bg-neutral-300 dark:bg-neutral-500" /> */}
      <h1 className="font-medium text-2xl text-amber-500 dark:text-amber-200">
        <Reveal width="100%">Detail and Summary</Reveal>
      </h1>
      <p className="text-sm font-light pt-1">
        I represent all data in labels to make it easier to read. The underline
        indicator shows how often I used the related item, e.g.:
      </p>

      <div className="flex gap-2 pt-1">
        <Label indicator={100}>Frequently Used</Label>
        <Label indicator={20}>Occasionally</Label>
      </div>

      <h2 className="font-medium text-lg text-amber-500 dark:text-amber-200 mt-5 mb-1">
        <Reveal width="100%">Programming Languages</Reveal>
      </h2>
      <div className="flex gap-2">
        <Label indicator={95}>Python</Label>
        <Label indicator={90}>Javascript</Label>
        <Label indicator={80}>PHP</Label>
        <Label indicator={80}>C#</Label>
      </div>

      <h2 className="font-medium text-lg text-amber-500 dark:text-amber-200 mt-5 mb-1">
        <Reveal width="100%">Technologies</Reveal>
      </h2>
      <div className="flex flex-wrap gap-2">
        <Label indicator={95}>Django</Label>
        <Label indicator={95}>React</Label>
        <Label indicator={60}>React Hooks</Label>
        <Label indicator={70}>React Redux</Label>
        <Label indicator={80}>Next.js</Label>
        <Label indicator={80}>Tailwind CSS</Label>
        <Label indicator={70}>Laravel</Label>
        <Label indicator={60}>WordPress</Label>
        <Label indicator={50}>Woo Commerce</Label>
        <Label indicator={50}>ASP.NET Core</Label>
        <Label indicator={90}>MySQL</Label>
        <Label indicator={70}>MonboDB</Label>
      </div>

      <h2 className="font-medium text-lg text-amber-500 dark:text-amber-200 mt-5 mb-1">
        <Reveal width="100%">Softwares and Tools</Reveal>
      </h2>
      <div className="flex flex-wrap gap-2">
        <Label indicator={80}>Git</Label>
        <Label indicator={70}>VS Code</Label>
        <Label indicator={50}>Linux</Label>
        <Label indicator={90}>GitHub</Label>
        <Label indicator={100}>Android Studio</Label>
        <Label indicator={100}>Visual Studio</Label>
        <Label indicator={70}>Postman</Label>
        <Label indicator={90}>Pycharm</Label>
        <Label indicator={90}>RESTful API</Label>
      </div>

      <h2 className="font-medium text-lg text-amber-500 dark:text-amber-200 mt-5 mb-1">
        <Reveal width="100%">Soft Skills</Reveal>
      </h2>
      <div className="flex flex-wrap gap-2">
        <Label indicator={100}>Effective Communication</Label>
        <Label indicator={100}>Problem Solving</Label>
        <Label indicator={100}>Creativity</Label>
        <Label indicator={100}>Team Work</Label>
      </div>
    </div>
  );
};

export default Details;
