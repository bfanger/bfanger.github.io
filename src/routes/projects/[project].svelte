<script context="module">
    import Page from '../../components/Page.svelte';
    import ProjectCard from '../../components/ProjectCard.svelte';
    import NavButton from '../../components/NavButton.svelte';

    export async function preload({ params }) {
        const response = await this.fetch(`projects/${params.project}.json`);
        const project = await response.json();

        return { project };
    }
</script>

<script>
    import { prefetch, goto } from '@sapper/app';
    export let project;
    $: if (project.next && typeof window !== 'undefined') {
        prefetch('projects/' + project.next);
    }
    function keydown(e) {
        if (e.altKey || e.shiftKey || e.metaKey) {
            return;
        }
        if (e.key === 'ArrowLeft' && project.before) {
            goto('projects/' + project.before);
        } else if (e.key === 'ArrowRight' && project.after) {
            goto('projects/' + project.after);
        }
    }
</script>

<style lang="scss">
    // .project-page {
    //   transition-delay: 0.35s;
    // }
    .project-page__previous {
        position: fixed;
        z-index: 1;
        bottom: calc(50% - 35px);
        left: calc(50vw - 550px);
        transform: translateX(-50%);
        @media (max-width: 1290px) {
            left: 30px;
            transform: none;
        }
        @media (max-width: 880px) {
            bottom: 50px;
            left: 20px;
        }
    }
    //   .project-page__card {
    //     will-change: transform, opacity;
    //     margin-top: auto;
    //     margin-bottom: auto;
    //     @media (max-width: 880px) {
    //       margin-top: 0;
    //       margin-bottom: 70px;
    //     }
    //   }
    .project-page__next {
        position: fixed;
        z-index: 1;
        bottom: calc(50% - 35px);
        right: calc(50vw - 550px);
        transform: translateX(50%);
        @media (max-width: 1290px) {
            right: 30px;
            transform: none;
        }
        @media (max-width: 880px) {
            bottom: 50px;
            right: 20px;
        }
    }
    // .project-page.v-leave-active {
    //   .project-page__previous,
    //   .project-page__next,
    //   .project-page__disclaimer {
    //     visibility: hidden;
    //   }
    // }
</style>

<svelte:head>
    <title>{project.title}</title>
</svelte:head>
<svelte:window on:keydown={keydown} />
<Page>

    <div class="project-page__previous">
        {#if project.before}
            <NavButton href="projects/{project.before}" type="previous">
                Vorige
            </NavButton>
        {:else}
            <NavButton href="portfolio" type="previous">Portfolio</NavButton>
        {/if}
    </div>

    <ProjectCard {project} />

    {#if project.after}
        <div class="project-page__next">
            <NavButton href="projects/{project.after}" type="next">
                Volgende
            </NavButton>
        </div>
    {/if}
    <!-- <ProjectDisclaimer class="project-page__disclaimer" /> -->
</Page>
