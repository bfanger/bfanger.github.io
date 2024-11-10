<script module lang="ts">
  import type {
    BufferGeometry,
    Camera,
    Mesh,
    MeshPhysicalMaterial,
  } from "three";
  import { onMount } from "svelte";
  import { spring } from "svelte/motion";
  import { PerspectiveCamera, Scene, Vector3, WebGLRenderer } from "three";
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

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
  import { run } from "svelte/legacy";

  let el: HTMLCanvasElement | undefined = $state();
  let renderer: WebGLRenderer;
  let scene: Scene;
  let camera: Camera;
  let avatar: Avatar3D;
  type XZ = { x: number; z: number };
  const xz = spring<XZ>({ x: 0, z: 0 }, { stiffness: 0.1, damping: 0.4 });

  onMount(() => {
    renderer = new WebGLRenderer({
      canvas: el,
      alpha: true,
      // antialias: true
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
      rotate($xz);
    });
    return () => {
      renderer.dispose();
    };
  });
  function mousemoved(e: MouseEvent) {
    $xz = {
      z: (e.clientX / window.innerWidth - 0.5) * -0.25,
      x: (e.clientY / window.innerHeight - 0.5) * 0.4,
    };
  }
  function rotate({ x, z }: XZ) {
    if (!avatar) {
      return;
    }
    avatar.rotation.x = x;
    avatar.rotation.z = z;
    renderer.render(scene, camera);
  }
  run(() => {
    rotate($xz);
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
