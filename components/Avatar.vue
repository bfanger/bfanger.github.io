<template>
  <canvas />
</template>

<script>
import { WebGLRenderer, PerspectiveCamera, Scene, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default {
  mounted() {
    window.addEventListener("mousemove", this.mousemoved);
    this.renderer = new WebGLRenderer({
      canvas: this.$el,
      alpha: true
      // antialias: true
    });
    this.renderer.gammaFactor = 2.2;
    this.renderer.gammaOutput = true;

    this.camera = new PerspectiveCamera(25, 250 / 250, 0.25, 20);
    this.camera.position.set(2.3, 0, 0);
    this.scene = new Scene();

    const loader = new GLTFLoader();
    loader.load("/3d/avatar.gltf", gltf => {
      this.avatar = gltf.scene.children[3];
      this.avatar.position.x += 0.2;
      this.avatar.position.y += 0;
      this.avatar.material.anisotropy = this.renderer.getMaxAnisotropy();
      this.scene.add(this.avatar);

      this.camera.lookAt(new Vector3(0, 0, 0));
      this.renderer.render(this.scene, this.camera);
    });
  },
  beforeDestroy() {
    this.renderer.dispose();
    window.removeEventListener("mousemove", this.mousemoved);
  },
  methods: {
    mousemoved(e) {
      if (!this.avatar) {
        return;
      }
      const rotateY = e.clientX / window.innerWidth - 0.5;
      const rotateZ = e.clientY / window.innerHeight - 0.5;
      this.avatar.rotation.y = rotateY * 0.25 + 0.1;
      this.avatar.rotation.z = rotateZ * -0.23;
      this.renderer.render(this.scene, this.camera);
    }
  }
};
</script>
