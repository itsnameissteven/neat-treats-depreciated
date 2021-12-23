import React, { useRef, useEffect, useState } from "react";
import SimplexNoise from "simplex-noise";
import { number } from "yargs";
import "./Confetti.scss";
import ConfettiInstance from "./ConfettiInstance";

const Confetti = () => {
  const [playAnimation, setPlayAnimation] = useState(false);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const Random = new SimplexNoise();

  useEffect(() => {
    const newCanvas = canvas.current;
    if (newCanvas) {
      setContext(newCanvas.getContext("2d"));
      newCanvas.width = window.innerWidth;
      newCanvas.height = window.innerHeight;
    }
  }, [canvas]);

  class Particle {
    angle: number;
    velocity: number;
    decay: number;
    gravity: number;
    x: number;
    y: number;
    random: number;
    tiltOffSet: any;
    tiltAngle: number;

    constructor() {
      this.angle = 0;
      this.velocity = 0;
      this.gravity = 0;
      this.x = 0;
      this.y = 0;
      this.decay = 0;
      this.random = Math.random();
      this.tiltOffSet = Random.noise2D(
        this.x / this.random,
        this.y / this.random
        // 1,
        // Math.PI / 16
      );
    }

    moveParticle() {
      this.x += Math.cos(this.angle) * this.velocity;
      this.y += Math.sin(this.angle) * this.velocity + this.gravity;
      this.velocity *= this.decay;
      this.tiltAngle = this.tiltAngle + this.tiltOffSet;
    }
  }

  // let x = 100;
  // let dx = 5;
  // let y = 300;
  // let dy = 5;
  // let radius = 30;

  // let ball = { x: 30, y: 30, speed: 0.1, t: 0, radius: 20 };

  // let points = [
  //   { x: ball.x, y: ball.y },
  //   { x: 70, y: 200 },
  //   { x: 125, y: 295 },
  //   { x: 350, y: 350 },
  // ];

  // const drawBall = () => {
  //   if (!context) {
  //     return;
  //   }
  //   context.fillStyle = "black";
  //   context.beginPath();
  //   context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
  //   context.fill();
  // };

  // const moveBall = () => {
  //   let [p0, p1, p2, p3] = points;
  //   let cx = 3 * (p1.x - p0.x);
  //   let bx = 3 * (p2.x - p1.x) - cx;

  //   let ax = p3.x - p0.x - cx - bx;

  //   let cy = 3 * (p1.y - p0.y);
  //   let by = 3 * (p2.y - p1.y) - cy;

  //   let ay = p3.y - p0.y - cy - by;

  //   let t = ball.t;

  //   ball.t += ball.speed;

  //   let xt = ax * (t * t * t) + bx * (t * t) + cx * t + p0.x;
  //   let yt = ay * (t * t * t) + by * (t * t) + cy * t + p0.y;

  //   if (ball.t > 1) {
  //     ball.t = 1;
  //   }

  //   ball.x = xt;
  //   ball.y = yt;
  //   drawBall();
  // };

  // const animate = () => {
  //   if (!context) {
  //     return;
  //   }
  //   requestAnimationFrame(animate);
  //   context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  //   if (!playAnimation) {
  //     drawBall();
  //   } else {
  //     moveBall();
  //   }
  // };
  // animate();

  return (
    <canvas
      ref={canvas}
      className="confetti"
      onClick={() => setPlayAnimation(!playAnimation)}
    ></canvas>
  );
};

export default Confetti;
