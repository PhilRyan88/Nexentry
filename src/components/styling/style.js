import React, { useEffect, useRef, useState } from "react";
import { TweenLite, Circ } from "gsap";
import "./style.css";
import EmailModal from "../EmailModal";
const AnimationComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleRegisterClick = () => {
    setModalIsOpen(true); // Open the modal when "Register Now" is clicked
  };

  const closeModal = () => {
    setModalIsOpen(false); // Close the modal
  };
  const canvasRef = useRef(null);
  const largeHeaderRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight / 2,
  });

  useEffect(() => {
    let ctx,
      points = [],
      target = { x: canvasSize.width / 2, y: canvasSize.height / 2 };

    const initHeader = () => {
      const largeHeader = largeHeaderRef.current;
      largeHeader.style.width = `${canvasSize.width}px`;
      largeHeader.style.height = `${canvasSize.height}px`;

      const canvas = canvasRef.current;
      canvas.width = canvasSize.width;
      canvas.height = canvasSize.height;
      ctx = canvas.getContext("2d");

      points = [];
      for (let x = 0; x < canvasSize.width; x += canvasSize.width / 20) {
        for (let y = 0; y < canvasSize.height; y += canvasSize.height / 20) {
          const px = x + (Math.random() * canvasSize.width) / 20;
          const py = y + (Math.random() * canvasSize.height) / 20;
          const p = { x: px, originX: px, y: py, originY: py };
          points.push(p);
        }
      }

      points.forEach((p1) => {
        const closest = [];
        points.forEach((p2) => {
          if (p1 !== p2) {
            closest.push(p2);
            closest.sort((a, b) => getDistance(p1, a) - getDistance(p1, b));
            if (closest.length > 5) closest.pop();
          }
        });
        p1.closest = closest;
      });

      points.forEach((p) => {
        p.circle = new Circle(
          p,
          2 + Math.random() * 2,
          "rgba(255,255,255,0.3)"
        );
      });
    };

    const addListeners = () => {
      window.addEventListener("mousemove", mouseMove);
      window.addEventListener("resize", handleResize);
    };

    const mouseMove = (e) => {
      const rect = canvasRef.current.getBoundingClientRect();
      const posx = e.clientX - rect.left;
      const posy = e.clientY - rect.top;
      target.x = posx;
      target.y = posy;
    };

    const handleResize = () => {
      setCanvasSize({
        width: window.innerWidth,
        height: window.innerHeight / 2,
      });
    };

    const initAnimation = () => {
      animate();
      points.forEach(shiftPoint);
    };

    const animate = () => {
      if (true) {
        ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
        points.forEach((p) => {
          const distance = Math.abs(getDistance(target, p));
          if (distance < 4000) {
            p.active = 0.3;
            p.circle.active = 0.6;
          } else if (distance < 20000) {
            p.active = 0.1;
            p.circle.active = 0.3;
          } else if (distance < 40000) {
            p.active = 0.02;
            p.circle.active = 0.1;
          } else {
            p.active = 0;
            p.circle.active = 0;
          }
          drawLines(p);
          p.circle.draw();
        });
      }
      requestAnimationFrame(animate);
    };

    const shiftPoint = (p) => {
      TweenLite.to(p, 1 + 1 * Math.random(), {
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: Circ.easeInOut,
        onComplete: () => shiftPoint(p),
      });
    };

    const drawLines = (p) => {
      if (!p.active) return;
      p.closest.forEach((c) => {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(c.x, c.y);
        ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
        ctx.stroke();
      });
    };

    function Circle(pos, rad, color) {
      this.pos = pos || null;
      this.radius = rad || null;
      this.color = color || null;
      this.draw = () => {
        if (!this.active) return;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = `rgba(156,217,249,${this.active})`;
        ctx.fill();
      };
    }

    const getDistance = (p1, p2) =>
      Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);

    initHeader();
    initAnimation();
    addListeners();

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [canvasSize]);

  return (
    <div className="large-header" ref={largeHeaderRef}>
      <canvas ref={canvasRef} id="demo-canvas" />
      <h1 className="main-title"></h1>
      <p className="main-titlep"></p>
      <button className="main-titleb" onClick={handleRegisterClick}>
        Register Now
      </button>

      {/* Modal for sending email */}
      <EmailModal isOpen={modalIsOpen} onClose={closeModal} />
    </div>
  );
};

export default AnimationComponent;
