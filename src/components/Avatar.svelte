<script>
  import { WebGLRenderer, PerspectiveCamera, Scene, Vector3 } from "three";
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
  import { onMount } from "svelte";
  let el;
  let renderer;
  let scene;
  let camera;
  let avatar;

  onMount(() => {
    renderer = new WebGLRenderer({
      canvas: el,
      alpha: true
      // antialias: true
    });
    renderer.gammaFactor = 2.2;
    renderer.gammaOutput = true;

    camera = new PerspectiveCamera(25, 250 / 250, 0.25, 20);
    camera.position.set(2.3, 0, 0);
    scene = new Scene();

    const loader = new GLTFLoader();
    loader.load("/3d/avatar.gltf", gltf => {
      avatar = gltf.scene.children[3];
      avatar.position.x += 0.2;
      avatar.position.y += 0;
      avatar.material.anisotropy = renderer.capabilities.getMaxAnisotropy();
      scene.add(avatar);

      camera.lookAt(new Vector3(0, 0, 0));
      renderer.render(scene, camera);
    });
    return () => {
      renderer.dispose();
    };
  });
  function mousemoved(e) {
    if (!avatar) {
      return;
    }
    const rotateY = e.clientX / window.innerWidth - 0.5;
    const rotateZ = e.clientY / window.innerHeight - 0.5;
    avatar.rotation.y = rotateY * 0.25 + 0.1;
    avatar.rotation.z = rotateZ * -0.23;
    renderer.render(scene, camera);
  }
</script>

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

<canvas bind:this={el} class="avatar" />
<svelte:window on:mousemove={mousemoved} />
