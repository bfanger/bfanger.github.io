<script lang="ts">
  const onanimationend = "introEnded()" as any;
  const onskip = "introSkip(event)" as any;
</script>

<div class="intro">
  <div class="bob-fanger">
    <div class="clip-bob">
      <svg class="b" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 56V0h48v8h8v16h-8v8h8v16h-8v8H0zm16-32h24V8H16v16zm0
          24h24V32H16v16zm56
          8v-8h-8V24h8v-8h40v8h8v24h-8v8H72zm8-8h24V24H80v24zm56
          8v-8h-8V0h16v16h32v8h8v24h-8v8h-40zm8-8h24V24h-24v24zm112
          8V0h56v8h-40v16h32v8h-32v24h-16zm72
          0v-8h-8v-8h8v-8h32v-8h-32v-8h40v8h8v32h-48zm8-8h24v-8h-24v8zm48
          8V16h48v8h8v32h-16V24h-24v32h-16zm72
          8v-8h32v-8h-32v-8h-8V24h8v-8h48v40h-8v8h-40zm8-24h24V24h-24v16zm56
          16v-8h-8V24h8v-8h40v8h8v16h-40v8h32v8h-40zm8-24h24v-8h-24v8zm72-8h8v8h-8v24h-16V16h16v8zm32-8v8h-24v-8h24zm24
          40V40h16v16h-16zm48 0V16h48v8h8v32h-16V24h-24v32h-16zm72
          0v-8h16V8h-8V0h24v48h16v8h-48z"
          fill="#FFF"
          fill-rule="evenodd"
        />
      </svg>
      <svg class="ob" viewBox="0 0 128 64" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M-64 56V0h48v8h8v16h-8v8h8v16h-8v8h-48zm16-32h24V8h-24v16zm0
          24h24V32h-24v16zm56
          8v-8H0V24h8v-8h40v8h8v24h-8v8H8zm8-8h24V24H16v24zm56
          8v-8h-8V0h16v16h32v8h8v24h-8v8H72zm8-8h24V24H80v24zm112
          8V0h56v8h-40v16h32v8h-32v24h-16zm72
          0v-8h-8v-8h8v-8h32v-8h-32v-8h40v8h8v32h-48zm8-8h24v-8h-24v8zm48
          8V16h48v8h8v32h-16V24h-24v32h-16zm72
          8v-8h32v-8h-32v-8h-8V24h8v-8h48v40h-8v8h-40zm8-24h24V24h-24v16zm56
          16v-8h-8V24h8v-8h40v8h8v16h-40v8h32v8h-40zm8-24h24v-8h-24v8zm72-8h8v8h-8v24h-16V16h16v8zm32-8v8h-24v-8h24zm24
          40V40h16v16h-16zm48 0V16h48v8h8v32h-16V24h-24v32h-16zm72
          0v-8h16V8h-8V0h24v48h16v8h-48z"
          fill="#FFF"
          fill-rule="evenodd"
        />
      </svg>
    </div>
    <svg class="fanger" viewBox="0 0 384 64" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M-256 56V0h48v8h8v16h-8v8h8v16h-8v8h-48zm16-32h24V8h-24v16zm0
        24h24V32h-24v16zm56
        8v-8h-8V24h8v-8h40v8h8v24h-8v8h-40zm8-8h24V24h-24v24zm56
        8v-8h-8V0h16v16h32v8h8v24h-8v8h-40zm8-8h24V24h-24v24zM0
        56V0h56v8H16v16h32v8H16v24H0zm72
        0v-8h-8v-8h8v-8h32v-8H72v-8h40v8h8v32H72zm8-8h24v-8H80v8zm48
        8V16h48v8h8v32h-16V24h-24v32h-16zm72
        8v-8h32v-8h-32v-8h-8V24h8v-8h48v40h-8v8h-40zm8-24h24V24h-24v16zm56
        16v-8h-8V24h8v-8h40v8h8v16h-40v8h32v8h-40zm8-24h24v-8h-24v8zm72-8h8v8h-8v24h-16V16h16v8zm32-8v8h-24v-8h24zm24
        40V40h16v16h-16zm48 0V16h48v8h8v32h-16V24h-24v32h-16zm72
        0v-8h16V8h-8V0h24v48h16v8h-48z"
        fill="#FFF"
        fill-rule="evenodd"
      />
    </svg>
    <div class="clip-nl">
      <svg class="nl" {onanimationend} viewBox="0 0 168 64">
        <path
          d="M-656 56V0h48v8h8v16h-8v8h8v16h-8v8h-48zm16-32h24V8h-24v16zm0
          24h24V32h-24v16zm56
          8v-8h-8V24h8v-8h40v8h8v24h-8v8h-40zm8-8h24V24h-24v24zm56
          8v-8h-8V0h16v16h32v8h8v24h-8v8h-40zm8-8h24V24h-24v24zm112
          8V0h56v8h-40v16h32v8h-32v24h-16zm72
          0v-8h-8v-8h8v-8h32v-8h-32v-8h40v8h8v32h-48zm8-8h24v-8h-24v8zm48
          8V16h48v8h8v32h-16V24h-24v32h-16zm72
          8v-8h32v-8h-32v-8h-8V24h8v-8h48v40h-8v8h-40zm8-24h24V24h-24v16zm56
          16v-8h-8V24h8v-8h40v8h8v16h-40v8h32v8h-40zm8-24h24v-8h-24v8zm72-8h8v8h-8v24h-16V16h16v8zm32-8v8h-24v-8h24zM0
          56V40h16v16H0zm48 0V16h48v8h8v32H88V24H64v32H48zm72
          0v-8h16V8h-8V0h24v48h16v8h-48z"
          fill="#FFF"
          fill-rule="evenodd"
        />
      </svg>
    </div>
  </div>
  <button class="skip" onclick={onskip}>
    <div class="skip-button">Intro overslaan</div>
  </button>
</div>

<style lang="scss">
  @use "sass:math";
  $duration: 2s;
  $frameCount: (120 - 1);

  @function frame($frame) {
    @return ($frame - 1) * math.div(100%, $frameCount);
  }

  .intro {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    font-size: 20px;
  }
  .bob-fanger {
    position: absolute;
    top: calc(50% - 0.8em);
    left: calc(50% - 7.7em);
    display: flex;
    flex-direction: row;
    transform: translateZ(0);
    will-change: transform;

    svg {
      height: 0.8em;
    }
    animation: bob-fanger $duration;
    @media (min-width: 500px) {
      font-size: 30px;
    }
  }
  @keyframes bob-fanger {
    #{frame(1)} {
      transform: translateX(2.5em) translateY(-55vh);
    }
    #{frame(51)} {
      transform: translateX(2.5em);
    }
    #{frame(61)} {
      transform: translateX(2.5em);
    }
    #{frame(71)} {
      transform: translateX(0);
    }
  }
  .clip-bob {
    display: flex;
    flex-direction: row;
    padding-right: 0.8em;
    padding-left: 1.6em;
    overflow: hidden;
  }

  .b {
    transform: translateX(2.3em);
    will-change: transform;
    animation: b $duration;
  }
  @keyframes b {
    #{frame(1)} {
      transform: translateX(0);
    }
    #{frame(61)} {
      transform: translateX(0);
    }
    #{frame(74)} {
      transform: translateX(-0.8em);
    }
    #{frame(83)} {
      transform: translateX(2.5em);
    }
    #{frame(85)} {
      transform: translateX(2.3em);
    }
  }
  .ob {
    transform: translateX(2.6em);
    will-change: transform;
    animation: ob $duration;
  }
  @keyframes ob {
    #{frame(1)} {
      transform: translateX(0);
    }
    #{frame(61)} {
      transform: translateX(0);
    }
    #{frame(74)} {
      transform: translateX(-0.8em);
    }
    #{frame(82)} {
      transform: translateX(2.6em);
    }
  }
  .fanger {
    transform: translateX(0);
    will-change: transform;
    animation: fanger $duration ease-out;
  }
  @keyframes fanger {
    #{frame(1)} {
      transform: translateX(-0.3em);
    }
    #{frame(79)} {
      transform: translateX(-0.3em);
    }
    #{frame(88)} {
      transform: translateX(0);
    }
  }
  .clip-nl {
    display: flex;
    overflow: hidden;
    padding-right: 1em;
  }
  .nl {
    transform: translateZ(0);
    will-change: transform;
    animation: nl $duration ease-out;
  }
  @keyframes nl {
    #{frame(1)} {
      transform: translateX(-2.1em);
    }
    #{frame(83)} {
      transform: translateX(-2.1em);
    }
    #{frame(91)} {
      transform: translateX(0.2em);
    }
    #{frame(95)} {
      transform: translateX(0);
    }
  }
  .skip {
    border: 0;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 1.2rem 2rem;
    font-size: 1.6rem;
    opacity: 0;
    cursor: pointer;
  }
  .skip-button {
    background: rgba(black, 0.3);
    color: white;
    padding: 1.2rem 2rem;
    border: 1px solid white;
    font-weight: bold;

    &:hover {
      background: white;
      color: black;
    }
  }
</style>
