
import {
  Suspense,
  useRef,
  useState,
  useEffect,
} from "react";

import { Canvas, useFrame } from "@react-three/fiber";

import {
  useGLTF,
  ContactShadows,
} from "@react-three/drei";

import { MathUtils } from "three";

// 3D Avatar Model
function AvatarModel() {
  const groupRef = useRef();
  const scrollRotation = useRef(0);
  const clickTimer = useRef(0);
  const elapsedTime = useRef(0);

  const [hovered, setHovered] = useState(false);

  const { scene } = useGLTF(
    "/models/nithin-portfolio-avatar-draco.glb"
  );

  // Track page scrolling
  useEffect(() => {
    const updateScrollRotation = () => {
      const maxScroll =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const scrollProgress =
        maxScroll > 0
          ? window.scrollY / maxScroll
          : 0;

      scrollRotation.current = scrollProgress * 0.7;
    };

    updateScrollRotation();

    window.addEventListener(
      "scroll",
      updateScrollRotation,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateScrollRotation
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateScrollRotation
      );

      window.removeEventListener(
        "resize",
        updateScrollRotation
      );
    };
  }, []);

  // Animate avatar
  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const group = groupRef.current;

    // Track elapsed animation time without accessing state.clock
    elapsedTime.current += delta;

    const time = elapsedTime.current;

    // Mouse and scroll rotation
    const targetRotationY =
      scrollRotation.current +
      state.pointer.x * 0.08;

    const targetRotationX =
      -state.pointer.y * 0.05;

    group.rotation.y = MathUtils.damp(
      group.rotation.y,
      targetRotationY,
      4,
      delta
    );

    group.rotation.x = MathUtils.damp(
      group.rotation.x,
      targetRotationX,
      4,
      delta
    );

    // Floating animation
    const floatY = Math.sin(time * 1.2) * 0.035;

    group.position.y = MathUtils.damp(
      group.position.y,
      floatY,
      3,
      delta
    );

    // Hover enlargement
    const targetScale = hovered ? 1.035 : 1;

    // Click pulse
    if (clickTimer.current > 0) {
      clickTimer.current = Math.max(
        0,
        clickTimer.current - delta
      );
    }

    const pulse =
      clickTimer.current > 0
        ? Math.sin(
            (1 - clickTimer.current / 0.4) * Math.PI
          ) * 0.045
        : 0;

    const finalScale = targetScale + pulse;

    const smoothScale = MathUtils.damp(
      group.scale.x,
      finalScale,
      5,
      delta
    );

    group.scale.setScalar(smoothScale);
  });

  // Click interaction
  const handleClick = (event) => {
    event.stopPropagation();
    clickTimer.current = 0.4;
  };

  return (
    <group
      ref={groupRef}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      <primitive
        object={scene}
        scale={1.9}
        position={[0, -1.15, 0]}
      />
    </group>
  );
}

// Main Avatar Component
function Avatar3D() {
  return (
    <div className="avatar-3d-container">
      <Canvas
        camera={{
          position: [0, 0, 4.7],
          fov: 32,
        }}
        dpr={[1, 1.5]}
        gl={{
          alpha: true,
          antialias: true,
        }}
      >
        <ambientLight intensity={0.9} />

        <directionalLight
          position={[3, 5, 5]}
          intensity={1.5}
        />

        <pointLight
          position={[-3, 1, 3]}
          intensity={1.8}
          color="#22d3ee"
        />

        <pointLight
          position={[3, 2, -2]}
          intensity={2}
          color="#a855f7"
        />

        <pointLight
          position={[0, 0, 4]}
          intensity={0.7}
          color="#ffffff"
        />

        <Suspense fallback={null}>
          <AvatarModel />

          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.2}
            scale={5}
            blur={2.5}
            far={4}
          />
        </Suspense>
      </Canvas>

      <div className="avatar-interaction-hint">
        <span className="interaction-dot"></span>
        Scroll to Explore
      </div>
    </div>
  );
}

// Preload compressed model
useGLTF.preload(
  "/models/nithin-portfolio-avatar-draco.glb"
);

export default Avatar3D;
