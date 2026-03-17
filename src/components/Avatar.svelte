<script module lang="ts">
  import { onMount } from "svelte";
  import { Spring } from "svelte/motion";
  import {
    MathUtils,
    PerspectiveCamera,
    Euler,
    Scene,
    Vector3,
    WebGLRenderer,
    type BufferGeometry,
    type Camera,
    type Mesh,
    type MeshPhysicalMaterial,
    type Quaternion,
  } from "three";
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
  import gyro from "../services/gyro.svelte";

  type Avatar3D = Mesh<BufferGeometry, MeshPhysicalMaterial>;
  let avatarPromise: Promise<Avatar3D> | undefined;
  export function loadAvatar(): Promise<Avatar3D> {
    if (!avatarPromise) {
      avatarPromise = new Promise<Avatar3D>((resolve) => {
        const loader = new GLTFLoader();
        loader.load("/3d/avatar.gltf", (gltf) => {
          const avatar = gltf.scene.children[0];
          resolve(avatar as Avatar3D);
        });
      });
    }
    return avatarPromise;
  }
  if (typeof window !== "undefined") {
    void loadAvatar(); // preload avatar
  }
</script>

<script lang="ts">
  let el: HTMLCanvasElement | undefined = $state();
  let renderer: WebGLRenderer;
  let scene: Scene;
  let camera: Camera;
  let avatar = $state.raw<Avatar3D>();
  let initial: Quaternion;

  const spring = new Spring({ x: 0, z: 0 }, { stiffness: 0.1, damping: 0.4 });
  onMount(() => {
    renderer = new WebGLRenderer({
      canvas: el,
      alpha: true,
    });

    camera = new PerspectiveCamera(25, 250 / 250, 0.25, 20);
    camera.position.set(0, 11, 0);
    scene = new Scene();

    void loadAvatar().then((_avatar) => {
      avatar = _avatar;
      if (avatar.material.emissiveMap) {
        avatar.material.emissiveMap.anisotropy =
          renderer.capabilities.getMaxAnisotropy();
      }
      scene.add(avatar);

      camera.lookAt(new Vector3(0, 0, 0));
    });
    return () => {
      renderer.dispose();
    };
  });

  function mousemoved(e: MouseEvent) {
    if (gyro.rotation && gyro.orientation === "portrait-primary") {
      return;
    }
    void spring.set({
      z: (e.clientX / window.innerWidth - 0.5) * -0.25,
      x: (e.clientY / window.innerHeight - 0.5) * 0.4,
    });
  }

  $effect(() => {
    if (!avatar) {
      return;
    }
    avatar.rotation.x = spring.current.x;
    avatar.rotation.z = spring.current.z;
    renderer.render(scene, camera);
  });

  $effect(() => {
    if (!gyro.rotation || gyro.orientation !== "portrait-primary") {
      return;
    }
    if (!initial) {
      initial = gyro.rotation.clone().invert();
      return;
    }
    const change = gyro.rotation.clone().multiply(initial);
    const euler = new Euler().setFromQuaternion(change);
    void spring.set({
      x: MathUtils.clamp(euler.x * -0.5, -0.15, 0.15),
      z: MathUtils.clamp(euler.z * 0.5, -0.2, 0.2),
    });
  });
</script>

<canvas bind:this={el} class="avatar"></canvas>
<svelte:window onmousemove={mousemoved} />

<style>
  .avatar {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
</style>
