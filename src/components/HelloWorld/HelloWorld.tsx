import React from "react";
import  './HelloWorld.scss'

const SayHello = ({ name }: { name: string }): JSX.Element => (
  <div className="h1">Hey {name}, say hello to TypeScript.</div>
);

export default SayHello;