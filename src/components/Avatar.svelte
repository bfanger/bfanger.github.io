<script context="module" lang="ts">
  import { onMount } from "svelte"
  import { spring } from "svelte/motion"
  import {
    WebGLRenderer,
    PerspectiveCamera,
    Scene,
    Vector3,
    sRGBEncoding,
    Camera,
    Mesh,
    BufferGeometry,
    MeshPhysicalMaterial,
  } from "three"
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
  type Avatar3D = Mesh<BufferGeometry, MeshPhysicalMaterial>
  const avatarPromise = new Promise<Avatar3D>((resolve) => {
    const loader = new GLTFLoader()
    loader.load("/3d/avatar.gltf", (gltf) => {
      const avatar = gltf.scene.children[3]
      avatar.position.x += 0.2
      avatar.position.y += 0
      resolve(avatar as Avatar3D)
    })
  })
</script>

<script lang="ts">
  let el: HTMLCanvasElement
  let renderer: WebGLRenderer
  let scene: Scene
  let camera: Camera
  let avatar: Avatar3D
  type YZ = { y: number; z: number }
  const yz = spring<YZ>({ y: 0, z: 0 }, { stiffness: 0.1, damping: 0.4 })

  onMount(() => {
    renderer = new WebGLRenderer({
      canvas: el,
      alpha: true,
      // antialias: true
    })
    renderer.outputEncoding = sRGBEncoding
    camera = new PerspectiveCamera(25, 250 / 250, 0.25, 20)
    camera.position.set(2.3, 0, 0)
    scene = new Scene()

    avatarPromise.then((_avatar) => {
      avatar = _avatar
      avatar.material.emissiveMap!.anisotropy = renderer.capabilities.getMaxAnisotropy()
      scene.add(avatar)

      camera.lookAt(new Vector3(0, 0, 0))
      rotate($yz)
    })
    return () => {
      renderer.dispose()
    }
  })
  function mousemoved(e: MouseEvent) {
    $yz = {
      y: (e.clientX / window.innerWidth - 0.5) * 0.25 + 0.1,
      z: (e.clientY / window.innerHeight - 0.5) * -0.23,
    }
  }
  function rotate({ y, z }: YZ) {
    if (!avatar) {
      return
    }
    avatar.rotation.y = y
    avatar.rotation.z = z
    renderer.render(scene, camera)
  }
  $: rotate($yz)
</script>

<canvas bind:this={el} class="avatar" />
<svelte:window on:mousemove={mousemoved} />

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
