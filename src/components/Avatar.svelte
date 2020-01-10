<script context="module">
  import { onMount } from "svelte"
  import { spring } from "svelte/motion"
  import { WebGLRenderer, PerspectiveCamera, Scene, Vector3 } from "three"
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

  const avatarPromise = new Promise(resolve => {
    const loader = new GLTFLoader()
    loader.load("/3d/avatar.gltf", gltf => {
      const avatar = gltf.scene.children[3]
      avatar.position.x += 0.2
      avatar.position.y += 0
      resolve(avatar)
    })
  })
</script>

<script>
  let el
  let renderer
  let scene
  let camera
  let avatar
  const yz = spring({ y: 0, z: 0 }, { stiffness: 0.1, damping: 0.4 })

  onMount(() => {
    renderer = new WebGLRenderer({
      canvas: el,
      alpha: true
      // antialias: true
    })
    renderer.gammaFactor = 2.2
    renderer.gammaOutput = true

    camera = new PerspectiveCamera(25, 250 / 250, 0.25, 20)
    camera.position.set(2.3, 0, 0)
    scene = new Scene()

    avatarPromise.then(_avatar => {
      avatar = _avatar
      avatar.material.anisotropy = renderer.capabilities.getMaxAnisotropy()
      scene.add(avatar)

      camera.lookAt(new Vector3(0, 0, 0))
      rotate($yz)
    })
    return () => {
      renderer.dispose()
    }
  })
  function mousemoved(e) {
    $yz = {
      y: (e.clientX / window.innerWidth - 0.5) * 0.25 + 0.1,
      z: (e.clientY / window.innerHeight - 0.5) * -0.23
    }
  }
  function rotate({ y, z }) {
    if (!avatar) {
      return
    }
    avatar.rotation.y = y
    avatar.rotation.z = z
    renderer.render(scene, camera)
  }
  $: rotate($yz)
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
