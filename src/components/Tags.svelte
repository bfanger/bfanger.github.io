<script lang="ts">
  type Props = {
    tags: string[];
    active?: string;
  };
  let { tags, active }: Props = $props();
</script>

<span class="tags">
  {#each tags as tag}
    <a href="/tags/{tag}" class="tag" class:active={tag === active}>{tag}</a>
  {/each}
</span>

<style>
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
  }

  .tag {
    padding: 1px 8px 3px;
    border: 1px solid #c9ccd6;
    border-radius: 50px;

    font:
      500 14px Glory,
      sans-serif;
    color: #6e717c;

    &.active {
      border-color: #b4aeda;
      background-color: #d7d7ee;
    }

    &:hover {
      border-color: #9a98a5;
      color: white;
      text-decoration: none;
      background-color: #afafb5;
    }
  }
</style>
